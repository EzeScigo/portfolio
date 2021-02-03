import React from 'react';
import './card.styles.scss';

const Card = ({ img, title, type}) => {

    return(
        <div className="card">
          <img src={`${img}`} alt='react-logo' />
          <div className="card-body">
            <h3>{title}</h3>
            <h5>{type}</h5>
          </div>
        </div>
    )
}

export default Card;
