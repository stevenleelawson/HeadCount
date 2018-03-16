import React from 'react';
import Card from './Card';
import './CardContainer.css'

const CardContainer = ({ schools, handleClick }) => {
  const schoolCards = schools.map( (school, index) => {

    return <Card
      {...school}
      key={school.location}
      handleClick={handleClick}/>
  })
  return (
    <div className="card-container">{schoolCards}</div>
  )
}

export default CardContainer;
