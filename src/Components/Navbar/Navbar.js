// Libraries
import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

// Components
import HamburgerBtn from './HamburgerBtn';

// Icon
import Icon from '../../Documents/Logo2.png';

// Styles
const useStyles = createUseStyles({
  Navbar: {
    maxWidth: '2000px',
    width: '100%',
    height: '2rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '25px',
    position: 'fixed',
    zIndex: '10'
  },
  Icon: {
    height: '2.5rem',
    width: '2.5rem',
    margin: '0 1rem',
  },
  Nav: {
    width: '500px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 1rem',

    '& a': {
      textDecoration: 'none',
      color: 'white',
    },

    '& a:hover': {
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
      width: '20%',
      alignItems: 'flex-end',
      backgroundColor: '#0D0D0DCF',
      margin: '0',
      borderRadius: '10px 0 0 10px',
      '& a': {
        margin: '0.25rem 1rem',
      },
    },
    active: {
      transform: 'translateX(0px)',
      transition: 'transform 1s ease-in',
      '& a': {
        opacity: '1'
      }
    },
    inActive: {
      transform: 'translateX(150px)',
      transition: 'transform 1s ease-in',
    },
  },
  active: {},
  inActive: {},
})

// 768 break point

function Navbar() {
  const classes = useStyles();
  const [isActive, toggleIsActive] = useState(false);

  function toggleNav() {
    toggleIsActive(!isActive)
  }

  return (
    <nav id='Navbar' className={classes.Navbar}>
      <img src={Icon} alt="Eduardo Molina's Logo" className={classes.Icon}/>
      < HamburgerBtn toggleNav={toggleNav} isActive={isActive} />
      <div id='Nav' className={`${classes.Nav} ${isActive ? classes.active : classes.inActive}`}>
        <a href='#Hero'>Home</a>
        <a href='#About'>About</a>
        <a href='#Skills'>Skills</a>
        <a href='#Projects'>Projects</a>
        <a href='#Contact'>Contact</a>
      </div>
    </nav>
  )
}

export default Navbar