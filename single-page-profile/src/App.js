import React from "react";
import Home from "./Pages/HomePage"
import './App.css';
import { Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
