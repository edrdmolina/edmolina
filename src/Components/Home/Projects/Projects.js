// Libraries
import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

// Data
import PortfolioData from '../../../PortfolioData';

// Components
import ProjectCard from './ProjectCard';
import Spinner from '../Spinner';

// Styles
const useStyles = createUseStyles({
    projects: {
        color: 'white',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem 0',

        '& h2': {
            margin: '2rem'
        }
    },
    projectsContainer: {
        width: '70%',
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

    '@media (max-width: 768px)': {
        projectsContainer: {
            width: '90%',
        }
    }
})

function Projects() {
    const [showMore, toggleShowMore] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const classes = useStyles();
    const { projects } = PortfolioData;

    function showMoreToggle() {
        if(!showMore) {
            toggleLoading(true);
            setTimeout(() => {
                toggleLoading(false);
                toggleShowMore(true);
            }, 1250);
        } else {
            toggleShowMore(false);
        }
    }

    const projectCards = projects.map((p, i) => {
        if(i >= 4 && !showMore) {
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
                    {loading ? (
                        < Spinner />
                    ) : (
                        <button onClick={showMoreToggle}>
                            {showMore ? 'SEE LESS' : 'SEE MORE' }
                        </button>
                    )}
            </div>
        </section>
    )
}

export default Projects