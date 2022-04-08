// Libraries
import React from 'react'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    HamburgerBtn: {
        position: 'absolute',
        height: '1.5rem',
        aspectRatio: '1',
        display: 'none',
        flexDirection: 'column',
        justifyContent: 'space-around',
        right: '1rem',
        top: '1rem',
        zIndex: '25',
        border: '1px solid #CCC',
        borderRadius: '5px',
        padding: '0.25rem',

        '&:hover': {
            cursor: 'pointer',
            border: '1px solid #AAA',
        },

        '& span': {
            width: '100%',
            height: '15%',
            backgroundColor: 'white',
            borderRadius: '5px'
        },

        transform: 'rotate(0deg)',
        transition: 'transform 0.35s linear',
    },
    turnQuarter: {
        transform: 'rotate(90deg)',
        transition: 'transform 0.35s linear',
    },
    '@media (max-width: 768px)': {
        HamburgerBtn: {
            display: 'flex'
        }
    }
})

function HamburgerBtn(props) {
    const classes = useStyles();

    const { toggleNav, isActive } = props;
    return (
        <div 
            className={`${classes.HamburgerBtn} ${isActive ? classes.turnQuarter : ''}`} 
            onClick={toggleNav}>
            <span />
            <span />
            <span />
        </div>
    )
}

export default HamburgerBtn