// Libraries
import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Data from '../PortfolioData.js'
// Styles
import '../Styles/Contact.css'



export class Contact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            emailCopied: false,
            phoneCopied: false,
        }
    }

    emailCopied = (e) => {
        setTimeout(() => {
            this.setState({ emailCopied: false })
        }, 3000);
    }
    phoneCopied = (e) => {
        setTimeout(() => {
            this.setState({ phoneCopied: false })
        }, 3000);
    }
    
    changeTextEnter = (e) => {
        e.target.innerHTML = 'Copy to clipboard';
    }
    changeTextLeaveEmail = (e) => {
        e.target.innerHTML = Data.contact.email;
    }
    changeTextLeavePhone = (e) => {
        e.target.innerHTML = Data.contact.phone;
    }

    changeTextGoToLink = (e) => {
        e.target.innerHTML = 'Go to link';
    }

    changeTextLeaveLinkedin = (e) => {
        e.target.innerHTML = 'LinkedIn'
    }


    render() {
        return (
            <div className='Contact'>
                <div className='Heading'>
                    <h1>Contact</h1>
                </div>
                <div className='Methods'>
                    <CopyToClipboard 
                        text='edrdmolina11@gmail.com' className='Button-style'
                        onCopy={() => this.setState({ emailCopied: true })}
                        
                    >
                        <span onClick={this.emailCopied}
                            onMouseEnter={this.changeTextEnter}
                            onMouseLeave={this.changeTextLeaveEmail}
                            >
                            {Data.contact.email}
                        </span>
                    </CopyToClipboard>
                    <div 
                        className='Button-style'
                        onMouseEnter={this.changeTextGoToLink}
                        onMouseLeave={this.changeTextLeaveLinkedin}>
                        <a href='/' >
                            LinkedIn
                        </a>
                    </div>
                    <CopyToClipboard 
                        text='7865672231' onCopy={() => this.setState({ phoneCopied: true })}
                    >
                        <span onClick={this.phoneCopied}
                            onMouseEnter={this.changeTextEnter}
                            onMouseLeave={this.changeTextLeavePhone}
                            className='Button-style'>
                            {Data.contact.phone}
                        </span>
                    </CopyToClipboard>
                </div>
            </div>
        )
    }
}

export default Contact
