import React from 'react';
import Place from "../place/place";
import PropTypes from "prop-types";
import {propTypesPlace} from "../../utils/place";
import {PLACE_LIST_SETTINGS} from "../../utils/place";

const PlaceList = ({offers, placeListType}) => {

  return (
    <div className={PLACE_LIST_SETTINGS[placeListType].className}>
      {offers.map((offer) => (
        <Place
          cardType={PLACE_LIST_SETTINGS[placeListType].cardType}
          offer={offer}
          key={offer.id}
        />
      ))}
    </div>
  );
};

PlaceList.propTypes = {
  offers: PropTypes.arrayOf(propTypesPlace).isRequired,
  placeListType: PropTypes.string.isRequired
};

export default PlaceList;
