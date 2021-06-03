import React from 'react';
import {shallow} from 'enzyme';
import Overview from '../client/src/components/overview';

test('Text inside Overview', () => {
 
  const wrapper = shallow(<Overview />);

  expect(wrapper.text()).toEqual('This is the overview module');

});