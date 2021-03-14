import {createReducer} from '@reduxjs/toolkit';
import {loadComments, loadOffer, loadOffers, loadOffersNearby, setOfferLoading} from "../action";
import {EMPTY_OFFER} from "../../const";

const initialState = {
  offers: [],
  isOfferListLoaded: false,
  offer: EMPTY_OFFER,
  isOfferLoading: true,
  comments: [],
  offersNearby: []
};

const data = createReducer(initialState, (builder) => {
  builder.addCase(loadOffers, (state, action) => {
    state.offers = action.payload;
    state.isOfferListLoaded = true;
  });
  builder.addCase(loadOffer, (state, action) => {
    state.offer = action.payload;
  });
  builder.addCase(loadOffersNearby, (state, action) => {
    state.offersNearby = action.payload;
  });
  builder.addCase(loadComments, (state, action) => {
    state.comments = action.payload;
  });
  builder.addCase(setOfferLoading, (state, action) => {
    state.isOfferLoading = action.payload;
  });
});


export {data};
