import React from "react";
import { useParams } from "react-router-dom";
import Accordion from "./Accordion"
import ImageSlider from "./ImageSlider";
const logements = require("../logements.json");
const star = require ("../assets/images/star.png")
const orangeStar = require ("../assets/images/orangeStar.png")

const Location = () => {
  const params = useParams()

  const foundLogement = logements.find(l => {
    return l.id === params.id;
  })

  const equipement = foundLogement.equipments.map((e, index) => (
    <li key={index}>{e}</li>
  ))

  const tableau = [1, 2, 3, 4, 5]

  return (
    <div>
      <div className="containerStyles">
        <ImageSlider slides={foundLogement.pictures} />
      </div>
      <div className="container_infos">
        <div className="house_infos">
          <h1 className="house_title">{foundLogement.title}</h1>
          <p className="location_house">{foundLogement.location}</p>
          <ul className="tags_house">
            {foundLogement.tags.map((tag, index) => (
              <li key={index} className="tag">{tag}</li>
              ))}
          </ul>
        </div>
        <div className="host_infos">
          <div className="host_name_picture">
            <p className="host_name">{foundLogement.host.name}</p>
            <img src={foundLogement.host.picture} alt="" className="host_img"></img>
          </div>
          <div className="host_rating">
          
            <div className="grey_star_position">
              {tableau.map((t, key) => 
                t <= foundLogement.rating ? (
                  <img key={key} src={orangeStar} alt="etoile" className="star"/>
                ) : (<img  src={star} alt="etoile" className="star"/>)
              )}
              
            </div>
          </div>
        </div>
      </div>



      
      <div className="small__accordions">
        <div className="width_small_accordion">
          <Accordion title="Description" content={foundLogement.description}/>
        </div>
        <div className="width_small_accordion">
          <Accordion title="Equipements" content={equipement}/>
        </div>
      </div>
    </div>
  );
};

export default Location;
