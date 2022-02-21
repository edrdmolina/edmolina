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
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

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

        border: '1px solid #000',
        height: '1000px'


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

    return (
        <section id='Projects' className={classes.projects}>
            <h2>Projects</h2>    
            <div className={classes.projectsContainer}>
                <ProjectCard {...projects}/>
            </div>
        </section>
    )
}

export default Projects