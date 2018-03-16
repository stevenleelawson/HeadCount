import React, { Component } from 'react';
import './App.css';
import KinderData from './data/kindergartners_in_full_day_program';
import DistrictRepository, {findByName} from './helper';
import CardContainer from './CardContainer';
import SearchBar from './SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      districtArray: [],
      selectedCards: [],
    }

    this.districts = new DistrictRepository(KinderData)
  }

  retrieveData = (userInput = '') => {
    const schools = this.districts.findAllMatches(userInput);
    this.setState({ districtArray: schools})
  }

  handleClick = (event) => {
    const location = event.target.id
    const selectedCard = this.districts.findByName(location)
    const selectedArray = this.state.selectedCards
    const alreadyThere = selectedArray.some(district => district.location === location)

    if (alreadyThere) {
      const selectedCards = selectedArray.filter((district) => district.location != selectedCard.location);
      this.setState({selectedCards})
      return
    }
    if (selectedArray.length <2){
      this.setState({ selectedCards : [...selectedArray, selectedCard] })
    } else if (selectedArray.length ===2) {
      const newArray = [...selectedArray]
      newArray.shift();
      this.setState({ selectedCards : [...newArray, selectedCard] })
    }
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
