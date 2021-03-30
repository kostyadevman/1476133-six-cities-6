import React from 'react';
import {render, screen} from '@testing-library/react';
import SortItem from "./sort-item";
import {SortTypes} from "../../const";

describe(`Test SortItem`, () => {

  it(`SortItem should be render correctly`, () => {

    const clickHandler = jest.fn();
    render(
        <SortItem isActive={true} onChangeSortType={clickHandler} type={SortTypes.POPULAR} />
    );

    expect(screen.getByText(/Popular/i)).toBeInTheDocument();
  });

});
