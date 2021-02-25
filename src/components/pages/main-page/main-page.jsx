import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Header from "../../layout/header/header";
import {MY_ONLY_USER} from "../../../mocks/users";
import PlaceList from "../../place-list/place-list";
import {propTypesPlace} from "../../../utils/place";
import Map from "../../map/map";
import {MapType, PlaceListType} from "../../../const";
import LocationList from "../../location-list/location-list";


const MainPage = ({offers, locations, locationCity}) => {

  return (
    <div className="page page--gray page--main">

      <Header userName={MY_ONLY_USER}/>

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
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"/>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <PlaceList placeListType={PlaceListType.CITIES} />
            </section>
            <div className="cities__right-section">
              <Map mapType={MapType.CITIES}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  locationCity: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(propTypesPlace).isRequired,
  locations: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  locationCity: state.locationCity
});

export {MainPage};
export default connect(mapStateToProps, null)(MainPage);
