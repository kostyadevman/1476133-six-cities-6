import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import Header from "../../layout/header/header";
import {MY_ONLY_USER} from "../../../mocks/users";
import PlaceList from "../../place-list/place-list";
import Map from "../../map/map";
import {MapType, PlaceListType} from "../../../const";
import LocationList from "../../location-list/location-list";
import Sort from "../../sort/sort";
import {getFilteredSortedOffers} from "../../../store/data/selectors";


const MainPage = ({locations, sortTypes}) => {
  const {locationCity} = useSelector((state) => state.APP);
  const offers = useSelector(getFilteredSortedOffers);

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
              <Sort sortTypes={sortTypes} />
              <PlaceList offers={offers} placeListType={PlaceListType.CITIES} />
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
  locations: PropTypes.array.isRequired,
  sortTypes: PropTypes.array.isRequired
};

export default MainPage;
