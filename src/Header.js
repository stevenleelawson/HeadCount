import React from 'react';
import SearchBar from './SearchBar';
import './Header.css';
import PropTypes from 'prop-types';

const Header = ({filterSchools}) => {
  return (
    <div className='header'>
      <h1 className='title'>headcount 2.0</h1>
      <SearchBar filterSchools={filterSchools}/>
    </div>
  );
};

Header.propTypes = {
  filterSchools: PropTypes.func.isRequired
};

export default Header;
