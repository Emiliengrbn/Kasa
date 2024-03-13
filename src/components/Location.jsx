import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Accordion from "./Accordion"
import ImageSlider from "./ImageSlider";
const logements = require("../logements.json");

const Location = () => {
  const params = useParams()

  const foundLogement = logements.find(l => {
    return l.id === params.id;
  })

  if(foundLogement === undefined) {
    return <Navigate to="/*"  />
  }

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
            <img src={foundLogement.host.picture} alt="host_pic" className="host_img"></img>
          </div>
            <div className="stars_container">
              {tableau.map((t, key) => 
                t <= foundLogement.rating ? (
                  <svg key={key} width="33" height="33" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.7212 6.84366C19.4728 6.32809 18.9479 6 18.3714 6C17.7949 6 17.2747 6.32809 17.0216 6.84366L14.0079 13.0445L7.27748 14.0382C6.71506 14.1225 6.24636 14.5162 6.07295 15.0552C5.89953 15.5942 6.04014 16.1895 6.44321 16.5879L11.327 21.4201L10.174 28.2491C10.0803 28.8115 10.3146 29.3833 10.7786 29.7161C11.2426 30.0489 11.8566 30.0911 12.3628 29.8239L18.3761 26.6133L24.3894 29.8239C24.8956 30.0911 25.5096 30.0536 25.9736 29.7161C26.4376 29.3786 26.6719 28.8115 26.5782 28.2491L25.4205 21.4201L30.3043 16.5879C30.7073 16.1895 30.8526 15.5942 30.6745 15.0552C30.4964 14.5162 30.0324 14.1225 29.47 14.0382L22.7349 13.0445L19.7212 6.84366Z" fill="#FF6060"/>
                  </svg>
                ) : (<svg width="33" height="33" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.7212 6.84366C19.4728 6.32809 18.9479 6 18.3714 6C17.7949 6 17.2747 6.32809 17.0216 6.84366L14.0079 13.0445L7.27748 14.0382C6.71506 14.1225 6.24636 14.5162 6.07295 15.0552C5.89953 15.5942 6.04014 16.1895 6.44321 16.5879L11.327 21.4201L10.174 28.2491C10.0803 28.8115 10.3146 29.3833 10.7786 29.7161C11.2426 30.0489 11.8566 30.0911 12.3628 29.8239L18.3761 26.6133L24.3894 29.8239C24.8956 30.0911 25.5096 30.0536 25.9736 29.7161C26.4376 29.3786 26.6719 28.8115 26.5782 28.2491L25.4205 21.4201L30.3043 16.5879C30.7073 16.1895 30.8526 15.5942 30.6745 15.0552C30.4964 14.5162 30.0324 14.1225 29.47 14.0382L22.7349 13.0445L19.7212 6.84366Z" fill="#E3E3E3"/>
                     </svg>)
              )}
              
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
