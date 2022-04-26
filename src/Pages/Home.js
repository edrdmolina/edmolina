// Libraries
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Components
import Loading from '../Components/Loading';
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero";
import About from '../Components/About';
import Skills from '../Components/Skills/Skills';
import Projects from '../Components/Projects/Projects';
import Contact from '../Components/Contact';

function Home() {
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
      <div>
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

export default Home;