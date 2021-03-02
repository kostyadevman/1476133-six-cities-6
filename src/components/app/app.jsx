import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import MainPage from "../pages/main-page/main-page";
import AuthPage from "../pages/auth-page/auth-page";
import FavoritePlacesPage from "../pages/favorite-places-page/fevorite-places-page";
import PlaceDetailPage from "../pages/place-detail-page/place-detail-page";
import NotFoundPage from "../pages/not-found-page/not-found-page";
import {propTypesPlace} from "../../utils/place";
import {propTypesReview} from "../../utils/review";
import browserHistory from "../../browser-history";
import {connect} from "react-redux";
import {fetchOfferList} from "../../store/api-actions";
import Spinner from "../spinner/spinner";
import PrivateRoute from "../private-route/private-route";
import {CITIES, SORT_TYPES} from "../../const";

const App = (props) => {
  const {
    offers,
    reviews,
    offersNearby,
    onLoadData,
    isOfferListLoaded
  } = props;

  useEffect(() => {
    if (!isOfferListLoaded) {
      onLoadData();
    }
  }, [isOfferListLoaded]);

  if (!isOfferListLoaded) {
    return <Spinner />;
  }


  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/">
          <MainPage locations={CITIES} sortTypes={SORT_TYPES} />
        </Route>
        <PrivateRoute
          exact
          path="/favorites"
          render={() => <FavoritePlacesPage offers={offers} />}
        >
        </PrivateRoute>
        <Route exact path="/login">
          <AuthPage />
        </Route>
        <Route exact path="/offer/:id"
          render={({match}) => {
            const {id} = match.params;
            const offer = offers.find((place) => {
              return place.id === parseInt(id, 10);
            });
            return <PlaceDetailPage
              offer={offer}
              reviews={reviews}
              offersNearby={offersNearby}
            />;
          }}
        />
        <Route>
          <NotFoundPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(propTypesPlace).isRequired,
  reviews: PropTypes.arrayOf(propTypesReview).isRequired,
  offersNearby: PropTypes.arrayOf(propTypesPlace).isRequired,
  onLoadData: PropTypes.func.isRequired,
  isOfferListLoaded: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onCheckAuth: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  isOfferListLoaded: state.isOfferListLoaded,
  authorizationStatus: state.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchOfferList());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);


