// Libraries
import React, { useState } from 'react'
import { createUseStyles } from 'react-jss';

// Styles
const useStyles = createUseStyles({
    Photo: {
        borderRadius: '10px',
        overflow: 'hidden',
        position: 'relative',

        '& img': {
            height: '100%',
            width: '100%',
        }
    },
    Info: {
        position: 'absolute',
        top: '0',
        left: '0',
        backgroundColor: '#0D0D0DD8',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        color: 'white',
        opacity: '0',
        transition: 'opacity 0.25s ease-in',

        '& li': {
            listStyle: 'none',
            margin: '2rem 0'
        },
    }
})

function Photo(props) {
    const classes = useStyles();

    const [isHovered, toggleIsHovered] = useState(false);

    

    return (
        <div 
            className={classes.Photo} 
            onMouseEnter={ () => toggleIsHovered(true) }
            onMouseLeave={ () => toggleIsHovered(false) }
        >
            
            <div 
                className={classes.Info}
                style={ isHovered ? { opacity: '1' } : { opacity: '0' } }
                >
                <ul>
                    <li>
                        <p>Name: { props.name }</p>
                    </li>
                    <li>
                        <p>Location: { props.location }</p>
                    </li>
                    <li>
                        <p>Camera: { props.camera }</p>
                    </li>
                    {props.filmStock ? (
                        <li>
                            <p>Film Stock: { props.filmStock }</p>
                        </li>
                    ) : (
                        null
                    )}
                </ul>
            </div>
            <img src={props.image} alt={props.name} loading='lazy' />
        </div>
    )
}

export default Photo