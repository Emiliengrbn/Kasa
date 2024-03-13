import React from "react";
const logo = require("../assets/images/kasa.png");

const Logo = () => {
  return (
    <div className="logo">
      {/* les images importées depuis la balise IMG sont accessibles dans le dossier "public" */}
      <img src={logo} alt="logo kasa" />
    </div>
  );
};

export default Logo;
