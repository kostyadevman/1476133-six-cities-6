import {
  loadOffers,
  setOfferLoading,
  loadOffer,
  redirectToRoute,
  loadComments,
  loadOffersNearby,
  requireAuthorization,
  loadFavorite,
  setFavoriteLoading, setUser
} from "./action";
import {AuthorizationStatus, AppRoute, APIRoute} from "../const";

export const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(loadOffers(data)))
);

export const fetchOffer = (id) => (dispatch, _getState, api) => ([
  dispatch(setOfferLoading(true)),
  api.get(APIRoute.OFFER.replace(`:id`, id))
    .then(({data}) => dispatch(loadOffer(data)))
    .catch(() => dispatch(redirectToRoute(AppRoute.PAGE_NOT_FOUND)))
    .then(() => dispatch(setOfferLoading(false)))
]);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.COMMENTS.replace(`:id`, id))
    .then(({data}) => dispatch(loadComments(data)))
);

export const fetchOffersNearby = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.NEARBY.replace(`:id`, id))
    .then(({data}) => dispatch(loadOffersNearby(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(setUser(data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => dispatch(setUser(data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.FAVORITES)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGOUT)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);

export const sendReview = (id, {comment, rating}) => (dispatch, _getState, api) => (
  api.post(APIRoute.COMMENTS.replace(`:id`, id), {comment, rating})
    .then(({data}) => dispatch(loadComments(data)))
);

export const fetchFavorite = () => (dispatch, _getState, api) => ([
  dispatch(setFavoriteLoading(true)),
  api.get(APIRoute.FAVORITE)
    .then(({data}) => dispatch(loadFavorite(data)))
]);

export const setFavoriteStatus = (hotelID, status) => (dispatch, _getState, api) => (
  api.post(APIRoute.FAVORITE_ITEM
    .replace(`:hotel_id`, hotelID)
    .replace(`:status`, status)
  )
);

