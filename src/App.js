import React, { Component } from 'react';
import './App.css';
import KinderData from './data/kindergartners_in_full_day_program';
import DistrictRepository from './helper';
import CardContainer from './CardContainer';
import SearchBar from './SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      districtArray: [],
      selectedCards: []
    }
  }

  retrieveData = (userInput = '') =>{
    const district = new DistrictRepository(KinderData);
    const schools = district.findAllMatches(userInput);
    this.setState({ districtArray: schools})
  }

  handleClick = (event) => {
    this.setState({ selectedCards: [...this.state.selectedCards, event.target.id] })
  }

  componentDidMount() {
    this.retrieveData()
  }

  render() {
    return (
      <div>
        <SearchBar filterSchools={this.retrieveData}/>
        <CardContainer schools={this.state.districtArray} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
