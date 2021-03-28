import React from "react";
import {Router} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import withPrivateRoute from "./with-private-route";
import {AppRoute, AuthorizationStatus} from "../../const";
import {createMemoryHistory} from "history";

describe(`Test HOC 'withSpinner`, () => {

  it(`Base component should be correct rendering when use with HOC if user not authorized`, () => {
    const authStatus = `NO_AUTH`;
    const URL = AppRoute.LOGIN;
    const BaseComponent = () => <h1>withSignInPage</h1>;
    const BaseComponentPrivate = withPrivateRoute(
        BaseComponent,
        authStatus === AuthorizationStatus.NO_AUTH,
        URL
    );
    const history = createMemoryHistory();
    history.push(`/login`);
    render(
        <Router history={history}>
          <BaseComponentPrivate />
        </Router>
    );

    expect(screen.getByText(/withSignInPage/i)).toBeInTheDocument();
  });

});
