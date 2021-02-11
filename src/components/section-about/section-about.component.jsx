import React from 'react';
import profilePhoto from '../../utilities/foto.jpg';
import profilePhotoo from '../../utilities/foto2.jpg';

import './section-about.styles.scss';

const SectionAbout = () => {
  return (
    <section id='about-me' className='about'>
      <div className='about-margin'>
        <h2>Who I am</h2>
        <div className='profile-frame'>
          <img src={profilePhotoo} alt='profile' />  
        </div>
        <div className='about-text-container'>
          <p className='about-text'>
          I am an Engineer and Front End Developer living in The Netherlands, interested in building modern web and mobile applications with a focus on responsive, maintainable and scalable code. 
          </p>
          <p className='about-text'>
          Born and raised in Buenos Aires, Argentina, I have graduated in Chemical Engineering at Buenos Aires University. Through I found my true passion in Front End Development.
          </p>
          <p className='about-text'>
          I am focused on ReactJS (+ Hooks + Redux), my highest priority is delivering a dynamic and intuitive user experience.
          </p>
        </div>
      </div>  
    </section>
  );
};

export default SectionAbout;