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
        minHeight: '800px',
        backgroundColor: '#0D0D0D',
        display: 'flex',
        justifyContent: 'center'
    },
    skillsContainer: {
        width: '100%',
        maxWidth: '2000px',
        backgroundColor: '#E4E5E3',
        transform: 'translateY(-150px)',
        border: '1px solid #8C8C8C',
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        color: '#61788C',
        boxShadow: '0 0 5px 5px ##0D0D0DC9',
        alignItems: 'center',
        paddingBottom: '2rem'
    },
    certificateContainer: {
        width: '95%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        gap: '1.5rem'
    }

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