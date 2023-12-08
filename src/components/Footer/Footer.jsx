import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "130%" }} />
      <div className="f-content">
        <span>vigneshr0819@gmail.com</span>
        <div className="f-icons">
          <Insta color="palevioletred" size={"2rem"} />
          <Facebook color="cornflowerblue" size={"2rem"} />
          <Gitub color="blacl" size={"2rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
