import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';
import  CardContainer from './CardContainer';



describe('CardContainer', () => {

  it('should match the snapshot', () => {
    const schools = [
      { location: 'Denver', data: {'2006': .098}},
      { location: 'Golden', data: {'2006': .848}}
    ];

    const selected = [
      { location: 'Denver', data: {'2006': .098}},
    ]

    const wrapper = shallow(<CardContainer schools={schools} selected={selected} handleClick={jest.fn()}/>)
    expect(wrapper).toMatchSnapshot();
  });

});
