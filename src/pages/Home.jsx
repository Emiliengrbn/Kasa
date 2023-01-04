import React from "react";
import Card from "../components/Card";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Foot from "../components/Foot";
const seaPicture = require("../assets/images/sea_home.png");

const Home = () => {
  return (
    <div>
      <header>
        <Logo />
        <Navigation />
      </header>
      <main>
        <div className="card_picture">
          <img src={seaPicture} alt="mer" className="sea_picture"></img>
          <p className="txt_picture">Chez vous, partout et ailleurs</p>
        </div>
        <Card />
      </main>
      <footer>
        <Foot />
      </footer>
    </div>
  );
};

export default Home;
