import React from 'react';
import {shallow} from 'enzyme';
import Overview from '../client/src/components/overview/overview.jsx';

test('Text inside Overview', () => {

  const wrapper = shallow(<Overview />);

  expect(wrapper.text()).toEqual('This is the overview moduleBasketball ShoesAir Minis 2500Full court supportThis optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.<FeaturesList /><Styles />');

});