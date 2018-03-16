import React from 'react';
import './Card.css' 

const Card = (props) => {
  console.log(props)
  const dataMap = Object.keys(props.data).map( year => {
    return props.data[year] > 0.5 ? <li className="above">{year}: {props.data[year]}</li>: <li className="below">{year}: {props.data[year]}</li> })
  return (
    <div className="card" className= {props.selected ? "selected" : "not-selected"} onClick={props.handleClick} onClick={props.toggleClass}id={props.location}>
      <h1 className="district-name">{props.location}</h1>
      <ul className="district-data">{dataMap}</ul>
    </div>
  )
}

export default Card;
