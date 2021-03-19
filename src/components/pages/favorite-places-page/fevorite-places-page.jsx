import React from 'react';
import PropTypes from 'prop-types';
import {propTypesPlace} from "../../../utils/place";
import withSpinner from "../../../hocs/with-spinner/with-spinner";
import Favorites from "../../favorites/favorites";
import FavoritesEmpty from "../../favorites-empty/favorites-empty";

const FavoritePlacesPage = ({offers}) => {

  return (
    (offers.length > 0) ?
      <Favorites offers={offers} /> :
      <FavoritesEmpty />
  );
};

FavoritePlacesPage.propTypes = {
  offers: PropTypes.arrayOf(propTypesPlace).isRequired
};

export default withSpinner(FavoritePlacesPage);
