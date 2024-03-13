import React from "react";

const Erreur = () => {
  return (
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
  );
};

export default Erreur;
