// Libraries
import React from 'react';
import { createUseStyles } from 'react-jss';

// Images
import HeroImage from '../Images/HeroBackground.jpeg'

// Styles
const useStyles = createUseStyles({
    HeroBg: {
        height: '100vh',
        width: '100%',
        background: `url(${HeroImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        zIndex: '-2',
        textTransform: 'capitalize',
    },
    shader: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        backgroundColor: '#0000004B',
        zIndex: '-1',
    },
    heroContent: {
        height: '60%',
        width: '100%',
        maxWidth: '1440px',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'white',
        position: 'relative',
        top: '30%',
    },
    header1: {
        letterSpacing: '2px',
        width: '66%',
        textAlign: 'start'
    },
    message: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        
        '& p': {
            display: 'inline',
        },
        '& i': {
            animation: '$floatDown 1.5s ease-in 0s infinite'
        }
    },
    '@keyframes floatDown': {
        from: {
          transform: 'translateY(0px)',
        },
        '50%': {
          transform: 'translateY(5px)',
        },
        to: {
          transform: 'translateY(0px)',
        }
      }
})

function Hero() {
    const classes = useStyles();

    return (
        <section id='Hero' className={classes.HeroBg}>
            <div className={classes.shader} />
            <div className={classes.heroContent}>
                <h1 className={classes.header1}>
                    Hi, I'm Eduardo. 
                    <br/>
                    I design & build Web Apps
                </h1>
                <div className={classes.message}>
                    <p>Scroll Down to see more</p>
                    <i className="fas fa-chevron-down fa-2x" />
                </div>
            </div>
        </section>
    )
}

export default Hero