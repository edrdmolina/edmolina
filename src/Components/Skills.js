// Libraries
import React from 'react';
import { createUseStyles } from 'react-jss';

// Styles
const useStyles = createUseStyles({
    skills: {
        width: '100%',
        minHeight: '800px',
        backgroundColor: '#0D0D0D',
        display: 'flex',
        justifyContent: 'center'
    },
    skillsContainer: {
        width: '100%',
        maxWidth: '2000px',
        minHeight: '800px',
        backgroundColor: '#E4E5E3',
        transform: 'translateY(-150px)',
        border: '1px solid #8C8C8C',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        color: '#61788C',
        boxShadow: '0 0 5px 5px ##0D0D0DC9',

        '& h2': {
            textAlign: 'center'
        }
    },
    certificateContainer: {
        display: 'flex',
        flexDirection: 'row',

    }

})

function Skills() {
    const classes = useStyles();

    return (
        <section id='Skills' className={classes.skills}>
            <div className={classes.skillsContainer}>
                <h2>Skills And Certificates</h2>
                <div className={classes.certificateContainer}>

                </div>
            </div>
        </section>
    )
}

export default Skills