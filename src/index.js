import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import App from './components/app/app';
import offers from "./mocks/offers";
import reviews from "./mocks/reviews";
import offersNearby from "./mocks/offers-nearby";
import {reducer} from "./store/reducer";

const store = createStore(
    reducer,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
      <App
        offers={offers}
        reviews={reviews}
        offersNearby={offersNearby}
      />
    </Provider>,
    document.querySelector(`#root`)
);
