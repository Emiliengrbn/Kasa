import React from "react";
import Card from "../components/Card";
const seaPicture = require("../assets/images/sea_home.png");

const Home = () => {
  return (
      <main>
        <div className="card_picture">
          <img src={seaPicture} alt="mer" className="sea_picture"></img>
          <p className="txt_picture">Chez vous, partout et ailleurs</p>
        </div>
        <Card />
      </main>
  );
};

export default Home;
