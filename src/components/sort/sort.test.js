import React from 'react';
import {render, screen} from '@testing-library/react';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {INITIAL_LOCATION, SORT_TYPES, SortTypes} from "../../const";
import Sort from "./sort";

const mockStore = configureStore({});

describe(`Test Sort`, () => {

  it(`Sort should be render correctly`, () => {
    const store = mockStore({
      APP: {
        sortType: SortTypes.POPULAR,
        locationCity: INITIAL_LOCATION
      },
    });

    render(
        <redux.Provider store={store}>
          <Sort sortTypes={SORT_TYPES} />
        </redux.Provider>
    );

    expect(screen.getByText(/Price: low to high/i)).toBeInTheDocument();
    expect(screen.getByText(/Price: high to low/i)).toBeInTheDocument();
    expect(screen.getByText(/Top rated first/i)).toBeInTheDocument();
  });
});
