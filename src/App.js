import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";

import HomePage from "./pages/HomePage.jsx";
import Agents from "./pages/Agents.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/agents" element={<Agents />} />
      </Routes>
    </Router>
  );
}

export default App;
