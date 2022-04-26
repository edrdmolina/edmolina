// Libraries
import React from 'react';
import { createUseStyles } from 'react-jss';

// Documents
import Portrait from '../../Documents/Portrait.jpg';

// Styles
const useStyles = createUseStyles({
    About: {
        width: '100%',
        color: 'white',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: '3rem 0',
        marginTop: '5rem'
    },
    Type: {
        width: '35%',

        '& h2': {
            textAlign: 'center'
        },

        '& p:nth-of-type(2n)': {
            textIndent: '1.5rem'
        }   
    },
    ImageContainer: {
        borderRadius: '50%',
        height: '20rem',
        animation: '$rotatingRing 1s linear infinite'
    },
    Portrait: {
        borderRadius: '50%',
        height: '100%',
        aspectRatio: '1',
    },
    '@keyframes rotatingRing': {
        from: {
            boxShadow: '0 5px 25px 15px #402A014F'
        },
        '25%': {
            boxShadow: '-5px 0px 25px 15px #402A014F'
        },
        '50%': {
            boxShadow: '0 -5px 25px 15px #402A014F'
        },
        '75%': {
            boxShadow: '5px 0px 25px 15px #402A014F'
        },
        to: {
            boxShadow: '0 5px 25px 15px #402A014F'
        },
    },
    '@media (max-width: 768px)': {
        About: {
            flexDirection: 'column-reverse',
        },
        Type: {
            width: '75%',         
        },

        ImageContainer: {
            height: '13rem'
        }
    },
})

function About() {
    const classes = useStyles();
    return (
        <section id='About' className={classes.About}>
            <div className={classes.Type}>
                <h2>About</h2>
                <p>
                    After working in Aviation Maintenance for over six years, 
                    I decided to take on a new challenge. With an existing 
                    interest in creativity and engineering, I realized I can 
                    contribute to a field that delivers solutions that grow 
                    businesses, automate complex tasks, and provides data to 
                    the masses.
                </p>
                <p>
                    Since beginning my journey as a Full Stack Web Developer, 
                    I have focused on learning popular technologies by completing 
                    online courses and most importantly, building web applications 
                    that I find of assistance in my life.
                </p>
            </div>
            <div className={classes.ImageContainer}>
                <img 
                    src={Portrait} 
                    alt='Portrait of Eduardo Molina Taken at Bok Towers in Lake Wales Florida'
                    className={classes.Portrait} 
                />
            </div>
        </section>
    )
}

export default About