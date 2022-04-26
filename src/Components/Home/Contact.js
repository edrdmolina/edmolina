// Libraries
import React from 'react';
import { createUseStyles } from 'react-jss';

// Data
import PortfolioData from '../../PortfolioData';

// Styles
const useStyles = createUseStyles({
    Contact: {
        backgroundColor: '#0D0D0D8F',
        width: '100%',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem 0',

        '& h2': {
            textAlign: 'center',
            margin: '0',
            padding: '1.5rem',
        },
    },

    email: {
        cursor: 'pointer',
        fontSize: '1.35rem',
        margin: '0',
        textDecoration: 'underline',

        '&:hover': {
            color: '#CCC'
        }
    },

    links: {
        width: '20rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: '2rem',

        '& a': {
            color: 'white'
        },

        '& a:hover': {
            color: '#CCC'
        },

        '& a:active':{
            transform: 'translate(1px, 1px)'
        }
    }
})

function Contact() {
    const classes = useStyles();
    const { email, github, linkedin, instagram } = PortfolioData.contact;

    function emailTo() {
        window.location = `mailto:${email}`
    }

    return (
        <section id='Contact' className={classes.Contact}>
            <h2>Contact</h2>
            <p className={classes.email} onClick={emailTo}>{email}</p>
            <div className={classes.links}>
                <a href={github} target="_blank" rel='noopener noreferrer'>
                    <i className="fab fa-github-alt fa-3x" />
                </a>
                <a href={linkedin} target="_blank" rel='noopener noreferrer'>
                    <i className="fab fa-linkedin-in fa-3x" />
                </a>
                <a href={instagram} target="_blank" rel='noopener noreferrer'>
                    <i className="fab fa-instagram fa-3x" />
                </a>
            </div>
        </section>
    )
}

export default Contact