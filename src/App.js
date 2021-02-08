import React, {useState, useRef, useEffect} from 'react';
import Home from './components/home/home.component';
import Header from './components/header/header.component';
import Body from './components/body/body.component';
import Footer from './components/footer/footer.component';
import Particles from './components/particles-bg/particles-bg.component';
import icon from './icon.js';
import {ReactComponent as BubbleIcon} from './metal-bubble.png';
import GradientBackground from '../src/components/gradient-bg/gradient-bg.component';
import {StickyContainer} from 'react-sticky';

import './custom.scss';
import './App.css';


const App = () => {


  
  return (
    <div className='wrapper'>
      <div id='home' className='home-container'>
        <Home />
        <div className='particles-container'>
          <Particles direction={[0.5, 0]} positionY={150} positionX={-100} />
        </div>
        <div className='particles-container'>
          <Particles direction={[0.5, 0]} positionY={150} positionX={-100} />
        </div>
      </div>
      <StickyContainer>
        <Header className='header' />
        <Body className='main' />
        <Footer className='footer' />
      </StickyContainer>
    </div>
    );
}

export default App;

