import React from 'react';
import ReactDOM from "react-dom";
import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from "./services/api";
import {Provider} from "react-redux";
import App from './components/app/app';
import rootReducer from "./store/root-reducer";
import {AuthorizationStatus} from "./const";
import {requireAuthorization} from "./store/action";
import {checkAuth} from "./store/api-actions";
import {redirect} from "./store/middlewares/redirect";
import Error from "./components/error/error";
import browserHistory from "./browser-history";
import {Router as BrowserRouter} from "react-router-dom";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    }).concat(redirect)
});

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <Error />
        <App />
      </BrowserRouter>
    </Provider>,
    document.querySelector(`#root`)
);
