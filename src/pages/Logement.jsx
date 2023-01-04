import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Location from "../components/Location";
import Foot from "../components/Foot";

const Logement = () => {
  return (
    <div>
      <header>
        <Logo />
        <Navigation />
      </header>
      <main>
        <Location />
      </main>

      <footer>
        <Foot />
      </footer>
    </div>
  );
};

export default Logement;
