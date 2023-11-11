import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";

import "./App.css";
import "./index.css";

import { Home, Projects, Contact } from "./pages";

export default function App() {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Home />} />
        </Routes>
      </Router>
    </main>
  );
}
