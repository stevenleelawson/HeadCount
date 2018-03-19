import React, { Component } from 'react';
import DistrictRepository from './helper.js';
import './SearchBar.css'
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state= {
      search: ''
    }
  }

  handleChange = (e) => {
    this.setState({'search':e.target.value})
    this.props.filterSchools(this.state.search)
  }

  render() {
    return (
      <div>
        <form >
          <input className='filter' type='text' placeholder='Type to filter districts' onChange={this.handleChange}/>
          {/* <input type='submit'/> */}
        </form>
      </div>
    )
  }
}

SearchBar.propTypes = {
  filterSchools: PropTypes.func.isRequired
}
