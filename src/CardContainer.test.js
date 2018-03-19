import React from 'react';
import { shallow } from 'enzyme';
import  CardContainer from './CardContainer';



describe('CardContainer', () => {

  it('should match the snapshot', () => {
    const schools = [
      { location: 'Denver', data: {'2006': .098}},
      { location: 'Golden', data: {'2006': .848}}
    ];

    const selected = [
      { location: 'Denver', data: {'2006': .098}}
    ];

    const wrapper = shallow(<CardContainer
      schools={schools}
      selected={selected}
      handleClick={jest.fn()}/>);
    expect(wrapper).toMatchSnapshot();
  });

});
