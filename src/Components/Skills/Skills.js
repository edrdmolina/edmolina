// Libraries
import React from 'react';
import { createUseStyles } from 'react-jss';

// Data
import PortfolioData from '../../PortfolioData';

// Components
import SkillCard from './SkillCard';

// Styles
const useStyles = createUseStyles({
    skills: {
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        margin: '3rem 0',
    },
    skillsContainer: {
        width: '100%',
        maxWidth: '1800px',
        border: '1px solid #8C8C8C',
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        boxShadow: '0 0 5px 5px ##0D0D0DC9',
        alignItems: 'center',
        paddingBottom: '2rem',
        backgroundColor: '#FFFFFF2F',

        '& h2': {
            margin: '4rem'
        }
    },
    certificateContainer: {
        width: '95%',
        gap: '2rem',
        alignItems: 'center',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(22rem, 1fr))',
    },
    // 2K Screens
    '@media (min-width: 2500px)': {
        skillsContainer: {
            maxWidth: '2300px',
        }
    },
    // 4K Screens
    '@media (min-width: 3000px)': {
        skillsContainer: {
            maxWidth: '3000px',
        }
    },

})

function Skills() {
    const classes = useStyles();
    
    const { certificates } = PortfolioData;

    const skillCards = certificates.map((data, i) => {
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
            </div>
        </section>
    )
}

export default Skills