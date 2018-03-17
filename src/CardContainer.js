import React from 'react';
import Card from './Card';
import './CardContainer.css'

const CardContainer = ({ schools, handleClick, toggleClass, selected }) => {
  const schoolCards = schools.map( (school, index) => {
  const selectedCardLocations = selected.map( name => name.location);
  console.log(selectedCardLocations)
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

export default CardContainer;
