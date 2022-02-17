// Libraries
import React from 'react'
import { createUseStyles } from 'react-jss';

// Components
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from './Components/About';

// Styles
const useStyles = createUseStyles({
  App: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
})

function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      < Navbar />
      < Hero />
      < About />
    </div>
  );
}

export default App;
