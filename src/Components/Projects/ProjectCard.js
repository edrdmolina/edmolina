// Libraries
import React from 'react'
import { createUseStyles } from 'react-jss';

// Styles
const useStyles = createUseStyles({
    projectCard: {
        width: '80%',
        height: '30rem',
        border: '1px solid black',

    }
})

function ProjectCard(props) {
    const classes = useStyles();


    const data = props['0']

    return (
        <div className={classes.projectCard}>
            {data.name}
        </div>
    )
}

export default ProjectCard