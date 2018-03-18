import React, { Component } from 'react';
import './App.css';
import KinderData from './data/kindergartners_in_full_day_program';
import DistrictRepository from './helper';
import CardContainer from './CardContainer';
import CompareCard from './CompareCard';
import Header from './Header';


class App extends Component {
  constructor() {
    super();
    this.state = {
      districtArray: [],
      selectedCards: [],
      averages: null
    };

    this.districts = new DistrictRepository(KinderData);
  }

  retrieveData = (userInput = '') => {
    const schools = this.districts.findAllMatches(userInput);
    this.setState({ districtArray: schools});
  }

  handleClick = (event) => {
    const location = event.target.id;
    const selectedCard = this.districts.findByName(location);
    const selectedArray = this.state.selectedCards;
    const alreadyThere = selectedArray.some(district => district.location === location);

    if (alreadyThere) {
      const selectedCards = selectedArray.filter((district) => district.location !== selectedCard.location);
      this.setState({selectedCards});
      return;
    }

    if (selectedArray.length === 0) {
      this.setState({ selectedCards : [selectedCard] });
    } else if (selectedArray.length === 1) {
      this.setState({ selectedCards : [...selectedArray, selectedCard] });
      this.getAverageOfSelected(selectedArray[0], selectedCard);
    } else if (selectedArray.length === 2) {
      const newSelected = [...selectedArray];
      newSelected.shift();
      this.setState({ selectedCards : [...newSelected, selectedCard] });
      this.getAverageOfSelected(newSelected[0], selectedCard);
    }

  }

  getAverageOfSelected = (location1, location2) => {
    const comparison = this.districts.compareDistrictAverages(location1.location, location2.location);
    this.setState({averages:comparison});
  }

  componentDidMount() {
    this.retrieveData();
  }

  render() {
    return (
      <div className='app'>
        <Header filterSchools={this.retrieveData}/>
        {
          this.state.averages &&
          <CompareCard averages={this.state.averages}/>
        }
        <CardContainer schools={this.state.districtArray} handleClick={this.handleClick} toggleClass={this.toggleClass} selected={this.state.selectedCards}/>

      </div>
    );
  }
}

export default App;
