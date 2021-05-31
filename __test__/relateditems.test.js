import React from 'react';
import {shallow} from 'enzyme';
import RelatedItems from '../client/src/components/relateditems';

test('Text inside RelatedItems', () => {
 
  const wrapper = shallow(<RelatedItems/>);

  expect(wrapper.text()).toEqual('This is the Related items Module');

});