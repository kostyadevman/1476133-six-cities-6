import React from "react";
import FavoritePlaceList from "../favorite-place-list/favorite-place-list";
import PropTypes from "prop-types";
import {propTypesPlace} from "../../utils/place";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";

const Favorites = ({offers}) => {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritePlaceList offers={offers} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

Favorites.propTypes = {
  offers: PropTypes.arrayOf(propTypesPlace).isRequired
};

export default Favorites;
