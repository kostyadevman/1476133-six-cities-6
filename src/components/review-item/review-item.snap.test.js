import React from 'react';
import {render} from '@testing-library/react';
import ReviewItem from "./review-item";
import {REVIEW} from "../../const";
import {adaptReviewToClient} from "../../utils/review";


test(`Should ReviewItem render correctly`, () => {
  const {container} = render(<ReviewItem review={adaptReviewToClient(REVIEW)} />);
  expect(container).toMatchSnapshot();
});
