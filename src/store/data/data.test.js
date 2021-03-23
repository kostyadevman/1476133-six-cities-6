import {data} from "./data";
import {APIRoute, EMPTY_OFFER} from "../../const";
import {ActionType, setFavoriteLoading, setOfferLoading} from "../action";
import MockAdapter from "axios-mock-adapter";
import {fetchOffer, fetchOfferList} from "../api-actions";
import {createAPI} from "../../services/api";
import {adaptOfferToClient} from "../../utils/place";

const api = createAPI(() => {});

describe(`Reducers 'data' work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(data(undefined, {}))
      .toEqual({
        offers: [],
        isOfferListLoading: true,
        offer: EMPTY_OFFER,
        isOfferLoading: true,
        comments: [],
        offersNearby: [],
        favorites: [],
        isFavoriteLoading: true,
      });
  });

  it(`Reducer should set offer loading status correctly`, () => {
    const state = {
      offers: [],
      isOfferListLoading: true,
      offer: EMPTY_OFFER,
      isOfferLoading: true,
      comments: [],
      offersNearby: [],
      favorites: [],
      isFavoriteLoading: false,
    };

    expect(data(state, setOfferLoading(false)))
      .toEqual({
        offers: [],
        isOfferListLoading: true,
        offer: EMPTY_OFFER,
        isOfferLoading: false,
        comments: [],
        offersNearby: [],
        favorites: [],
        isFavoriteLoading: false,
      });
  });

  it(`Reducer should set favorite loading status correctly`, () => {
    const state = {
      offers: [],
      isOfferListLoading: true,
      offer: EMPTY_OFFER,
      isOfferLoading: true,
      comments: [],
      offersNearby: [],
      favorites: [],
      isFavoriteLoading: true,
    };

    expect(data(state, setFavoriteLoading(false)))
      .toEqual({
        offers: [],
        isOfferListLoading: true,
        offer: EMPTY_OFFER,
        isOfferLoading: true,
        comments: [],
        offersNearby: [],
        favorites: [],
        isFavoriteLoading: false,
      });
  });
});

describe(`Async operations work correctly`, () => {
  it(`Should make a correct API call (GET) to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOfferList();

    apiMock
      .onGet(APIRoute.OFFERS)
      .reply(200, [adaptOfferToClient(EMPTY_OFFER), adaptOfferToClient(EMPTY_OFFER)]);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [adaptOfferToClient(EMPTY_OFFER), adaptOfferToClient(EMPTY_OFFER)]
        });
      });
  });

  it(`Should make a correct API call (GET) to /hotels/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffer(34);

    apiMock
      .onGet(APIRoute.OFFER.replace(`:id`, 34))
      .reply(200, [{fake: true}]);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_OFFER_LOADIGN,
          payload: false
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_OFFER,
          payload: [adaptOfferToClient(EMPTY_OFFER)]
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_OFFER_LOADIGN,
          payload: true
        });
      });
  });
});


