import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Logement from "./pages/Logement";
import About from "./pages/About";
import Erreur from "./pages/Erreur";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/logement/:id/" element={<Logement />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Erreur />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
