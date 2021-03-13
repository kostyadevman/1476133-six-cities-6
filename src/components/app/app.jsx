import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import MainPage from "../pages/main-page/main-page";
import AuthPage from "../pages/auth-page/auth-page";
import FavoritePlacesPage from "../pages/favorite-places-page/fevorite-places-page";
import NotFoundPage from "../pages/not-found-page/not-found-page";
import browserHistory from "../../browser-history";
import {fetchOfferList} from "../../store/api-actions";
import Spinner from "../spinner/spinner";
import {CITIES, SORT_TYPES, AppRoute, AuthorizationStatus} from "../../const";
import withPrivateRoute from "../with-private-route/with-private-route";
import PlaceDetailPageWrapper from "../pages/place-detail-page-wrapper/place-detail-page-wrapper";


const App = () => {
  const {authorizationStatus} = useSelector((state) => state.USER);
  const {offers, isOfferListLoaded} = useSelector((state) => state.DATA);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isOfferListLoaded) {
      dispatch(fetchOfferList());
    }
  }, [isOfferListLoaded]);

  if (!isOfferListLoaded) {
    return <Spinner />;
  }

  const SignInPagePrivate = withPrivateRoute(AuthPage, authorizationStatus === AuthorizationStatus.NO_AUTH);
  const FavoritesPagePrivate = withPrivateRoute(
      FavoritePlacesPage,
      authorizationStatus === AuthorizationStatus.AUTH,
      AppRoute.LOGIN
  );

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage locations={CITIES} sortTypes={SORT_TYPES} />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesPagePrivate offers={offers} />
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
    </BrowserRouter>
  );
};

export default App;
