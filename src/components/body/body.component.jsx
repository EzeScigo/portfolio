import React from 'react';
import './body.styles.scss';

import ContactForm from '../contact-form/contact-form.component';

import SectionAbout from '../section-about/section-about.component';
import SectionSkills from '../section-skills/section-skills.component';

import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';


const Body = (props) => {

  return(
  <div className='main-container'>
    <SectionAbout />
    <SectionSkills />
    <section id='contact' className='contact'>
      <h2>Let's get in touch!</h2>
      <h4>I'm available to join new, exciting projects.</h4>
      <div className='contact-icons-container'>
        <div className='fa-icon-container'>
          <a href='https://www.linkedin.com/in/ezequiel-scigolini' target="_blank" rel="noreferrer"><FaLinkedin className='fa-icon linkedin' /></a>
        </div>
        <div className='fa-icon-container'>
          <a href='https://github.com/EzeScigo' target="_blank" rel="noreferrer"><FaGithub className='fa-icon github' /></a>
        </div>
        <div className='fa-icon-container'>
          <a href='mailto:escigolini@gmail.com'><SiGmail className='fa-icon gmail' /></a>
        </div>
        <div className='fa-icon-container'>
          <a href='https://www.instagram.com/ezescigo'><FaInstagram className='fa-icon instagram' /></a>
        </div>
      </div>
      <hr />
      <h2>Or drop me a message:</h2>
      <ContactForm />
    </section>
  </div>
)};

export default Body;

