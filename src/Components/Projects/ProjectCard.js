// Libraries
import React from 'react'
import { createUseStyles } from 'react-jss';

// Styles
const useStyles = createUseStyles({
    projectCard: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

        '& img': {
            width: '65%',
            borderRadius: '10px'
        },


    },
    projectContent: {
        height: '90%',
        width: '35%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center',
        gap: '1rem',

        '& ul': {
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '90%',
            justifyContent: 'flex-end',

            '& li': {
                margin: '0.25rem 0.25rem'
            }
        }

    },
    title: {
        textAlign: 'end',

        '& h3, p': {
            margin: '0',
        },

    },
    description: {
        backgroundColor: '#0D0D0DC0',
        padding: '1rem',
        width: '120%',
        minHeight: '5rem',
        borderRadius: '10px'
    },
    links: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',

        '& a': {
            color: 'white'
        },
        '& a:hover, a:active': {
            transform: 'translate(1px, 1px)'
        }
    }
})

function ProjectCard(props) {
    const classes = useStyles();


    const data = props;
    const technologies = data.technologies.map((t, i) => {
        return (
            <li key={i}>{t}</li>
        )
    })

    return (
        <div className={classes.projectCard}>
            <img src={data.image} alt='Project preview' />
            <div className={classes.projectContent}>
                <div className={classes.title}>
                    <p>Project Name:</p>
                    <h3>{data.name}</h3>
                </div>
                <p className={classes.description}>{data.description}</p>
                <ul>
                    {technologies}
                </ul>
                <div className={classes.links}>
                    <a href={data.githubUrl} target="_blank" rel='noopener noreferrer'>
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                    <a href={data.appUrl} target="_blank" rel='noopener noreferrer'>
                        <i className="fas fa-external-link-alt fa-2x"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard