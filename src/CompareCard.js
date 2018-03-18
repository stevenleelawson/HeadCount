import React from 'react';
import './CompareCard.css'
import PropTypes from 'prop-types';

const CompareCard = (props) => {
  const avgEntries = Object.entries(props.averages)
  const magicObj = avgEntries.map(entry =>
    <div className='compare-card'>
      <h1 className='location'>{entry[0]}:</h1>
      <h1 className='data'>{entry[1]}</h1>
    </div>
  )
  // const avgValues = Object.values(props.averages)
  return (
    <div className='compare-card-container'>
      <h2 className='location'>COMPARED DISTRICTS</h2>
      {magicObj}
    </div>
  )
}

CompareCard.propTypes = {
  averages: PropTypes.object.isRequired
}
export default CompareCard;
