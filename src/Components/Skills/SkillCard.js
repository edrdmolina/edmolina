// Libraries
import React from 'react'
import { createUseStyles } from 'react-jss';

// Styles
const useStyles = createUseStyles({
    SkillCard: {
        height: '30rem',
        width: '22rem',
        borderRadius: '15px',
        boxShadow: '3px 3px 5px 5px rgba(0,0,0,0.25)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#0D0D0D57',
        overflow: 'hidden',
        margin: '0 auto',

        '& h3': {
            borderBottom: '1px solid #8C8C8C',
            margin: '0',
            width: '100%',
            textAlign: 'center',
            justifyContent: 'center',
            height: '17%',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#0D0D0D8F',
        },
    },
    courseRow: {
        width: '95%',
        height: '15%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        '& img': {
            height: '5rem',
        }
    },
    skillsList: {
        height: '50%',
        width: '90%',

        '& h5': {
            textAlign: 'center',
            margin: '1rem'
        },
    },
    buttonRow: {
        width: '100%',
        height: '8%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: '1rem 0',

        '& button': {
            backgroundColor: '#61788C',
            color: '#E4E5E3',
            outline: 'none',
            border: 'none',
            borderRadius: '5px',
            padding: '0.5rem 1rem',
        },
        '& button:hover': {
            cursor: 'pointer'
        },
        '& button:active': {
            transform: 'translate(1px,  1px)'
        }
    }
})

function SkillCard(props) {
    const classes = useStyles();

    const { name, logo, instructor, date, skills, certificate } = props;

    const skillsLi = skills.map((s, i) => {
        return (
            <li key={i}>{s}</li>
        )
    })

    const openCertificate = () => window.open(certificate)

    return (
        <div className={classes.SkillCard}>
            <h3>{name}</h3>
            <div className={classes.courseRow}>
                <img src={logo} alt='Logo' className={classes.logo} />
                <aside>
                    <p>By: {instructor}</p>
                    <p>Date: {date}</p>
                </aside>
            </div>
            <div className={classes.skillsList}>
                <h5>Skills Acquired</h5>
                <ul>
                    {skillsLi}
                </ul>
            </div>
            <div className={classes.buttonRow}>
                <button onClick={openCertificate}>Open Certificate</button>
            </div>
        </div>
    )
}

export default SkillCard