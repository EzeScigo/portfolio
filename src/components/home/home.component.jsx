import React, {useState, useEffect} from 'react';
import CustomButton from '../custom-button/custom-button.component';

import './home.styles.scss';

const Home = () => {

  return (
    <div className='title-container'>
      <div className="title">Hi! I'm  <span className='highlight'>Ezequiel Scigolini</span>
        <br></br>
        Chemical Engineer & Front End Developer
        <br></br>
        Based in The Netherlands
      </div>
      <CustomButton className='custom-button' dest='about-me'>Check me out</CustomButton>
    </div>
)};

export default Home;