import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import '../Styles/Nav.css'

export class Nav extends Component {
    handleClick = () => {
        window.scrollBy({
            top: window.innerHeight,
            left: 0,
            behavior: 'smooth'
        });
    }

    render() {
        return (
            <div className='Nav'>
                <div className='name-container'>
                    <h1>Eduardo Molina</h1>
                </div>
                <div className='subtitle-container'>
                    <h3>Web Developer</h3>
                </div>
                <div className='links'>
                    <NavLink onClick={this.handleClick} activeClassName='active-link' className='link' to='/about'>About</NavLink>
                    <NavLink onClick={this.handleClick} activeClassName='active-link' className='link' to='/projects'>Projects</NavLink>
                    <NavLink onClick={this.handleClick} activeClassName='active-link' className='link' to='/photos'>Photos</NavLink>
                    <NavLink onClick={this.handleClick} activeClassName='active-link' className='link' to='/contact'>Contact</NavLink>
                </div>
            </div>
        )
    }
}

export default Nav


