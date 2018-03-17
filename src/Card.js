import React from 'react';
import './Card.css' 

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

export default Card;
