import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from "./mocks/offers";
import reviews from "./mocks/reviews";
import offersNearby from "./mocks/offers-nearby";

ReactDOM.render(
    <App
      offers={offers}
      reviews={reviews}
      offersNearby={offersNearby}
    />,
    document.querySelector(`#root`)
);
