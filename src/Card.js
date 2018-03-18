import React from 'react';
import './Card.css'
import PropTypes from 'prop-types';

const Card = (props) => {
  const dataMap = Object.keys(props.data).map( year => {
    return props.data[year] > 0.5 ? <li className="above">{year}: {props.data[year]}</li>: <li className="below">{year}: {props.data[year]}</li> })
  return (
    <div className= {`card ${props.selectedClass}`} onClick={props.handleClick} id={props.location}>
      <h1 className="district-name">{props.location}</h1>
      <ul className="district-data">{dataMap}</ul>
    </div>
  )
}

Card.propTypes = {
  location: PropTypes.string,
  data: PropTypes.object,
  handleClick: PropTypes.func,
  selectedClass: PropTypes.string
}

export default Card;
