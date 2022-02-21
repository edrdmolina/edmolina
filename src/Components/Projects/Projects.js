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
        margin: '3rem 0',

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
        gap: '2rem'

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
                <div style={{ display: 'none' }}/>
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
        </section>
    )
}

export default Projects