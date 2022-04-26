// Libraries
import React from 'react';
import { createUseStyles } from 'react-jss';

import scrollTo from '../../Helpers/scrollTo.js'

// Styles
const useStyles = createUseStyles({
  Header: {
    height: '100vh',
    width: '100vw',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',

    '& section': {
      width: '90%',
      maxWidth: '1000px',
      marginTop: '10rem',

      '& h1': {
        display: 'inline-block'
      },

      '& h4': {
        textIndent: '1.5rem'
      },
      '& span': {
        fontStyle: 'italic'
      }
    },

    '& i': {
      position: 'relative',
      bottom: '5rem',
      animation: '$floatDown 1.5s ease-in 0s infinite',
      cursor: 'pointer',
    }
  },

  '@keyframes floatDown': {
    from: {
      transform: 'translateY(0px)',
    },
    '50%': {
      transform: 'translateY(5px)',
    },
    to: {
      transform: 'translateY(0px)',
    }
},
})

function Header() {
  const classes = useStyles();
  return (
    <header className={classes.Header} id='Header'>
      <section>
        <h1>Hey there!</h1>
        <hr/>
        <h4>
          Apart from being passionate about Web Development, I am also a <span>Hobbyist Photographer</span>.
          I enjoy creating photographs in both film and digital mediums. Check out some of my collection below.
        </h4>
      </section>
      <i className="fas fa-chevron-down fa-2x" onClick={ () => scrollTo('Photographs') }/>
    </header>
  )
}

export default Header