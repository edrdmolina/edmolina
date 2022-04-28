// Libraries
import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';

import scrollTo from '../../Helpers/scrollTo.js'

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

    '& nav': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',

      '& a, p': {
        textDecoration: 'none',
        color: 'white',
        cursor: 'pointer',
        margin: '0 1rem',
  
        '&:hover': {
          textDecoration: 'underline'
        }
      },
    },

  },
  Icon: {
    height: '2.5rem',
    width: '2.5rem',
    margin: '0 1rem',
    cursor: 'pointer',
  },
})

function PhotographyNav() {
  const classes = useStyles();
  const [isPastHero, toggleIsPastHero] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => changeBackground())
  })

  function changeBackground() {
    const navbar = document.querySelector('#Navbar');
    const navbarHeight = navbar.offsetHeight;
    const windowHeight = window.innerHeight;
    const navbarScrollTop = window.scrollY;

    if((navbarScrollTop + navbarHeight) > windowHeight) toggleIsPastHero(true);
    else toggleIsPastHero(false)
  }

  return (
    <nav id='Navbar' className={classes.Navbar} style={{ backgroundColor: isPastHero ? '#0D0D0D8F' : '' }}>
      <img src={Icon} alt="Eduardo Molina's Logo" className={classes.Icon} onClick={ () => scrollTo('Header') }/>
      <nav>
        <a href='/'>Web Development</a>
        <p onClick={ () => scrollTo('Contact') }>Contact</p>
      </nav>
    </nav>
  )
}

export default PhotographyNav;