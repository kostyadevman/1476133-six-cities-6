import React from 'react';
import PropTypes from 'prop-types';
import Header from "../../layout/header/header";
import {MY_ONLY_USER} from "../../../mocks/users";
import {propTypesPlace} from "../../../utils/place";
import FavoritePlaceList from "../../favorite-place-list/favorite-place-list";


const FavoritePlacesPage = ({offers}) => {

  return (
    <div className="page">

      <Header userName={MY_ONLY_USER}/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritePlaceList offers={offers} />
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
};

FavoritePlacesPage.propTypes = {
  offers: PropTypes.arrayOf(propTypesPlace).isRequired
};

export default FavoritePlacesPage;
