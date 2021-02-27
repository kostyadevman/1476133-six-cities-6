import {ActionType} from "./action";
import {INITIAL_LOCATION, INITIAL_SORT_TYPE} from "../const";
import offers from "../mocks/offers";

const initialState = {
  locationCity: INITIAL_LOCATION,
  offers,
  sortType: INITIAL_SORT_TYPE,
  activeOffer: null
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
  }

  return state;
};


export {reducer};
