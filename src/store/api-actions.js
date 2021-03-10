import {ActionCreator} from "./action";
import {AuthorizationStatus, AppRoute, APIRoute} from "../const";

export const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
);

export const fetchOffer = (id) => (dispatch, _getState, api) => ([
  dispatch(ActionCreator.setOfferLoading(true)),
  api.get(APIRoute.OFFER.replace(`:id`, id))
    .then(({data}) => {
      dispatch(ActionCreator.loadOffer(data));
    })
    .catch(() => dispatch(ActionCreator.redirectToRoute(AppRoute.PAGE_NOT_FOUND)))
    .then(() => dispatch(ActionCreator.setOfferLoading(false)))
]);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.COMMENTS.replace(`:id`, id))
    .then(({data}) => dispatch(ActionCreator.loadComments(data)))
);

export const fetchOffersNearby = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.NEARBY.replace(`:id`, id))
    .then(({data}) => dispatch(ActionCreator.loadOffersNearby(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.FAVORITES)))
);

export const sendReview = (id, {comment, rating}) => (dispatch, _getState, api) => (
  api.post(APIRoute.COMMENTS.replace(`:id`, id), {comment, rating})
);
