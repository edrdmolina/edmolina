// Libraries
import React from 'react'
import { createUseStyles } from 'react-jss';

// Styles
const useStyles = createUseStyles({
    projectCard: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        border: '1px solid #CCC',
        padding: '2rem',
        borderRadius: '10px',
        backgroundColor: '#FFFFFF2F',

        '& img': {
            width: '65%',
            borderRadius: '10px',
            boxShadow: '0 0 5px 5px rgba(0,0,0,0.25)'
        },
    },
    projectContent: {
        height: '90%',
        width: '30rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center',
        gap: '1rem',
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
        width: '125%',
        minHeight: '5rem',
        borderRadius: '10px'
    },

    technologies: {
        '& p': {
            textAlign: 'end',
            margin: '0 0 0.5rem 0',
        },

        '& ul': {
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '100%',
            margin: '0',
            justifyContent: 'flex-end',
            padding: '0',

            '& li': {
                margin: '0.25rem 0.25rem'
            }
        }
    },

    links: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',

        '& a': {
            color: 'white'
        },
        '& a:hover': {
            color: '#CCC'
        },
        '& a:active': {
            transform: 'translate(1px, 1px)'
        }
    },
    //! SMALL SCREENS
    '@media (max-width: 1200px)': {
        projectCard: {
            width: '100%',
            display: 'inline-block',
            position: 'relative',
            border: 'none',
            padding: '0',
            borderRadius: '0',
            backgroundColor: '#FFFFFF00',

            '& img': {
                display: 'block',
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                zIndex: '5',
                position: 'absolute',
                top: '0',
                left: '0',
            }
        },

        projectContent: {
            position: 'relative',
            top: '0',
            left: '0',
            width: '100%',
            zIndex: '10',
            backgroundColor: '#0D0D0DC0',
            alignItems: 'flex-start',
            borderRadius: '10px',
        },

        title: {
            textAlign: 'start',
            padding: '2rem 0 0 1rem'
        },

        description: {
            paddingLeft: '1rem',
            width: '95%',
            minHeight: '5rem',
            borderRadius: '10px',
            backgroundColor: 'transparent',
            margin: '0'
        },

        technologies: {
            paddingLeft: '1rem',
            '& p': {
                textAlign: 'start',
                margin: '0 0 0.5rem 0',
            },
    
            '& ul': {
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: '100%',
                margin: '0',
                justifyContent: 'flex-start',
                padding: '0',
    
                '& li': {
                    margin: '0.25rem 0.25rem'
                }
            }
        },

        links: {
            width: '95%',
            padding: '0 0 2rem 1rem'
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
                <div className={classes.technologies}>
                    <p>Technologies:</p>
                    <ul>
                        {technologies}
                    </ul>
                </div>
                <div className={classes.links}>
                    <a href={data.githubUrl} target="_blank" rel='noopener noreferrer'>
                        <i className="fab fa-github fa-2x" />
                    </a>
                    <a href={data.appUrl} target="_blank" rel='noopener noreferrer'>
                        <i className="fas fa-external-link-alt fa-2x" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard