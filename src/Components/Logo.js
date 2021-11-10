import React, { Component } from 'react'
// Images
import Logo2 from '../Images/Logo2.png';
// Styling
import '../Styles/Logo.css'

export class Logo extends Component {
    render() {
        return (
            <img src={Logo2} alt='Logo' className='Logo' />
        )
    }
}

export default Logo
