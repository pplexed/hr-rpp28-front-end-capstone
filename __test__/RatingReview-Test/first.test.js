import React from 'react';
import { render } from '@testing-library/react';
import RatingsReviews from '../../client/src/components/reviews/reviews-list';
import Breakdown from '../../client/src/components/reviews/breakdown';
import IRT from '../../client/src/components/reviews/reviews-irt';
import MoreReviews from '../../client/src/components/reviews/morereviews';
import ReviewBody from '../../client/src/components/reviews/review-body';
import ReviewPhotos from '../../client/src/components/reviews/reviewphotos';
import StarRating from '../../client/src/components/reviews/starsrating';


describe('Renders all the ratings & review components', () => {
  // test('renders rating component', () => {
  //   render(<RatingsReviews />);
  // });

  test('renders Breakdown component', () => {
    render(<Breakdown />);
  });

  // test('renders Individual Review Tile component', () => {
  //   render(<IRT/>);
  // });

  test('renders More reviews component', () => {
    render(<MoreReviews />);
  });

  // test('renders Review Body component', () => {
  //   render(<ReviewBody />);
  // });

  // test('renders Review Photos component', async () => {
  //   render(<ReviewPhotos />);
  // });

  test('renders Star Rating component', () => {
    render(<StarRating />);
  });
});