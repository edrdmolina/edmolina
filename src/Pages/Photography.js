// Libraries
import React from 'react';
import { createUseStyles } from 'react-jss';
import Header from '../Components/Photography/Header';
import PhotographyNav from '../Components/Photography/PhotographyNav';

// Styles
const useStyles = createUseStyles({
  Photography: {
    minHeight: '100vh',
    width: '100vw',
  }
})

function Photography() {
  const classes = useStyles();
  return (
    <div className={classes.Photography}>
      < PhotographyNav />
      < Header />
    </div>
  );
}

export default Photography;