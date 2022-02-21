// Libraries
import React from 'react'
import { createUseStyles } from 'react-jss';

// Components
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero";
import About from './Components/About';
import Skills from './Components/Skills/Skills';

// Styles
const useStyles = createUseStyles({
  App: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundImage: 'linear-gradient(45deg, #AEB5BF, #61788C, #8C8C8C)',
    backgroundSize: '500%',
    animation: '$bg-animation 8s linear 0s infinite alternate',
  },
  '@keyframes bg-animation': {
    '0%': {
        backgroundPosition: 'left',
    },
    '33%': {
      backgroundPosition: 'top',
    },
    '66%': {
      backgroundPosition: 'bottom',
    },
    '100%': {
        backgroundPosition: 'right',
    }
}
})

function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      < Navbar />
      < Hero />
      < About />
      < Skills />
    </div>
  );
}

export default App;
