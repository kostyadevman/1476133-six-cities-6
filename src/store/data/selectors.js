import {NameSpace} from '../root-reducer';
import {createSelector} from "reselect";
import {getLocationCity, getSortType} from "../app/selectors";
import {sortComments, sortOffers} from "../../utils/sort";
import {getOffersByLocation} from "../../utils/place";
import {VISIBLE_OFFERS_NEARBY_COUNT, VISIBLE_REVIEW_COUNT} from "../../const";

export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getOfferListLoadedStatus = (state) => state[NameSpace.DATA].isOfferListLoaded;
export const getOffer = (state) => state[NameSpace.DATA].offer;
export const getOfferID = (state) => state[NameSpace.DATA].offer.id;
export const getOfferLoadingStatus = (state) => state[NameSpace.DATA].isOfferLoading;
export const getOffersNearby = (state) => state[NameSpace.DATA].offersNearby;

export const getComments = createSelector(
    (state) => state[NameSpace.DATA].comments,
    sortComments
);

export const getCommentsVisible = createSelector(
    getComments,
    (comments) => comments.slice(0, VISIBLE_REVIEW_COUNT)
);

export const getFilteredOffers = createSelector(
    [getOffers, getLocationCity],
    getOffersByLocation
);

export const getFilteredSortedOffers = createSelector(
    [getFilteredOffers, getSortType],
    sortOffers
);

export const getOffersNearbyVisible = createSelector(
    getOffersNearby,
    (offers) => offers.slice(0, VISIBLE_OFFERS_NEARBY_COUNT)
);
