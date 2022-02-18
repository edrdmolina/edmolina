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
        top: '0.5rem',

        '&:hover': {
            cursor: 'pointer'
        },

        '& span': {
            width: '100%',
            height: '15%',
            backgroundColor: 'white',
            borderRadius: '5px'
        }
    },
    '@media (max-width: 768px)': {
        HamburgerBtn: {
            display: 'flex'
        }
    }
})

function HamburgerBtn(props) {
    const classes = useStyles();

    const { toggleNav } = props;
    return (
        <div className={classes.HamburgerBtn} onClick={toggleNav}>
            <span />
            <span />
            <span />
        </div>
    )
}

export default HamburgerBtn