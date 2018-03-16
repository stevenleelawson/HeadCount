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
      selectedCards: []
    }
  }

  retrieveData = (userInput = '') => {
    const district = new DistrictRepository(KinderData);
    const schools = district.findAllMatches(userInput);
    this.setState({ districtArray: schools})
  }

  handleClick = (event) => {
    const location = event.target.id
    const allCards = new DistrictRepository(KinderData)
    const selectedCard = allCards.findByName(location)
    console.log(selectedCard)

    if (this.state.selectedCards.includes(selectedCard)) {
      this.setState({ selectedCards: this.state.selectedCards.filter(  compareLocation => compareLocation !== selectedCard) })
      return
    }
    if (this.state.selectedCards.length >= 1){
      // this.state.selectedCards.shift()
      //slice instead
      this.setState({ selectedCards: [this.state.selectedCards[0], selectedCard] })
    } else {
      this.setState({ selectedCards: [...this.state.selectedCards, selectedCard]})
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
