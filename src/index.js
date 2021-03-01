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
import {AuthorizationStatus} from "./const";
import {ActionCreator} from "./store/action";
import {checkAuth} from "./store/api-actions";
import {redirect} from "./store/middlewares/redirect";

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    ),

);

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App
        reviews={reviews}
        offersNearby={offersNearby}
      />
    </Provider>,
    document.querySelector(`#root`)
);
