import React, {useState} from 'react';
import ReactCardFlip from 'react-card-flip';
import './card-front.styles.scss';

const CardFront = ({ devicon, title, type, handleOnClick}) => {

  return (
    <div className='tech-icon-container' onClick={handleOnClick}>
      <i className={`${devicon} tech-icons`} />
    </div>
  )
}


export default CardFront;