import React from 'react';
import { shallow } from 'enzyme';
import  SearchBar  from './SearchBar';

describe('SearchBar', () => {
  const filterSchools = jest.fn();
  const mockEvent1 = { target: {value: "COLORADO"} };
  const wrapper = shallow(<SearchBar filterSchools={filterSchools}/>);
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('update the state', () => {
    wrapper.instance().handleChange(mockEvent1);
    expect(wrapper.state('search')).toEqual("COLORADO");

  });
});
