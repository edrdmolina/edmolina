// Components
import React from 'react'
import { createUseStyles } from 'react-jss';

// Icon
import Icon from '../Images/Logo2.png';

// Styles
const useStyles = createUseStyles({
  Navbar: {
    backgroundColor: '#0000005F',
    maxWidth: '1440px',
    width: '100%',
    height: '50px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '25px',
    position: 'sticky'
  },
  Icon: {
    height: '50px',
    width: '50px',
    margin: '0 25px',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  Nav: {
    width: '250px',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 25px',

    '& a': {
      textDecoration: 'none',
      color: 'white'
    },

    '& a:hover': {
      cursor: 'pointer'
    }
  },
})

// 768 break point

function Navbar() {
  const classes = useStyles();
  return (
    <nav id='Navbar' className={classes.Navbar}>
      <img src={Icon} alt="Eduardo Molina's Logo" className={classes.Icon}/>
      <div id='Nav' className={classes.Nav}>
        <a href='Navbar'>Home</a>
        <a href='Navbar'>About</a>
        <a href='Navbar'>Projects</a>
        <a href='Navbar'>Contact</a>
      </div>
    </nav>
  )
}

export default Navbar