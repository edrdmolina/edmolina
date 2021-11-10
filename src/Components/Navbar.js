// Libraries
import React, { Component } from 'react';
import Data from '../PortfolioData.js'

// Components
import Nav from './Nav'
import Logo from './Logo';

// Styling
import '../Styles/Navbar.css'

// Data
const { contact } = Data
const githubUrl = contact.github;
const linkedinUrl = contact.linkedin

export class Navbar extends Component {

    render() {
        return (
            <div className='Navbar'>
                <div className='Logo-container'>
                    <Logo />
                </div>
                <Nav />
                <div className='Social'>
                    <a href={githubUrl} className='Link-decoration' target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github fa-4x"></i>
                    </a>
                    <a href={linkedinUrl} className='Link-decoration' target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in fa-4x"></i>
                    </a>
                </div>
            </div>
        )
    }
}

export default Navbar
