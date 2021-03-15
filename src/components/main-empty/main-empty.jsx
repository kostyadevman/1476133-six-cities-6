import React from "react";
import LocationList from "../location-list/location-list";
import PropTypes from "prop-types";
import {CITIES} from "../../const";

const MainEmpty = ({locations, locationCity}) => {
  return (
    <main className="page__main page__main--index page__main--index-empty">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <LocationList locations={locations} />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property available at the moment in
                {` ${locationCity}`}</p>
            </div>
          </section>
          <div className="cities__right-section">
          </div>
        </div>
      </div>
    </main>
  );
};

MainEmpty.propTypes = {
  locations: PropTypes.array.isRequired,
  locationCity: PropTypes.oneOf(CITIES).isRequired
};

export default MainEmpty;
