import {ActionType} from "./action";
import {INITIAL_LOCATION} from "../const";
import {getOffersByLocation} from "../utils/place";


const initialState = {
  locationCity: INITIAL_LOCATION,
  offers: getOffersByLocation(INITIAL_LOCATION)
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
  }

  return state;
};


export {reducer};
