import React from 'react';
import { shallow } from 'enzyme';
import  Card  from './Card';



describe('Card', () => {

  it('should match the snapshot', () => {
    const data = {location: 'Denver', data: {'2006': .85 }};
    const wrapper = shallow(<Card data={data}/>);
    expect(wrapper).toMatchSnapshot();
  });

});
