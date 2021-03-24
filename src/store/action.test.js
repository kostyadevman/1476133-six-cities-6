import {
  changeLocation,
  changeSortType,
  setActiveOffer,
  loadOffers,
  loadOffer,
  loadComments,
  loadOffersNearby,
  requireAuthorization,
  setUser,
  redirectToRoute,
  setErrorMessage,
  unsetErrorMessage,
  setOfferLoading,
  loadFavorite,
  setFavoriteLoading,
  ActionType
} from './action';
import {EMPTY_OFFER, EMPTY_USER, REVIEW} from "../const";
import {adaptOfferToClient} from "../utils/place";
import {adaptReviewToClient} from "../utils/review";

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing location returns correct action`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_LOCATION,
      payload: `Paris`,
    };

    expect(changeLocation(`Paris`)).toEqual(expectedAction);
  });

  it(`Action creator for changing sort type return correct action`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_SORT_TYPE,
      payload: `Price: low to high`
    };

    expect(changeSortType(`Price: low to high`)).toEqual(expectedAction);
  });

  it(`Action creator for set active offer return correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_ACTIVE_OFFER,
      payload: 100500
    };

    expect(setActiveOffer(100500)).toEqual(expectedAction);
  });

  it(`Action creator for offer load return correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFER,
      payload: adaptOfferToClient(EMPTY_OFFER)
    };

    expect(loadOffer(EMPTY_OFFER)).toEqual(expectedAction);
  });

  it(`Action creator for offers load return correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: [adaptOfferToClient(EMPTY_OFFER), adaptOfferToClient(EMPTY_OFFER)]
    };

    expect(loadOffers([EMPTY_OFFER, EMPTY_OFFER])).toEqual(expectedAction);
  });

  it(`Action creator for reviews load return correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: [adaptReviewToClient(REVIEW), adaptReviewToClient(REVIEW)]
    };

    expect(loadComments([REVIEW, REVIEW])).toEqual(expectedAction);
  });

  it(`Action creator for offers nearby load return correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: [adaptOfferToClient(EMPTY_OFFER), adaptOfferToClient(EMPTY_OFFER)]
    };

    expect(loadOffersNearby([EMPTY_OFFER, EMPTY_OFFER])).toEqual(expectedAction);
  });

  it(`Action creator for favorite offers load return correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_FAVORITE,
      payload: [adaptOfferToClient(EMPTY_OFFER), adaptOfferToClient(EMPTY_OFFER)]
    };

    expect(loadFavorite([EMPTY_OFFER, EMPTY_OFFER])).toEqual(expectedAction);
  });

  it(`Action creator for set authorization status return correct action`, () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `NO_AUTH`
    };

    expect(requireAuthorization(`NO_AUTH`)).toEqual(expectedAction);
  });

  it(`Action creator for set user data return correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_USER,
      payload: EMPTY_USER
    };

    expect(setUser(EMPTY_USER)).toEqual(expectedAction);
  });

  it(`Action creator for redirect to route return correct action`, () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `/login`
    };

    expect(redirectToRoute(`/login`)).toEqual(expectedAction);
  });

  it(`Action creator for set error return correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_ERROR_MESSAGE,
      payload: `error message`
    };

    expect(setErrorMessage(`error message`)).toEqual(expectedAction);
  });

  it(`Action creator for unset error return correct action`, () => {
    const expectedAction = {
      type: ActionType.UNSET_ERROR_MESSAGE,
      payload: null
    };

    expect(unsetErrorMessage()).toEqual(expectedAction);
  });

  it(`Action creator for set offer load status return correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_OFFER_LOADIGN,
      payload: false
    };

    expect(setOfferLoading(false)).toEqual(expectedAction);
  });

  it(`Action creator for set favorite offers load status return correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_FAVORITE_LOADIGN,
      payload: false
    };

    expect(setFavoriteLoading(false)).toEqual(expectedAction);
  });
});

