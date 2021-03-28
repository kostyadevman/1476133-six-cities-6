import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus, EMPTY_OFFER, INITIAL_LOCATION} from '../../const';
import App from './app';
import {createAPI} from "../../services/api";
import thunk from "redux-thunk";

const api = createAPI(() => {});
const mockStore = configureStore([thunk.withExtraArgument(api)]);

describe(`Test routing`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);


  it(`Render 'MainPage' when user navigate to '/' url`, () => {

    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user: {email: `test@email`}
      },
      DATA: {
        isOfferListLoading: false,
        offers: []
      },
      APP: {locationCity: INITIAL_LOCATION},
    });
    window.mockStore = store;
    const history = createMemoryHistory();
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
  });

  it(`Render 'Favorite' when user navigate to '/favorites' url`, () => {

    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user: {email: `test@email`}
      },
      DATA: {
        isFavoriteLoading: false,
        favorites: [],
        offers: []
      },
      APP: {locationCity: INITIAL_LOCATION},
    });
    window.mockStore = store;
    const history = createMemoryHistory();
    history.push(`/favorites`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Nothing yet saved./i)).toBeInTheDocument();
  });

  it(`Render 'AuthPage' when user navigate to '/favorites' url and not authorized`, () => {

    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        user: {email: `test@email`}
      },
      DATA: {
        isFavoriteLoading: false,
        favorites: [],
        offers: []
      },
      APP: {locationCity: INITIAL_LOCATION},
    });
    window.mockStore = store;
    const history = createMemoryHistory();
    history.push(`/favorites`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it(`Render 'SignInPage' when user navigate to '/login' url and not authorized`, () => {

    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        user: {email: `test@email`}
      },
      APP: {locationCity: INITIAL_LOCATION},
    });
    window.mockStore = store;
    const history = createMemoryHistory();
    history.push(`/login`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it(`Render 'MainPage' when user navigate to '/login' url and authorized`, () => {

    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user: {email: `test@email`}
      },
      DATA: {
        isOfferListLoading: false,
        offers: []
      },
      APP: {locationCity: INITIAL_LOCATION},
    });
    window.mockStore = store;
    const history = createMemoryHistory();
    history.push(`/login`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
    expect(screen.getByText(/We could not find any property available at the moment in Paris/i)).toBeInTheDocument();
  });

  it(`Render 'PlaceDetailPage' when user navigate to '/offer/:id' url`, () => {

    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user: {email: `test@email`}
      },
      DATA: {
        isOfferLoading: false,
        offers: [],
        offer: EMPTY_OFFER,
        comments: [],
        offersNearby: []
      },
      APP: {
        locationCity: INITIAL_LOCATION,
      },
    });
    window.mockStore = store;
    const history = createMemoryHistory();
    history.push(`/offer/1`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
  });

  it(`Render 'NotFoundScreen' when user navigate to non-existent route`, () => {

    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user: {email: `test@email`}
      }
    });
    window.mockStore = store;
    const history = createMemoryHistory();
    history.push(`/non-existent-route`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`404 Not Found.`)).toBeInTheDocument();
  });
});
