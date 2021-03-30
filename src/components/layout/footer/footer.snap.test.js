import React from 'react';
import {render} from '@testing-library/react';
import Footer from "./footer";

test(`Should footer render correctly`, () => {
  const {container} = render(<Footer />);
  expect(container).toMatchSnapshot();
});
