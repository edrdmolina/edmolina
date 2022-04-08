// Libraries
import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';

// Components
import HamburgerBtn from './HamburgerBtn';

// Icon
import Icon from '../../Documents/Logo2.png';

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
    width: '20rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 1rem',

    '& p': {
      textDecoration: 'none',
      color: 'white',
    },

    '& p:hover': {
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
      width: '7rem',
      alignItems: 'flex-end',
      backgroundColor: '#0D0D0D8F',
      margin: '0',
      borderRadius: '0 0 0 5px',
      padding: '3rem 0 1rem 0',
      '& p': {
        margin: '1rem 1rem',
      },
      position: 'relative',
      top: '-3rem',
      left: '150px',
      transition: 'transform 0.75s linear',
    },
    active: {
      transform: 'translateX(-150px)',
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
    window.addEventListener('scroll', () => {
      changeBackground()
    })

  })

  const toggleNav = () => toggleIsActive(!isActive)

  const hideNav = () => toggleIsActive(false);

  function changeBackground() {
    const navbar = document.querySelector('#Navbar');
    const navbarHeight = navbar.offsetHeight;
    const windowHeight = window.innerHeight;
    const navbarScrollTop = window.scrollY;
    const windowWidth = window.innerWidth;
    // const windowWidth = ;
    if((navbarScrollTop + navbarHeight) > windowHeight && windowWidth > 768) {
      toggleIsPastHero(true);
    } else {
      toggleIsPastHero(false)
    }
  }

  function scrollTo(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    hideNav();
  }



  return (
    <nav id='Navbar' className={classes.Navbar} style={{ backgroundColor: isPastHero ? '#0D0D0D8F' : '' }}>
      <img src={Icon} alt="Eduardo Molina's Logo" className={classes.Icon} onClick={() => scrollTo('Hero')}/>
      < HamburgerBtn toggleNav={toggleNav} isActive={isActive} />
      <div id='Nav' className={`${classes.Nav} ${isActive ? classes.active : classes.inActive}`}>
        <p onClick={() => scrollTo('Hero')}>Home</p>
        <p onClick={() => scrollTo('About')}>About</p>
        <p onClick={() => scrollTo('Skills')}>Skills</p>
        <p onClick={() => scrollTo('Projects')}>Projects</p>
        <p onClick={() => scrollTo('Contact')}>Contact</p>
      </div>
    </nav>
  )
}

export default Navbar