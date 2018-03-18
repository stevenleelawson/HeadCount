import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import DistrictRepository from './helper.js';

describe('App', () => {
  const mockData =  [
    {
      "Location": "Colorado",
      "TimeFrame": 2007,
      "DataFormat": "Percent",
      "Data": 0.39465
    },
    {
      "Location": "Colorado",
      "TimeFrame": 2006,
      "DataFormat": "Percent",
      "Data": 0.33677
    },
    {
      "Location": "ACADEMY 20",
      "TimeFrame": 2011,
      "DataFormat": "Percent",
      "Data": 0.489
    },
    {
      "Location": "ACADEMY 20",
      "TimeFrame": 2012,
      "DataFormat": "Percent",
      "Data": 0.47883
    }
  ]
  const getAverageOfSelected = jest.fn();

  const wrapper = shallow(<App getAverageOfSelected={getAverageOfSelected}/>)

  // wrapper.districts = new DistrictRepository(mockData)

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('begins with 181 schools in it districtArrray, nothing in selectedCards, and nothing in averages', () => {
    expect(wrapper.state('districtArray').length).toBe(181)
    expect(wrapper.state('selectedCards').length).toBe(0)
    expect(wrapper.state('averages')).toBe(null)

  })

  describe('retrieveData', () => {
    it('resets districtArray in app state when called with user input', () => {
      wrapper.instance().retrieveData('Colorado')
      expect(wrapper.state('districtArray').length).toBe(2)
    })
  })

  describe('handleClick', () => {
    const mockEvent1 = { target: {id: "COLORADO"} }
    const mockEvent2 = { target: {id: "ACADEMY 20"} }

    it('should add a card to selectedCards if no cards exist in the array', () => {
      wrapper.instance().handleClick(mockEvent1);
      expect(wrapper.state('selectedCards').length).toBe(1)
    })

    it('should add another card to selectedCards if one card exists in the array', () => {
      expect(wrapper.state('selectedCards').length).toBe(1)
      wrapper.instance().handleClick(mockEvent2);
      expect(wrapper.state('selectedCards').length).toBe(2)
    })

    it('should remove a card from selectedCards if clicked twice', () => {
      wrapper.setState({
        selectedCards: [
          { location: 'COLORADO',
            data: {
              '2004': 0.24,
              '2005': 0.278,
              '2006': 0.337 }
          }]})
      expect(wrapper.state('selectedCards').length).toBe(1)
      wrapper.instance().handleClick(mockEvent1);
      expect(wrapper.state('selectedCards').length).toBe(0)
    })

    it('should remove the first, and add a new object if two objects are already in selectedCards', () => {

      wrapper.setState({
        selectedCards: [
          { location: 'COLORADO',
            data: {
              '2004': 0.24,
              '2005': 0.278,
              '2006': 0.337 }
          },
          { location: 'AGATE 300',
            data: {
              '2004': 1,
              '2005': 0,
              '2006': 1 }
          }]})
      expect(wrapper.state('selectedCards').length).toBe(2)
      wrapper.instance().handleClick(mockEvent2);
      // expect(wrapper.state('selectedCards')).toMatchObject("ACADEMY 20")
    })

    it('should not add more than two cards to selectedCards', () => {
      wrapper.setState({
        selectedCards: [
          { location: 'COLORADO',
            data: {
              '2004': 0.24,
              '2005': 0.278,
              '2006': 0.337 }
          },
          { location: 'AGATE 300',
            data: {
              '2004': 1,
              '2005': 0,
              '2006': 1 }
          }]})
        wrapper.instance().handleClick(mockEvent2);
        wrapper.instance().handleClick(mockEvent2);
        wrapper.instance().handleClick(mockEvent2);
        expect(wrapper.state('selectedCards').length).toBe(2)
    })

    it('should call get AverageOfSelected if there are 1 or more cards in selectedArray', () => {
      const location1 = { location: 'COLORADO',
        data:
         { '2004': 0.24,
           '2005': 0.278,
           '2006': 0.337,
           '2007': 0.395,
           '2008': 0.536,
           '2009': 0.598,
           '2010': 0.64,
           '2011': 0.672,
           '2012': 0.695,
           '2013': 0.703,
           '2014': 0.741 } }

      const location2 = { location: 'ACADEMY 20',
        data:
         { '2004': 0.302,
           '2005': 0.267,
           '2006': 0.354,
           '2007': 0.392,
           '2008': 0.385,
           '2009': 0.39,
           '2010': 0.436,
           '2011': 0.489,
           '2012': 0.479,
           '2013': 0.488,
           '2014': 0.49 } }


      wrapper.setState({
        selectedCards: [
          { location: 'COLORADO',
            data: {
              '2004': 0.24,
              '2005': 0.278,
              '2006': 0.337 }
          },
          { location: 'AGATE 300',
            data: {
              '2004': 1,
              '2005': 0,
              '2006': 1 }
          }]})
          wrapper.instance().handleClick(mockEvent2);
          expect(wrapper.instance().getAverageOfSelected(location1, location2)).toHaveBeenCalled()
    })
    describe('getAverageOfSelected', () => {
      it('should set state with averages of two locations')
    })
  })
})
