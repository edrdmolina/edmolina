// Libraries
import React from 'react';
import { createUseStyles } from 'react-jss';

// Data
import PortfolioData from '../../PortfolioData';

// Components
import ProjectCard from './ProjectCard';

// Styles
const useStyles = createUseStyles({
    projects: {
        color: 'white',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '3rem 0',

        '& h2': {
            margin: '4rem'
        }
    },
    projectsContainer: {
        width: '100%',
        maxWidth: '1800px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5rem'

    },

    btnContainer: {
        width: '100%',
        height: '8%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: '5rem 0',

        '& button': {
            backgroundColor: '#61788C',
            color: '#E4E5E3',
            outline: 'none',
            border: 'none',
            borderRadius: '5px',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
        },
        '& button:hover': {
            backgroundColor: '#71889C',

        },
        '& button:active': {
            transform: 'translate(1px,  1px)'
        }
    },

    // 2K Screens
    '@media (min-width: 2500px)': {
        projectsContainer: {
            maxWidth: '2300px',
        }
    },
    // 4K Screens
    '@media (min-width: 3000px)': {
        projectsContainer: {
            maxWidth: '3000px',
        }
    },
})

function Projects() {
    const classes = useStyles();
    const { projects } = PortfolioData;

    const projectCards = projects.map((p, i) => {
        if(i >= 4) {
            return (
                <div key={i} style={{ display: 'none' }}/>
            )
        } else {
            return (
                < ProjectCard key={i} {...p}/>
            )
        }
    })

    return (
        <section id='Projects' className={classes.projects}>
            <h2>Projects</h2>    
            <div className={classes.projectsContainer}>
                {projectCards}
            </div>
            <div className={classes.btnContainer}>
                <button>SEE MORE</button>
            </div>
        </section>
    )
}

export default Projects