import React from 'react';
import Card from './Card';
import './CardContainer.css'
import PropTypes from 'prop-types';

const CardContainer = ({ schools, handleClick, selected }) => {
  console.log('schols', schools)
  const schoolCards = schools.map( (school, index) => {
  const selectedCardLocations = selected.map( name => name.location);
  const selectedClass = selectedCardLocations.includes(school.location) ? 'selected' : ''

    return <Card
      {...school}
      key={school.location}
      handleClick={handleClick}
      selectedClass={selectedClass} />
  })
  return (
    <div className="card-container">{schoolCards}</div>
  )
}

CardContainer.propTypes = {
  handleClick: PropTypes.func,
  schools: PropTypes.array,
  selected: PropTypes.array
}
export default CardContainer;
