import React, { useState } from "react";

export default function SimpleCalculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => setInput(input + value);
  const handleClear = () => setInput("");
  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator-page">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="page-title">Simple Calculator</h1>
          <p className="page-subtitle">Perfect for everyday calculations</p>
        </div>
        
        <div className="calculator-container">
          <div className="calc-card p-6">
            <div className="display-section mb-6">
              <input
                type="text"
                value={input}
                readOnly
                className="calculator-display"
                placeholder="0"
              />
            </div>
            
            <div className="buttons-grid">
              {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"].map((btn) => (
                <button
                  key={btn}
                  onClick={() => (btn === "=" ? handleCalculate() : handleClick(btn))}
                  className={`calc-button ${btn === "=" ? "equals-button" : "number-button"}`}
                >
                  {btn}
                </button>
              ))}
              <button
                onClick={handleClear}
                className="clear-button"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
