import React from "react";
import LocationList from "../location-list/location-list";
import Sort from "../sort/sort";
import PlaceList from "../place-list/place-list";
import {CITIES, MapType, PlaceListType} from "../../const";
import Map from "../map/map";
import PropTypes from "prop-types";
import {propTypesPlace} from "../../utils/place";

const Main = ({offers, locationCity, sortTypes, locations}) => {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <LocationList locations={locations} />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in {locationCity}</b>
            <Sort sortTypes={sortTypes} />
            <PlaceList offers={offers} placeListType={PlaceListType.CITIES} />
          </section>
          <div className="cities__right-section">
            <Map mapType={MapType.CITIES}/>
          </div>
        </div>
      </div>
    </main>
  );
};

Main.propTypes = {
  offers: PropTypes.arrayOf(propTypesPlace).isRequired,
  locationCity: PropTypes.oneOf(CITIES).isRequired,
  locations: PropTypes.array.isRequired,
  sortTypes: PropTypes.array.isRequired
};

export default Main;
