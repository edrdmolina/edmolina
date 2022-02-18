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
  '@media (max-width: 768px)': {
    Navbar: {
      flexDirection: 'column'
    },
    Icon: {
      marginRight: 'auto'
    },
    Nav: {
      flexDirection: 'column',
      width: '100%',
      alignItems: 'flex-end',

      '& a': {
        margin: '0.25rem 1rem',
        opacity: '0'
      },
      '& :nth-child(1n)': {
        animation: '$fallDown 1s ease-in 1s forwards'
      },
      '& :nth-child(2n)': {
        animation: '$fallDown 1s ease-in 0.75s forwards'
      },
      '& :nth-child(3n)': {
        animation: '$fallDown 1s ease-in 0.5s forwards'
      },
      '& :nth-child(4n)': {
        animation: '$fallDown 1s ease-in 0.25s forwards'
      },
      '& :nth-child(5n)': {
        animation: '$fallDown 1s ease-in 0s forwards'
      }
    },
    inactive: {
      display: 'none',
    },
    '@keyframes fallDown': {
      from: {
        transform: 'translateY(-115px)',
        opacity: '0'
      },
      '75%': {
        transform: 'translateY(0px)',
        opacity: '1'
      },
      '85%': {
        transform: 'translateY(-25px)',
        opacity: '1'
      },
      to: {
        transform: 'translateY(0px)',
        opacity: '1'
      }
    }
  },
  inactive: {
    
  },
  


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
      < HamburgerBtn toggleNav={toggleNav} />
      <div id='Nav' className={`${isActive ? '' : classes.inactive} ${classes.Nav}`}>
        <a href='#Hero'>Home</a>
        <a href='#About'>About</a>
        <a href='#Skills'>Skills</a>
        <a href='Navbar'>Projects</a>
        <a href='Navbar'>Contact</a>
      </div>
    </nav>
  )
}

export default Navbar