import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Erreur = () => {
  return (
    <div>
      <header>
        <Logo />
        <Navigation />
      </header>
      <main className="main_error">
        <div className="element_error">
          <p className="error_404">404</p>
          <p className="message_error">
            Oups! La page que vous demandez n'existe pas
          </p>
        </div>
        <a href="/" className="link_home">
          Retourner sur la page d'accueil
        </a>
      </main>
    </div>
  );
};

export default Erreur;
