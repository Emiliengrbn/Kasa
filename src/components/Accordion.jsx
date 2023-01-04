import React from "react";
import { useState } from "react";
const bottomArrow = require("../assets/images/bottom_arrow.png");

function Accordion({ title, content }) {
    const [active, setActive] = useState(false)

    const handleToggle = () => {
        setActive(!active)
    }
    return (
    <div className={`accordion ${active && "active"}`}> {/* si active est true alors on lui met la class active sinon on ne fat rien */}
        <div className="accordion__title" onClick={handleToggle}>
            {title} 
            <img className="accordion__icon" src={bottomArrow} alt="" />
        </div>
        <div className="accordion__content">{content}</div>
    </div>)
} 

export default Accordion