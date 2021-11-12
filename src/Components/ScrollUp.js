// Libraries
import React, { Component } from 'react'

// Styles
import '../Styles/ScrollUp.css'

export class ScrollUp extends Component {

    handleClick = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    render() {
        return (
            <div className='ScrollUp'>
                <i onClick={this.handleClick} className="fas fa-chevron-up fa-4x"></i>
            </div>
        )
    }
}

export default ScrollUp
