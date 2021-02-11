import React from 'react';
import profilePhoto from '../../utilities/foto-square.png';

import './section-about.styles.scss';

const SectionAbout = () => {
  return (
    <section id='about-me' className='about'>
      <h2>Who I am</h2>  
      <div className='about-margin'>
        <div className='profile-frame'>
          <img src={profilePhoto} alt='profile' />  
        </div>
        <div className='about-text-container'>
          <p className='about-text'>
          I am an Engineer and Front End Developer living in The Netherlands, interested in building modern web and mobile applications with a focus on responsive, maintainable and scalable code. 
          </p>
          <p className='about-text'>
          Born and raised in Buenos Aires, Argentina, I have graduated in Chemical Engineering at Buenos Aires University. However, I have found my true passion in web development.
          </p>
          <p className='about-text'>
          Even though I am focused on ReactJS (+ Hooks + Redux), I am constantly learning new tools and have a serious interest in expand my knowledge into mobile development. My goal is to satisfy client's expectations and needs while delivering a modern, realiable and robust product.
          </p>
        </div>
      </div>  
    </section>
  );
};

export default SectionAbout;