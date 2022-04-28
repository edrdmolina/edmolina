// Libraries
import React from 'react';
import { createUseStyles } from 'react-jss';
import Header from '../Components/Photography/Header';
import PhotographyNav from '../Components/Photography/PhotographyNav';
import Photographs from '../Components/Photography/Photographs';
import ScrollToTop from '../Components/ScrollToTop';
import Contact from '../Components/Home/Contact.js'

// Styles
const useStyles = createUseStyles({
  Photography: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
})

function Photography() {
  const classes = useStyles();
  return (
    <div className={classes.Photography}>
      < ScrollToTop />
      < PhotographyNav />
      < Header />
      < Photographs />
      < Contact />
    </div>
  );
}

export default Photography;