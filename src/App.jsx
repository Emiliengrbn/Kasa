import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Logement from "./pages/Logement";
import About from "./pages/About";
import Erreur from "./pages/Erreur";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import Foot from "./components/Foot";

const App = () => {
  return (
    //header
    <BrowserRouter>
    <header>
    <Logo />
    <Navigation />
  </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/logement/:id/" element={<Logement />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Erreur />}></Route>
      </Routes>
      <footer>
        <Foot />
      </footer>
    </BrowserRouter>
  );
};

export default App;
