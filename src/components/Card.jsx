import React from "react";
import { Link } from "react-router-dom";
const logements = require("../logements.json");

const Card = () => {
  return (
    <div className="container_location">
      {logements.map((l) => (
        <div className="card_location">
          <Link to={'/logement/' + l.id}>
            <img className="img_location" src={l.cover} alt="logement"></img>
            <div className="title_location">{l.title}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Card;
