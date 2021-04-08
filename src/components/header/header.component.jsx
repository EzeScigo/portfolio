import React, {useState, useEffect} from 'react';
import { debounce } from '../../utilities/helpers';
import { Sticky } from 'react-sticky';

import './header.styles.scss';

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0); 
  const [visible, setVisible] = useState(false);

  return (
    <Sticky>
      {({ style, isSticky }) => ( 
        <header style={style} className={`header-navbar ${isSticky ? '' : 'hidden'}`}>
          <div>
            <a className='logo' href='#home'>ESc</a>
            {/* <a href='#'>Projects</a> */}
          </div>
          <div className='header-buttons'>
            <a href='#about-me'>About me</a>
            <a href='#skills'>Skills</a>
            <a href='#contact'>Contact</a>
          </div>  
        </header>
      )}
    </Sticky>
)};


export default Header;

// source: https://medium.com/mtholla/create-a-transitioning-header-using-react-hooks-like-mediums-c70ed211f7c9
// We call our new useDocumentScrollThrottled utility function. From this, we capture the previousScrollTop and currentScrollTop values that will be passed back to us when the callback function is invoked on scroll. We take these arguments and determine if the user has scrolled down (isScrolledDown), and whether or not the minimum scroll position has been reached (isMinimumScrolled).
// We then use these values to pass booleans to our useState functions. Finally, our classNames now get set to the correct values when the setShouldShowShadow and setShouldHideHeader hooks are called!
// There are a couple of things that I would like to highlight from our completed code. Did you see how we captured the previous scrollTop value? This is one nice feature of useState hooks; they always give us access to the previously stored value!
// Also, you might be asking why we placed the setShouldHideHeader function inside of a setTimeout. This was done to add a bit of delay effect to the header’s hide/show movement after scrolling.