// Libraries
import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import axios from 'axios';

// Components
import Loading from './Components/Loading';
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero";
import About from './Components/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact';

// Styles
const useStyles = createUseStyles({
  App: {
    backgroundImage: 'linear-gradient(90deg, #AEB5BF, #61788C, #BFB49E, #8C8C8C, #61788C, #AEB5BF)',
    backgroundSize: '500%',
    animation: '$bg-animation 30s linear 0s infinite alternate',
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

  const [loading, updateLoading] = useState(true);

  useEffect(() => {
    loadingPage()
    sendMetaData()
  })

  async function sendMetaData() {
    if(loading) {
      const res = await axios.put('https://multi-purpose-api.herokuapp.com/api/portfolio');
      console.log(`Hello ${res.data.ipAddress}, welcome to my portfolio.\nDon't mind me, I'm only counting the amount of visits to my site.`)
    } else return;
  }

  function loadingPage() {
    if(loading) {
      setTimeout(() => {
        updateLoading(false);
      }, 2000);
    } else return;
  }

  if(loading) {
    return (
      < Loading />
    )
  } else {
    return (
      <div className={classes.App}>
        < Navbar />
        < Hero />
        < About />
        < Skills />
        < Projects />
        < Contact />
      </div>
    );
  }
}

export default App;
