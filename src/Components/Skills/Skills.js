// Libraries
import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

// Data
import PortfolioData from '../../PortfolioData';

// Components
import SkillCard from './SkillCard';
import Spinner from '../Spinner';

// Styles
const useStyles = createUseStyles({
    skills: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        margin: '2rem 0',
    },
    skillsContainer: {
        width: '80%',
        maxWidth: '1500px',
        border: '1px solid #8C8C8C',
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        boxShadow: '0 0 5px 5px ##0D0D0DC9',
        alignItems: 'center',
        paddingBottom: '4rem',
        backgroundColor: '#FFFFFF2F',

        '& h2': {
            margin: '2rem',
            textAlign: 'center'
        }
    },
    certificateContainer: {
        width: '95%',
        gap: '2rem',
        alignItems: 'center',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))',
    },

    btnContainer: {
        width: '100%',
        height: '8%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: '3rem 0 0 0',

        '& button': {
            backgroundColor: '#61788C',
            color: '#E4E5E3',
            outline: 'none',
            border: 'none',
            borderRadius: '5px',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
        },
        '& button:hover': {
            backgroundColor: '#71889C',

        },
        '& button:active': {
            transform: 'translate(1px,  1px)'
        }
    },

    '@media (max-width: 768px)': {
        skillsContainer: {
            width: '100%',
        }
    },
    // 2K Screens
    '@media (min-width: 2500px)': {
        skillsContainer: {
            maxWidth: '2300px',
        }
    },
    // 4K Screens
    '@media (min-width: 3200px)': {
        skillsContainer: {
            maxWidth: '3000px',
        }
    },

})

function Skills() {
    const [showMore, toggleShowMore] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const classes = useStyles();
    const { certificates } = PortfolioData;

    function showMoreToggle() {
        if(!showMore) {
            toggleLoading(true);
            setTimeout(() => {
                toggleLoading(false);
                toggleShowMore(true);
            }, 1250);
        } else {
            toggleShowMore(false);
        }
    }

    const skillCards = certificates.map((data, i) => {
        if(i >= 4 && !showMore) {
            return (
                <div key={i} style={{ display: 'none' }} />
            )
        }
        return (
            <SkillCard key={i} {...data} />
        )
    })

    return (
        <section id='Skills' className={classes.skills}>
            <div className={classes.skillsContainer}>
                <h2>Skills And Certificates</h2>
                <div className={classes.certificateContainer}>
                    {skillCards}
                </div>
                <div className={classes.btnContainer}>
                    {loading ? (
                        < Spinner />
                    ) : (
                        <button onClick={showMoreToggle}>
                            {showMore ? 'SEE LESS' : 'SEE MORE' }
                        </button>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Skills