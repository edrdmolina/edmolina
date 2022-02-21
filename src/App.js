// Libraries
import React from 'react'
import { createUseStyles } from 'react-jss';

// Components
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero";
import About from './Components/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';

// Styles
const useStyles = createUseStyles({
  App: {
    backgroundImage: 'linear-gradient(90deg, #AEB5BF, #61788C, #8C8C8C)',
    backgroundSize: '300%',
    animation: '$bg-animation 5s linear 0s infinite alternate',
  },
  '@keyframes bg-animation': {
    '0%': {
        backgroundPosition: 'left',
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
      < Projects />
    </div>
  );
}

export default App;
