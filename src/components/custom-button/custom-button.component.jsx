import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, dest, ...props }) => (
  <a href={`#${dest}`}>
    <div className='svg-wrapper'>  
      <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
        <rect className="shape" height="60" width="320" />  
      </svg>
      <div className='text'>
        {children}
      </div>
    </div>
  </a>  
);

export default CustomButton;