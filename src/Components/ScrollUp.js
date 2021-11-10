// Libraries
import React, { Component } from 'react'

// Styles
import '../Styles/ScrollUp.css'

export class ScrollUp extends Component {

    handleClick = () => {
        // find height of entire document
        let body = document.body;;
        let html = document.documentElement;

        let height = Math.max(body.scrollHeight, body.offsetHeight, 
            html.clientHeight, html.scrollHeight, html.offsetHeight);

        window.scrollBy({
            top: -height,
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
