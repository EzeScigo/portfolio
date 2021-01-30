import React, {useState} from 'react';

import useDocumentScrollThrottled from '../../utils/useDocumentScrollThrottled/useDocumentScrollThrottled';

import './header.styles.scss';

const Header = () => {
  const [hideHeader, setHideHeader] = useState(false);
  const [showShadow, setShowShadow] = useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const shadowStyle = showShadow ? 'shadow' : '';
  const hiddenStyle = hideHeader ? 'hidden' : '';

  return (
    <div className={`header-container ${hiddenStyle} ${shadowStyle}`}>
      <div className='logo'>Logo</div>
      <ul className='links'>
        <li className='link-item'>Works</li>
        <li className='link-item'>About</li>
        <li className='link-item'>Contact</li>
      </ul>  
    </div>
)};


export default Header;

// source: https://medium.com/mtholla/create-a-transitioning-header-using-react-hooks-like-mediums-c70ed211f7c9
// We call our new useDocumentScrollThrottled utility function. From this, we capture the previousScrollTop and currentScrollTop values that will be passed back to us when the callback function is invoked on scroll. We take these arguments and determine if the user has scrolled down (isScrolledDown), and whether or not the minimum scroll position has been reached (isMinimumScrolled).
// We then use these values to pass booleans to our useState functions. Finally, our classNames now get set to the correct values when the setShouldShowShadow and setShouldHideHeader hooks are called!
// There are a couple of things that I would like to highlight from our completed code. Did you see how we captured the previous scrollTop value? This is one nice feature of useState hooks; they always give us access to the previously stored value!
// Also, you might be asking why we placed the setShouldHideHeader function inside of a setTimeout. This was done to add a bit of delay effect to the header’s hide/show movement after scrolling.