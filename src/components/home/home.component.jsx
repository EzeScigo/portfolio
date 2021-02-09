import React, {useState, useEffect} from 'react';
import CustomButton from '../custom-button/custom-button.component';

import './home.styles.scss';

const Home = () => {

  return (
    <div className='home-title-container'>
      <div className="title">Hi! I'm  <span className='highlight'>Ezequiel Scigolini</span>
        <br></br>
        <br></br>
        <span className='title-layout-mobile'>Engineer & Front End Developer</span>
        <br></br>
        Based in The Netherlands
      </div>
      <CustomButton className='custom-button' dest='about-me'>Check me out</CustomButton>
    </div>
)};

export default Home;