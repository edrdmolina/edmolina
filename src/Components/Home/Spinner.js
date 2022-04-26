// Libraries
import React from 'react'
import { createUseStyles } from 'react-jss';

// Styles
const useStyles = createUseStyles({
    Spinner: {
        height: '2rem',
        width: '2rem',
        borderRadius: '50%',
        border: '3px solid #CCC',
        borderTop: '5px solid #61788C',
        animation: '$spin 0.7s linear infinite'
    },

    '@keyframes spin': {
        to: {
            transform: 'rotate(360deg)'
        }
    }
})

function Spinner() {
    const classes = useStyles();
    return <div className={classes.Spinner} />
}

export default Spinner