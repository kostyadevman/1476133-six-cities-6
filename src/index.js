import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from "./mocks/offers";

const Setting = {
  PLACES_COUNT: 6
};

ReactDOM.render(
    <App
      placesCount={Setting.PLACES_COUNT}
      offers={offers}
    />,
    document.querySelector(`#root`)
);
