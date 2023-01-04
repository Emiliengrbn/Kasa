import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink to="/" className="accueil nav_link">
        Acceuil
      </NavLink>
      <NavLink to="/about" className="a_propos nav_link">
        A Propos
      </NavLink>
    </nav>
  );
};

export default Navigation;
