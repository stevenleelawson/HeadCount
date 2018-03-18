import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';
import  Card  from './Card';



describe('Card', () => {

  it('should match the snapshot', () => {
    const data = {location: 'Denver', data: {'2006': .85 }};
    const wrapper = shallow(<Card data={data}/>);
    expect(wrapper).toMatchSnapshot();
  });

});
