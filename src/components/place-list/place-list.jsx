import React from 'react';
import Place from "../place/place";
import PropTypes from "prop-types";
import {propTypesPlace} from "../../utils/place";
import {CardType} from "../../const";


const PlaceList = (props) => {
  const {placesCount, offers} = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.slice(0, placesCount).map((offer) => <Place cardType={CardType.CITIES} offer={offer} key={offer.id} />)}
    </div>
  );
};

PlaceList.propTypes = {
  placesCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(propTypesPlace).isRequired
};

export default PlaceList;
