// Libraries
// Libraries
import React, { Component } from 'react';

// Components
import Project from '../Components/Project';

// Data
import PortfolioData from '../PortfolioData.js';

// Styles
import '../Styles/Projects.css';

export class Projects extends Component {
    render() {

        const Projects = PortfolioData.projects.map((p, i) => {
            return (
                < Project {...p} key={i} />
            )
        })

        return (
            <div className='Projects'>
                <div className='Heading'>
                    <h1>Projects</h1>
                </div>
                <div className='Project-container'>
                    {Projects}
                </div>
            </div>
        )
    }
}

export default Projects
