import React from "react";
import Header from "./components/Header";
import AOSInitializer from "./components/AOSInitializer";
import FloatingActions from "./components/CTAButton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <AOSInitializer />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <FloatingActions />
      </Router>
    </>
  );
}

export default App;
