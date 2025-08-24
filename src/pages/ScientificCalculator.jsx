import React, { useMemo, useState } from "react";

export default function ScientificCalculator() {
	const [expression, setExpression] = useState("");
	const [angleMode, setAngleMode] = useState("DEG"); // DEG | RAD

	const append = (value) => setExpression((prev) => prev + value);
	const clearAll = () => setExpression("");
	const backspace = () => setExpression((prev) => prev.slice(0, -1));

	const transformed = useMemo(() => transformExpression(expression, angleMode), [expression, angleMode]);

	const calculate = () => {
		try {
			const result = safeEvaluate(transformed, angleMode);
			setExpression(String(result));
		} catch (e) {
			setExpression("Error");
		}
	};

	return (
		<div className="calculator-page">
			<div className="container mx-auto px-6 py-8">
				<div className="text-center mb-8">
					<h1 className="page-title">Scientific Calculator</h1>
					<p className="page-subtitle">Advanced mathematical functions for complex calculations</p>
				</div>

				<div className="calculator-container">
					<div className="calc-card p-6">
						<div className="angle-mode-selector mb-6">
							<span className="mode-label">Angle Mode:</span>
							<div className="mode-buttons">
								<button
									className={`mode-button ${angleMode === "DEG" ? "active" : ""}`}
									onClick={() => setAngleMode("DEG")}
								>
									DEG
								</button>
								<button
									className={`mode-button ${angleMode === "RAD" ? "active" : ""}`}
									onClick={() => setAngleMode("RAD")}
								>
									RAD
								</button>
							</div>
						</div>

						<div className="display-section mb-6">
							<input
								type="text"
								value={expression}
								readOnly
								className="calculator-display"
								placeholder="Enter expression..."
							/>
						</div>

						<div className="scientific-buttons-grid">
							{/* Row 1: Trigonometric functions */}
							<button className="function-button" onClick={() => append("sin(")}>sin</button>
							<button className="function-button" onClick={() => append("cos(")}>cos</button>
							<button className="function-button" onClick={() => append("tan(")}>tan</button>
							<button className="function-button" onClick={() => append("^")}>^</button>

							{/* Row 2: Inverse trigonometric functions */}
							<button className="function-button" onClick={() => append("asin(")}>asin</button>
							<button className="function-button" onClick={() => append("acos(")}>acos</button>
							<button className="function-button" onClick={() => append("atan(")}>atan</button>
							<button className="function-button" onClick={() => append("sqrt(")}>√</button>

							{/* Row 3: Logarithmic functions */}
							<button className="function-button" onClick={() => append("ln(")}>ln</button>
							<button className="function-button" onClick={() => append("log(")}>log</button>
							<button className="function-button" onClick={() => append("(")}>(</button>
							<button className="function-button" onClick={() => append(")")}>)</button>

							{/* Row 4: Numbers and basic operations */}
							{["7","8","9","/","4","5","6","*","1","2","3","-","0",".","+","π"].map((btn) => (
								<button
									key={btn}
									onClick={() => append(btn)}
									className="calc-button number-button"
								>
									{btn}
								</button>
							))}

							{/* Row 5: Special functions and equals */}
							<button className="function-button" onClick={() => append("e")}>e</button>
							<button className="function-button" onClick={() => append("!")}>!</button>
							<button className="function-button" onClick={backspace}>⌫</button>
							<button className="equals-button" onClick={calculate}>=</button>

							<button className="clear-button" onClick={clearAll}>Clear All</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function transformExpression(input, angleMode) {
	let expr = input;
	// Constants
	expr = expr.replace(/π/g, "Math.PI");
	expr = expr.replace(/\bpi\b/gi, "Math.PI");
	// Replace standalone 'e' with Math.E (avoid replacing in words)
	expr = expr.replace(/\be\b/g, "Math.E");
	// Power
	expr = expr.replace(/\^/g, "**");
	// Roots
	expr = expr.replace(/√\(/g, "Math.sqrt(");
	expr = expr.replace(/\bln\(/g, "Math.log(");
	// Use wrapper functions for angle-aware trig and base-10 log
	expr = expr.replace(/\blog\(/g, "LOG(");
	expr = expr.replace(/\bsin\(/g, "SIN(");
	expr = expr.replace(/\bcos\(/g, "COS(");
	expr = expr.replace(/\btan\(/g, "TAN(");
	expr = expr.replace(/\basin\(/g, "ASIN(");
	expr = expr.replace(/\bacos\(/g, "ACOS(");
	expr = expr.replace(/\batan\(/g, "ATAN(");
	// Factorial: replace x! with FACT(x)
	// Handle numbers or parenthesized subexpressions (non-nested best-effort)
	const factorialPattern = /(\d+(?:\.\d+)?|\([^()]+\))!/g;
	while (factorialPattern.test(expr)) {
		expr = expr.replace(factorialPattern, (m, g1) => `FACT(${g1})`);
	}
	return expr;
}

function safeEvaluate(expr, angleMode) {
	const DEG = angleMode === "DEG";
	const toRad = (x) => (DEG ? x * Math.PI / 180 : x);
	const toDeg = (x) => (DEG ? x * 180 / Math.PI : x);
	const SIN = (x) => Math.sin(toRad(x));
	const COS = (x) => Math.cos(toRad(x));
	const TAN = (x) => Math.tan(toRad(x));
	const ASIN = (x) => toDeg(Math.asin(x));
	const ACOS = (x) => toDeg(Math.acos(x));
	const ATAN = (x) => toDeg(Math.atan(x));
	const LOG = (x) => Math.log10 ? Math.log10(x) : (Math.log(x) / Math.LN10);
	const FACT = (n) => {
		const v = Number(n);
		if (!Number.isFinite(v) || v < 0) return NaN;
		if (Math.floor(v) !== v) return gamma(v + 1); // factorial for non-integers via Gamma
		let acc = 1;
		for (let i = 2; i <= v; i++) acc *= i;
		return acc;
	};
	// Lanczos approximation for Gamma function for better factorial of non-integers
	function gamma(z) {
		const p = [
			676.5203681218851, -1259.1392167224028, 771.32342877765313,
			-176.61502916214059, 12.507343278686905, -0.13857109526572012,
			9.9843695780195716e-6, 1.5056327351493116e-7
		];
		const g = 7;
		if (z < 0.5) {
			return Math.PI / (Math.sin(Math.PI * z) * gamma(1 - z));
		}
		z -= 1;
		let x = 0.99999999999980993;
		for (let i = 0; i < p.length; i++) {
			x += p[i] / (z + i + 1);
		}
		const t = z + g + 0.5;
		return Math.sqrt(2 * Math.PI) * Math.pow(t, z + 0.5) * Math.exp(-t) * x;
	}

	// Evaluate with limited scope
	// eslint-disable-next-line no-new-func
	const fn = new Function("SIN","COS","TAN","ASIN","ACOS","ATAN","LOG","FACT", `return (${expr})`);
	return fn(SIN, COS, TAN, ASIN, ACOS, ATAN, LOG, FACT);
}
