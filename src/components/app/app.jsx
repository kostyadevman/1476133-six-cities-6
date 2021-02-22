import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from "../pages/main-page/main-page";
import AuthPage from "../pages/auth-page/auth-page";
import FavoritePlacesPage from "../pages/favorite-places-page/fevorite-places-page";
import PlaceDetailPage from "../pages/place-detail-page/place-detail-page";
import NotFoundPage from "../pages/not-found-page/not-found-page";
import {propTypesPlace} from "../../utils/place";
import {propTypesReview} from "../../utils/review";

const App = ({offers, reviews, offersNearby}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage offers={offers} />
        </Route>
        <Route exact path="/favorites">
          <FavoritePlacesPage offers={offers}/>
        </Route>
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
  offersNearby: PropTypes.arrayOf(propTypesPlace).isRequired
};

export default App;
