// Libraries
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Components
import Loading from '../Components/Home/Loading';
import Navbar from "../Components/Home/Navbar/Navbar";
import Hero from "../Components/Home/Hero";
import About from '../Components/Home/About';
import Skills from '../Components/Home/Skills/Skills';
import Projects from '../Components/Home/Projects/Projects';
import Contact from '../Components/Home/Contact';

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