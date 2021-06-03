import React from 'react';
import {shallow} from 'enzyme';
import RatingsReviews from '../client/src/components/ratingsreviews';

test('Text inside Ratingsreviews', () => {
 
  const wrapper = shallow(<RatingsReviews/>);

  expect(wrapper.text()).toEqual('This is the Ratings Reviews Module');

});