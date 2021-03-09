import {adaptOfferToClient} from "../utils/place";
import {adaptReviewToClient} from "../utils/review";

export const ActionType = {
  CHANGE_LOCATION: `main/changeLocation`,
  CHANGE_OFFERS: `main/changeOffers`,
  RESET: `main/reset`,
  REDIRECT_TO_ROUTE: `main/redirectToRoute`,
  CHANGE_SORT_TYPE: `sort/changeSortType`,
  SORT: `sort/Sort`,
  SET_ACTIVE_OFFER: `place-list/setActiveOffer`,
  LOAD_OFFERS: `data/loadOffers`,
  LOAD_OFFER: `data/loadOffer`,
  LOAD_COMMENTS: `data/loadComments`,
  LOAD_OFFERS_NEARBY: `data/loadOffersNearby`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  SEND_REVIEW: `data/sendReview`,
  SET_ERROR_MESSAGE: `notify/setErrorMessage`,
  UNSET_ERROR_MESSAGE: `notify/unsetErrorMessage`,
  SET_OFFER_LOADIGN: `data/setOfferLoading`
};

export const ActionCreator = {
  changeLocation: (location) => ({
    type: ActionType.CHANGE_LOCATION,
    payload: location
  }),

  changeOffers: (offers) => ({
    type: ActionType.CHANGE_OFFERS,
    payload: offers
  }),

  reset: () => ({
    type: ActionType.RESET
  }),

  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType
  }),

  setActiveOffer: (id) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: id
  }),

  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers.map((item) => adaptOfferToClient(item))
  }),

  loadOffer: (offer) => ({
    type: ActionType.LOAD_OFFER,
    payload: adaptOfferToClient(offer)
  }),

  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments.map((item) => adaptReviewToClient(item))
  }),

  loadOffersNearby: (offers) => ({
    type: ActionType.LOAD_OFFERS_NEARBY,
    payload: offers.map((item) => adaptOfferToClient(item))
  }),

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),

  setErrorMessage: (message) => ({
    type: ActionType.SET_ERROR_MESSAGE,
    payload: message,
  }),

  unsetErrorMessage: () => ({
    type: ActionType.UNSET_ERROR_MESSAGE,
    payload: null
  }),

  setOfferLoading: (isOfferLoading) => ({
    type: ActionType.SET_OFFER_LOADIGN,
    payload: isOfferLoading
  })
};
