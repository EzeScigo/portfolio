import React from 'react';
import './body.styles.scss';

import ContactForm from '../contact-form/contact-form.component';

import SectionAbout from '../section-about/section-about.component';
import SectionProjects from '../section-projects/section-projects.component';

const Body = (props) => {

  return(
  <div className='main-container'>
    <SectionAbout />
    <SectionProjects />
    <section id='contact' className='contact'>
      <h2>Let's get in touch!</h2>
      <h4>I'm available to join new projects. </h4>
      <ContactForm />
    </section>
  </div>
)};

export default Body;

