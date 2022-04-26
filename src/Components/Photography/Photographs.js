// Libraries
import React from 'react';
import { createUseStyles } from 'react-jss';

import PortfolioData from '../../PortfolioData';

import Photo from './Photo';

// Styles
const useStyles = createUseStyles({
    Photographs: {
      minHeight: '100vh',
      width: '90%',
      maxWidth: '1000px',
      margin: '2rem 0',
      paddingTop: '1rem',
      display: 'grid',
      gap: '1rem',
      gridTemplateColumns: '1fr 1fr'
    },

    '@media (max-width: 768px)': {
      Photographs: {
        gridTemplateColumns: '1fr'
      }
  },
})

function Photographs() {
    const classes = useStyles();

    const photographs = PortfolioData.photos.map((photo, i) => {
      return (
        < Photo { ...photo } key={ i }/>
      )
    })

    return (
        <div className={classes.Photographs} id='Photographs'>
            { photographs }
        </div>
    )
}

export default Photographs