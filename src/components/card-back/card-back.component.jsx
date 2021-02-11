import React from 'react';
import './card-back.styles.scss';

const CardBack = ({ title, handleOnClick }) => {
  return(
    <div className='card-back-container' onClick={handleOnClick}>
      <h3>{title}</h3>
    </div>
  )
};

export default CardBack;