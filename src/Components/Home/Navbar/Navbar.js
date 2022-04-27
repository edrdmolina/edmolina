// Libraries
import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';

// Components
import HamburgerBtn from './HamburgerBtn';

// Icon
import Icon from '../../../Documents/Logo2.png';

// Documents
import Resume from '../../../Documents/Resume.pdf'

// Hooks
import scrollTo from '../../../Helpers/scrollTo';

// Styles
const useStyles = createUseStyles({
  Navbar: {
    width: '100%',
    height: '3.5rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    zIndex: '20',
    transition: 'background-color 0.35s linear',
    paddingTop: '0.5rem',
  },
  Icon: {
    height: '2.5rem',
    width: '2.5rem',
    margin: '0 1rem',
    cursor: 'pointer',
  },
  Nav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '1rem',
    alignItems: 'center',
    margin: '0 1rem',

    '& p, a': {
      textDecoration: 'none',
      color: 'white',
    },

    '& p:hover, a:hover': {
      cursor: 'pointer',
      textDecoration: 'underline'
    }
  },
  // SMALL SCREENS
  '@media (max-width: 768px)': {
    Navbar: {
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
    Icon: {
      marginRight: 'auto'
    },
    Nav: {
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '3rem',
      width: '100vw',
      height: '100vh',
      alignItems: 'flex-end',
      backgroundColor: '#0D0D0DF0',
      margin: '0',
      position: 'absolute',
      top: '0',
      left: '100vw',
      transition: 'transform 0.35s linear',
      zIndex: '20',
      '& p, a': {
        margin: '1rem 1rem',
      },
    },
    active: {
      transform: 'translateX(-100vw)',
    },
  },
  active: {},
  inActive: {},
})

// 768 break point

function Navbar() {
  const classes = useStyles();
  const [isActive, toggleIsActive] = useState(false);
  const [isPastHero, toggleIsPastHero] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => changeBackground())
  })

  const toggleNav = () => toggleIsActive(!isActive)

  const hideNav = () => toggleIsActive(false);

  function changeBackground() {
    const navbar = document.querySelector('#Navbar');
    const navbarHeight = navbar.offsetHeight;
    const windowHeight = window.innerHeight;
    const navbarScrollTop = window.scrollY;

    if((navbarScrollTop + navbarHeight) > windowHeight) toggleIsPastHero(true);
    else toggleIsPastHero(false)
  }

  function handleScrollTo(id) {
    scrollTo(id);
    hideNav();
  }

  return (
    <nav id='Navbar' className={classes.Navbar} style={{ backgroundColor: isPastHero ? '#0D0D0D8F' : '' }}>
      <img src={Icon} alt="Eduardo Molina's Logo" className={classes.Icon} onClick={() => scrollTo('Hero')}/>
      < HamburgerBtn toggleNav={toggleNav} isActive={isActive} />
      <div id='Nav' className={`${classes.Nav} ${isActive ? classes.active : classes.inActive}`}>
          <p onClick={ () => handleScrollTo('Hero') }>Home</p>
          <p onClick={ () => handleScrollTo('About') }>About</p>
          <p onClick={ () => handleScrollTo('Skills') }>Skills</p>
          <p onClick={ () => handleScrollTo('Projects') }>Projects</p>
          <p onClick={ () => handleScrollTo('Contact') }>Contact</p>
          <Link to='/photography'>Photography</Link>
          <a href={Resume} target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </nav>
  )
}

export default Navbar