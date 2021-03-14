import {createReducer} from '@reduxjs/toolkit';
import {changeLocation, changeSortType, setActiveOffer, setErrorMessage, unsetErrorMessage} from "../action";
import {INITIAL_LOCATION, SortTypes} from "../../const";

const initialState = {
  locationCity: INITIAL_LOCATION,
  sortType: SortTypes.POPULAR,
  activeOffer: null,
  errorMessage: null
};

const app = createReducer(initialState, (builder) => {
  builder.addCase(changeLocation, (state, action) => {
    state.locationCity = action.payload;
  });
  builder.addCase(changeSortType, (state, action) => {
    state.sortType = action.payload;
  });
  builder.addCase(setActiveOffer, (state, action) => {
    state.activeOffer = action.payload;
  });
  builder.addCase(setErrorMessage, (state, action) => {
    state.errorMessage = action.payload;
  });
  builder.addCase(unsetErrorMessage, (state, action) => {
    state.errorMessage = action.payload;
  });
});

export {app};
