import React from 'react';
import PropTypes from "prop-types";
import {groupByLocation, propTypesPlace} from "../../utils/place";
import Place from "../place/place";
import {CardType} from "../../const";


const FavoritePlaceList = (props) => {
  const {offers} = props;
  const offerGroups = groupByLocation(offers);
  const locations = Object.keys(offerGroups);


  return (
    <ul className="favorites__list">
      {locations.map((location, id) =>
        <li key={id} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{location}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {offerGroups[location].map((offer) =>
              <Place key={offer.id} cardType={CardType.FAVORITES} offer={offer} />
            )}
          </div>
        </li>
      )}
    </ul>
  );
};

FavoritePlaceList.propTypes = PropTypes.arrayOf(propTypesPlace).isRequired;

export default FavoritePlaceList;
