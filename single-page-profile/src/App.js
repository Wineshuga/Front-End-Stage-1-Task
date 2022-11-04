import React from "react";
import Main from "./Components/Main"
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/"><Main/></Route>
      <Route path="/contact" ><Contact/></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
