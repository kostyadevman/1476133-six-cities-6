import {ActionType} from "./action";
import {INITIAL_LOCATION, SortTypes, AuthorizationStatus, EMPTY_OFFER} from "../const";


const initialState = {
  locationCity: INITIAL_LOCATION,
  offers: [],
  isOfferListLoaded: false,
  sortType: SortTypes.POPULAR,
  activeOffer: null,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  offer: EMPTY_OFFER,
  comments: [],
  offersNearby: [],
  errorMessage: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_LOCATION:
      return {
        ...state,
        locationCity: action.payload
      };

    case ActionType.CHANGE_OFFERS:
      return {
        ...state,
        offers: action.payload
      };

    case ActionType.RESET:
      return {
        ...initialState
      };

    case ActionType.CHANGE_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload
      };

    case ActionType.SET_ACTIVE_OFFER:
      return {
        ...state,
        activeOffer: action.payload
      };

    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isOfferListLoaded: true
      };

    case ActionType.LOAD_OFFER:
      return {
        ...state,
        offer: action.payload,
      };

    case ActionType.LOAD_OFFERS_NEARBY:
      return {
        ...state,
        offersNearby: action.payload
      };

    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    case ActionType.SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload
      };

    case ActionType.UNSET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload
      };
  }

  return state;
};


export {reducer};
