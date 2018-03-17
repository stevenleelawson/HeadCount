import React from 'react';
import Card from './Card';
import './CardContainer.css'
import PropTypes from 'prop-types';

const CardContainer = ({ schools, handleClick, toggleClass, selected }) => {
  const schoolCards = schools.map( (school, index) => {
  const selectedCardLocations = selected.map( name => name.location);
  const selectedClass = selectedCardLocations.includes(school.location) ? 'selected' : ''

    return <Card
      {...school}
      key={school.location}
      handleClick={handleClick}
      toggleClass={toggleClass}
      selectedClass={selectedClass} />
  })
  return (
    <div className="card-container">{schoolCards}</div>
  )
}

CardContainer.propTypes = {
  handleClick: PropTypes.func.isRequired,
  schools: PropTypes.array.isRequired,
  selected: PropTypes.array.isRequired
}
export default CardContainer;
