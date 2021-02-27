import React from 'react';
import {connect} from 'react-redux';
import Place from "../place/place";
import PropTypes from "prop-types";
import {getOffersByLocation, propTypesPlace} from "../../utils/place";
import {sortOffers} from "../../utils/sort";
import {PLACE_LIST_SETTINGS} from "../../utils/place";
import {SORT_TYPES} from "../../const";
import {ActionCreator} from "../../store/action";

const PlaceList = ({offers, placeListType, setActive, unsetActive}) => {

  return (
    <div className={PLACE_LIST_SETTINGS[placeListType].className}>
      {offers.map((offer) => (
        <Place
          cardType={PLACE_LIST_SETTINGS[placeListType].cardType}
          offer={offer}
          key={offer.id}
          setActive={setActive}
          unsetActive={unsetActive}
        />
      ))}
    </div>
  );
};

PlaceList.propTypes = {
  offers: PropTypes.arrayOf(propTypesPlace).isRequired,
  placeListType: PropTypes.string.isRequired,
  sortType: PropTypes.oneOf(SORT_TYPES).isRequired,
  setActive: PropTypes.func.isRequired,
  unsetActive: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  offers: sortOffers(getOffersByLocation(state.offers, state.locationCity), state.sortType)
});

const mapDispatchToProps = (dispatch) => ({
  setActive(id) {
    dispatch(ActionCreator.setActiveOffer(id));
  },
  unsetActive() {
    dispatch(ActionCreator.setActiveOffer(null));
  }
});

export {PlaceList};
export default connect(mapStateToProps, mapDispatchToProps)(PlaceList);
