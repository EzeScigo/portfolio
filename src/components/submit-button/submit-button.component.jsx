import React from 'react';

import './submit-button.styles.scss';

const SubmitButton = ({ children, dest }) => (
  <button className='submit-button-custom'>
    <div className="container">
      <div className='shinny-btn'>
        Send
      </div>
    </div>
  </button>
);

export default SubmitButton;