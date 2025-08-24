import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import SimpleCalculator from "./pages/SimpleCalculator";
import ScientificCalculator from "./pages/ScientificCalculator";

function Navigation() {
  const location = useLocation();
  
  return (
    <header className="professional-header">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="logo-section">
          <Link to="/" className="logo-link">
            <h1 className="logo-text">
              <span className="brand">Calc</span>Pro
            </h1>
          </Link>
        </div>
        
        <nav className="main-navigation">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>
          <Link 
            to="/simple" 
            className={`nav-link ${location.pathname === "/simple" ? "active" : ""}`}
          >
            Simple
          </Link>
          <Link 
            to="/scientific" 
            className={`nav-link ${location.pathname === "/scientific" ? "active" : ""}`}
          >
            Scientific
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/simple" element={<SimpleCalculator />} />
            <Route path="/scientific" element={<ScientificCalculator />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
