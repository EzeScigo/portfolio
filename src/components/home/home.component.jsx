import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './home.styles.scss';

const Home = () => {

  return (
    <div className='title-container'>
      <div className="title">Hi! I'm Ezequiel Scigolini
        <br></br>
        Chemical Engineer & Front End Developer
        <br></br>
        Based in The Netherlands
      </div>
      <CustomButton className='custom-button' dest='main'>Check my work</CustomButton>
    </div>
)};

export default Home;