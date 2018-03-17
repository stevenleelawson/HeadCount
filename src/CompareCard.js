import React from 'react';
import './Card.css'
import PropTypes from 'prop-types';

const CompareCard = (props) => {
  const avgEntries = Object.entries(props.averages)
  const magicObj = avgEntries.map(entry =>
    <div>
      <h1>{entry[0]}:</h1>
      <h1>{entry[1]}</h1> 
    </div>
  )
  // const avgValues = Object.values(props.averages)
  return (
    <div>
      {magicObj}
    </div>
  )
}

export default CompareCard;
