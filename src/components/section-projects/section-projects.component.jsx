import React from 'react';
import Card from '../card/card.component';
import ReactIcon from '../../utilities/react-icon.png';
import CSSIcon from '../../utilities/css-icon.png';
import HTMLIcon from '../../utilities/html-icon.png';
import BootstrapIcon from '../../utilities/bootstrap-icon.png';
import FirebaseIcon from '../../utilities/firebase-icon.png';
import ReduxIcon from '../../utilities/redux-icon.png';
import JavascriptIcon from '../../utilities/javascript-icon.png';
import GithubIcon from '../../utilities/github-icon.png';
import './section-projects.styles.scss';


const SectionProjects = () => {

  return (
    <section id='projects' className='projects'>
      <div className='projects-text'>
        <h2>My current Stack</h2> 
        <p className='about-text'>Full Stack Web Developer using MongoDB, Express, React, Node.js (MERN) with an emphasis on Frontend web development and mobile using React & React Native. Experienced in building CRUD applications, RESTful APIs using Node.js and express, User Auth and oAuth with PassportJS and Firebase. Common libraries of use: Axios, Redux, Lodash, react-router, redux-thunk, styled-components, . Common use of UI libraries: Bootstrap 4, React-Bootstrap, Material-UI.
        </p> 
      </div>
      <div className='cards-container'>
        <Card title='HTML 5' type='Web Development' devicon='devicon-html5-plain-wordmark colored' />
        <Card title='CSS 3' type='Web Development' devicon='devicon-css3-plain-wordmark colored' />
        <Card title='Saas' type='Web Development' devicon='devicon-sass-original colored' />
        <Card title='JavaScript ES6' type='Programming' devicon='devicon-javascript-plain'/>
        <Card title='ReactJS' type='Web Development' devicon='devicon-react-original-wordmark colored' />
        <Card title='Redux' type='Programming' devicon='devicon-redux-original colored' />
        <Card title='Bootstrap' type='Programming' devicon='devicon-bootstrap-plain-wordmark' />
        <Card title='Firebase' type='Programming' devicon='devicon-firebase-plain-wordmark colored' />
        <Card title='GitHub' type='Tools' devicon='devicon-github-original-wordmark colored' />
        <Card title='Python' type='programming' devicon='devicon-python-plain-wordmark' />
        <Card title='VS Code' type='Tools' devicon='devicon-visualstudio-plain colored' />
        <Card title='Webpack' type='Tools' devicon='devicon-webpack-plain colored' />
        <Card title='npm' type='Tools' devicon='devicon-npm-original-wordmark colored' />
      </div>
    </section>
  )
};

export default SectionProjects;


