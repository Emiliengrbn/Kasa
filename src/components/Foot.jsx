import React from "react";
const logo = require("../assets/images/LOGO.png");

const Foot = () => {
  return (
    <div className="footer_elements">
      <img className="white_kasa" src={logo} alt="logo kasa" />
      <p className="txt_footer">© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Foot;
