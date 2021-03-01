import React from 'react';
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import App from './components/app/app';
import reviews from "./mocks/reviews";
import offersNearby from "./mocks/offers-nearby";
import {reducer} from "./store/reducer";

const api = createAPI();

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    ),

);

ReactDOM.render(
    <Provider store={store}>
      <App
        reviews={reviews}
        offersNearby={offersNearby}
      />
    </Provider>,
    document.querySelector(`#root`)
);
