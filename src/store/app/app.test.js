import {app} from "./app";
import {changeSortType, setActiveOffer, setErrorMessage, unsetErrorMessage} from "../action";


describe(`Reducers 'app' work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(app(undefined, {}))
      .toEqual({
        locationCity: `Paris`,
        sortType: `Popular`,
        activeOffer: null,
        errorMessage: null
      });
  });

  it(`Reducer should set given sort type`, () => {
    const state = {
      locationCity: `Paris`,
      sortType: `Popular`,
      activeOffer: null,
      errorMessage: null
    };

    expect(app(state, changeSortType(`Price: high to low`)))
      .toEqual({
        locationCity: `Paris`,
        sortType: `Price: high to low`,
        activeOffer: null,
        errorMessage: null
      });
  });

  it(`Reducer should set given active offer`, () => {
    const state = {
      locationCity: `Paris`,
      sortType: `Popular`,
      activeOffer: null,
      errorMessage: null
    };

    expect(app(state, setActiveOffer(100500)))
      .toEqual({
        locationCity: `Paris`,
        sortType: `Popular`,
        activeOffer: 100500,
        errorMessage: null
      });
  });

  it(`Reducer should set given error message`, () => {
    const state = {
      locationCity: `Paris`,
      sortType: `Popular`,
      activeOffer: null,
      errorMessage: null
    };

    expect(app(state, setErrorMessage(`Error message`)))
      .toEqual({
        locationCity: `Paris`,
        sortType: `Popular`,
        activeOffer: null,
        errorMessage: `Error message`
      });
  });

  it(`Reducer should set reset error message`, () => {
    const state = {
      locationCity: `Paris`,
      sortType: `Popular`,
      activeOffer: null,
      errorMessage: `Some err message`
    };

    expect(app(state, unsetErrorMessage()))
      .toEqual({
        locationCity: `Paris`,
        sortType: `Popular`,
        activeOffer: null,
        errorMessage: null
      });
  });
});
