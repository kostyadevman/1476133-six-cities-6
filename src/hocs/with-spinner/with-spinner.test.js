import React from "react";
import {render, screen} from '@testing-library/react';
import withSpinner from "./with-spinner";

describe(`Test HOC 'withSpinner`, () => {

  it(`Base component should be correct rendering when use with HOC`, () => {
    const BaseComponent = () => <h1>withMainPage</h1>;
    const BaseComponentWithSpinner = withSpinner(BaseComponent);
    const BaseComponentWrapper = () => <BaseComponentWithSpinner isLoading={false} />;
    render(<BaseComponentWrapper />);
    expect(screen.getByText(/withMainPage/i)).toBeInTheDocument();
  });
});
