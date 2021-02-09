import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from "../pages/main-page/main-page";
import AuthPage from "../pages/auth-page/auth-page";
import FavoritePlacesPage from "../pages/favorite-places-page/fevorite-places-page";
import PlaceDetailPage from "../pages/place-detail-page/place-detail-page";
import NotFoundPage from "../pages/not-found-page/not-found-page";

const App = (props) => {
  const {placesCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage placesCount={placesCount} />
        </Route>
        <Route exact path="/favorites">
          <FavoritePlacesPage />
        </Route>
        <Route exact path="/login">
          <AuthPage />
        </Route>
        <Route exact path="/offer/:id"
          render={({match}) => {
            const {id} = match.params;
            return <PlaceDetailPage placeId={parseInt(id, 10)} />;
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
  placesCount: PropTypes.number.isRequired,
};

export default App;
