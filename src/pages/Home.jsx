import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="hero-title">
            Professional <span className="brand">Calculator Suite</span>
          </h1>
          <p className="hero-subtitle">
            Advanced mathematical tools for professionals, students, and enthusiasts
          </p>
          <div className="hero-buttons">
            <button
              onClick={() => navigate("/simple")}
              className="btn-primary btn-large"
            >
              Simple Calculator
            </button>
            <button
              onClick={() => navigate("/scientific")}
              className="btn-secondary btn-large"
            >
              Scientific Calculator
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container mx-auto px-6 py-16">
          <h2 className="section-title">Professional Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🧮</div>
              <h3>Basic Operations</h3>
              <p>Simple arithmetic with clean, intuitive interface</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔬</div>
              <h3>Scientific Functions</h3>
              <p>Trigonometry, logarithms, powers, and more</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📐</div>
              <h3>Angle Modes</h3>
              <p>Switch between degrees and radians seamlessly</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>High Performance</h3>
              <p>Fast calculations with precision handling</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Preview */}
      <section className="preview-section">
        <div className="container mx-auto px-6 py-16">
          <h2 className="section-title">Try Our Calculators</h2>
          <div className="preview-grid">
            <div className="preview-card">
              <h3>Simple Calculator</h3>
              <p>Perfect for everyday calculations</p>
              <button
                onClick={() => navigate("/simple")}
                className="btn-outline"
              >
                Try Simple Calculator
              </button>
            </div>
            <div className="preview-card">
              <h3>Scientific Calculator</h3>
              <p>Advanced functions for complex calculations</p>
              <button
                onClick={() => navigate("/scientific")}
                className="btn-outline"
              >
                Try Scientific Calculator
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
