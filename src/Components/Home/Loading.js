// Libraries
import React from 'react';
import { createUseStyles } from 'react-jss';

// Icon
import Icon from '../../Documents/Logo2.png';

const useStyles = createUseStyles({
    Loading: {
        backgroundImage: 'linear-gradient(90deg, #AEB5BF, #61788C, #BFB49E, #8C8C8C, #61788C, #AEB5BF)',
        backgroundSize: '300%',
        animation: '$bg-animation 30s linear 0s infinite alternate',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '& img': {
            color: 'white',
            animation: '$grow 2s linear 0s',
            transform: 'scale(0) rotate(45deg)',
        }
    },

    '@keyframes bg-animation': {
        '0%': {
            backgroundPosition: 'left',
        },
        '100%': {
            backgroundPosition: 'right',
        }
    },

    '@keyframes grow': {
        from: {
            transform: 'scale(0) rotate(45deg)',
        },
        to: {
            transform: 'scale(1) rotate(0deg)'
        }
    }
})

function Loading() {
    const classes = useStyles();
    return (
        <div className={classes.Loading}>
            <img src={Icon} alt='logo' />
        </div>
    )
}

export default Loading