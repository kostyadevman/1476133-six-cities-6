import React from 'react';
import {render, screen} from '@testing-library/react';
import SortList from "./sort-list";
import {SORT_TYPES, SortTypes} from "../../const";
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import {createMemoryHistory} from "history";
import {Router} from "react-router-dom";

const mockStore = configureStore();

it(`Should Spinner render correctly`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  const store = mockStore({
    APP: {sortType: SortTypes.POPULAR},
  });

  const history = createMemoryHistory();
  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <SortList isOpen={true} sortTypes={SORT_TYPES} />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(/Popular/i)).toBeInTheDocument();
  expect(screen.getByText(/Price: low to high/i)).toBeInTheDocument();
  expect(screen.getByText(/Price: high to low/i)).toBeInTheDocument();
  expect(screen.getByText(/Top rated first/i)).toBeInTheDocument();
});
