import {createAction} from '@reduxjs/toolkit';
import {adaptOfferToClient} from "../utils/place";
import {adaptReviewToClient} from "../utils/review";

export const ActionType = {
  LOAD_OFFERS: `data/loadOffers`,
  LOAD_OFFER: `data/loadOffer`,
  SET_OFFER_LOADIGN: `data/setOfferLoading`,
  LOAD_OFFERS_NEARBY: `data/loadOffersNearby`,
  LOAD_COMMENTS: `data/loadComments`,
  SEND_REVIEW: `data/sendReview`,
  LOAD_FAVORITE: `data/loadFavorite`,
  SET_FAVORITE_LOADIGN: `data/setFavoriteLoading`,

  CHANGE_LOCATION: `app/changeLocation`,
  CHANGE_SORT_TYPE: `app/changeSortType`,
  REDIRECT_TO_ROUTE: `app/redirectToRoute`,
  SET_ERROR_MESSAGE: `app/setErrorMessage`,
  UNSET_ERROR_MESSAGE: `app/unsetErrorMessage`,
  SET_ACTIVE_OFFER: `app/setActiveOffer`,

  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
};

export const changeLocation = createAction(ActionType.CHANGE_LOCATION, (location) => {
  return {
    payload: location
  };
});

export const changeSortType = createAction(ActionType.CHANGE_SORT_TYPE, (sortType) => {
  return {
    payload: sortType
  };
});

export const setActiveOffer = createAction(ActionType.SET_ACTIVE_OFFER, (id) => {
  return {
    payload: id
  };
});

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => {
  return {
    payload: offers.map((item) => adaptOfferToClient(item))
  };
});

export const loadOffer = createAction(ActionType.LOAD_OFFER, (offer) => {
  return {
    payload: adaptOfferToClient(offer)
  };
});

export const loadComments = createAction(ActionType.LOAD_COMMENTS, (comments) => {
  return {
    payload: comments.map((item) => adaptReviewToClient(item))
  };
});

export const loadOffersNearby = createAction(ActionType.LOAD_OFFERS_NEARBY, (offers) => {
  return {
    payload: offers.map((item) => adaptOfferToClient(item))
  };
});

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => {
  return {
    payload: status
  };
});

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => {
  return {
    payload: url
  };
});

export const setErrorMessage = createAction(ActionType.SET_ERROR_MESSAGE, (message) => {
  return {
    payload: message
  };
});

export const unsetErrorMessage = createAction(ActionType.UNSET_ERROR_MESSAGE, () => {
  return {
    payload: null
  };
});

export const setOfferLoading = createAction(ActionType.SET_OFFER_LOADIGN, (isOfferLoading) => {
  return {
    payload: isOfferLoading
  };
});

export const loadFavorite = createAction(ActionType.LOAD_FAVORITE, (favorite) => {
  return {
    payload: favorite.map((item) => adaptOfferToClient(item))
  };
});

export const setFavoriteLoading = createAction(ActionType.SET_FAVORITE_LOADIGN, (status) => {
  return {
    payload: status
  };
});
