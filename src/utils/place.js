import PropTypes from "prop-types";
import {CITIES, MAX_RATING, PLACE_TYPE} from "../const";

export const adaptToClient = (place) => {
  const adaptedPlace = Object.assign(
      {},
      place,
      {
        isFavorite: place.is_favorite,
        isPremiun: place.is_premium,
        maxAdults: place.max_adults,
        previewImage: place.preview_image,
        host: Object.assign(
            {},
            place.host,
            {
              avatarUrl: place.host.avatar_url,
              isPro: place.host.is_pro
            }
        )
      }
  );

  delete adaptedPlace.is_favorite;
  delete adaptedPlace.is_premium;
  delete adaptedPlace.max_adults;
  delete adaptedPlace.preview_image;

  return adaptedPlace;
};

export const adaptToServer = (place) => {
  const adaptedPlace = Object.assign(
      {},
      place,
      {

      }
  );

  return adaptedPlace;
};

export const makeRatingScore = (rating) => {
  return Math.round(rating / MAX_RATING) * 100;
};

export const groupByLocation = (offers) => {
  return offers.reduce((r, a) => {
    r[a.city.name] = [...r[a.city.name] || [], a];
    return r;
  }, {});
};

export const propTypesPlace = PropTypes.shape({
  "bedrooms": PropTypes.number.isRequired,
  "city": PropTypes.shape({
    "location": PropTypes.shape({
      "latitude": PropTypes.number.isRequired,
      "longitude": PropTypes.number.isRequired,
      "zoom": PropTypes.number.isRequired,
    }),
    "name": PropTypes.oneOf(CITIES).isRequired,
  }).isRequired,
  "description": PropTypes.string.isRequired,
  "goods": PropTypes.array.isRequired,
  "host": PropTypes.shape({
    "avatar_url": PropTypes.string.isRequired,
    "id": PropTypes.number.isRequired,
    "is_pro": PropTypes.bool.isRequired,
    "name": PropTypes.string.isRequired,
  }),
  "id": PropTypes.number.isRequired,
  "images": PropTypes.array.isRequired,
  "is_favorite": PropTypes.bool.isRequired,
  "is_premium": PropTypes.bool.isRequired,
  "location": PropTypes.shape({
    "latitude": PropTypes.number.isRequired,
    "longitude": PropTypes.number.isRequired,
    "zoom": PropTypes.number.isRequired,
  }),
  "max_adults": PropTypes.number.isRequired,
  "preview_image": PropTypes.string.isRequired,
  "price": PropTypes.number.isRequired,
  "rating": PropTypes.number.isRequired,
  "title": PropTypes.string.isRequired,
  "type": PropTypes.oneOf(PLACE_TYPE).isRequired
});

