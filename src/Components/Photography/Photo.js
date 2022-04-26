// Libraries
import React from 'react'
import { createUseStyles } from 'react-jss';

// Styles
const useStyles = createUseStyles({
    Photo: {
        borderRadius: '10px',
        overflow: 'hidden',

        '& img': {
            height: '100%',
            width: '100%',
        }
    },
    Info: {

    }
})

function Photo(props) {
    const classes = useStyles();

    return (
        <div className={classes.Photo}>
            <div>

            </div>
            <img src={props.image} alt={props.name} loading='lazy' />
        </div>
    )
}

export default Photo