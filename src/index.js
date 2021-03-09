import React from 'react';
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import App from './components/app/app';
import {reducer} from "./store/reducer";
import {AuthorizationStatus} from "./const";
import {ActionCreator} from "./store/action";
import {checkAuth} from "./store/api-actions";
import {redirect} from "./store/middlewares/redirect";
import Error from "./components/error/error";

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
      <Error />
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
