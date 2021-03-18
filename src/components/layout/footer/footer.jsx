import React from "react";
import {useHistory} from "react-router-dom";
import {AppRoute} from "../../../const";

const Footer = () => {
  const history = useHistory();

  const handleLogoClick = (evt) => {
    evt.preventDefault();
    history.push(AppRoute.ROOT);
  };

  return (
    <footer className="footer container">
      <a className="footer__logo-link" onClick={handleLogoClick}>
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
      </a>
    </footer>
  );
};

export default Footer;
