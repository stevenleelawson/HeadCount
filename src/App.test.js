import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';


describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot();
  });


}) 
