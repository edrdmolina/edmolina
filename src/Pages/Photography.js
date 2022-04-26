// Libraries
import React from 'react';
import { createUseStyles } from 'react-jss';
import Header from '../Components/Photography/Header';
import PhotographyNav from '../Components/Photography/PhotographyNav';
import Photographs from '../Components/Photography/Photographs';

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
      < PhotographyNav />
      < Header />
      < Photographs />
    </div>
  );
}

export default Photography;