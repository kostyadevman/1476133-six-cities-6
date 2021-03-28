import React from 'react';
import {useSelector} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import AuthPage from "../pages/auth-page/auth-page";
import NotFoundPage from "../pages/not-found-page/not-found-page";
import withPrivateRoute from "../../hocs/with-private-route/with-private-route";
import PlaceDetailPageWrapper from "../pages/place-detail-page-wrapper/place-detail-page-wrapper";
import FavoritePlacesPageWrapper from "../pages/favorite-places-page-wrapper/favorite-places-page-wrapper";
import MainPageWrapper from "../pages/main-page-wrapper/main-page-wrapper";
import {AppRoute, AuthorizationStatus} from "../../const";

const App = () => {
  const authorizationStatus = useSelector((state) => state.USER.authorizationStatus);

  const SignInPagePrivate = withPrivateRoute(
      AuthPage,
      authorizationStatus === AuthorizationStatus.NO_AUTH
  );
  const FavoritePrivate = withPrivateRoute(
      FavoritePlacesPageWrapper,
      authorizationStatus === AuthorizationStatus.AUTH,
      AppRoute.LOGIN
  );

  return (
    <Switch>
      <Route exact path={AppRoute.ROOT}>
        <MainPageWrapper />
      </Route>
      <Route exact path={AppRoute.FAVORITES}>
        <FavoritePrivate />
      </Route>
      <Route exact path={AppRoute.LOGIN}>
        <SignInPagePrivate />
      </Route>
      <Route exact path={AppRoute.OFFER}>
        <PlaceDetailPageWrapper />;
      </Route>
      <Route>
        <NotFoundPage/>
      </Route>
    </Switch>
  );
};

export default App;
