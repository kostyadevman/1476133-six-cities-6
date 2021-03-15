import {createReducer} from '@reduxjs/toolkit';
import {
  loadComments,
  loadFavorite,
  loadOffer,
  loadOffers,
  loadOffersNearby,
  setFavoriteLoading,
  setOfferLoading
} from "../action";
import {EMPTY_OFFER} from "../../const";

const initialState = {
  offers: [],
  isOfferListLoaded: false,
  offer: EMPTY_OFFER,
  isOfferLoading: true,
  comments: [],
  offersNearby: [],
  favorite: [],
  isFavoriteLoading: true
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
  builder.addCase(loadFavorite, (state, action) => {
    state.favorite = action.payload;
    state.isFavoriteLoading = false;
  });
  builder.addCase(setFavoriteLoading, (state, action) => {
    state.isFavoriteLoading = action.payload;
  });
});


export {data};
