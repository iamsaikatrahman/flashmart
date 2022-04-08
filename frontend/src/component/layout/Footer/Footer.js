import React from "react";
import playstore from "../../../images/playstore.png";
import appstore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playstore} alt="" />
        <img src={appstore} alt="" />
      </div>
      <div className="midFooter">
        <h1>FLASMART.</h1>
        <p>High Quality is our first priority.</p>
        <p>Copyrights 2022 &copy;</p>
      </div>
      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="/">Instagram</a>
        <a href="/">Youtube</a>
        <a href="/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
