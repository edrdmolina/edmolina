import React, { Component } from 'react';
import Resume from '../Images/Resume.pdf';
import CS50xCert from '../Images/CS50xCertificate.pdf';
import WebDeveloper from '../Images/TheWebDeveloperColtSteeleCERT.pdf';
import BootStrap4 from '../Images/BOOTSTRAP4COLT-STEELECERT.pdf';
import ResponsiveWebDesign from '../Images/fCC-ResponsiveWebDesign.pdf';
import JSAlgo from '../Images/fCC-JSAlgo.pdf';
import FrontEndLibraries from '../Images/fCC-FrontendLibraries.pdf';
import '../Styles/About.css'

export class About extends Component {
    openResume = () => window.open(Resume);
    openCS50xCert = () => window.open(CS50xCert);
    openWebDeveloper = () => window.open(WebDeveloper);
    openBootStrap4 = () => window.open(BootStrap4);
    openResponsiveWebDesign = () => window.open(ResponsiveWebDesign);
    openJSAlgo = () => window.open(JSAlgo);
    openFrontEndLibraries = () => window.open(FrontEndLibraries);

    render() {
        return (
            <div className='About'>
                <div className='Typewriter'>
                    <h1>Hi, my name is Eduardo Molina.</h1>
                </div>
                <div className='Reveal'>
                    <p>
                        After working in Aviation Maintenance for over 6 years I decided to take on a new challenge.
                        With an existing interest in creativity and engineering, I realized I can contribute to a 
                        field that delivers solutions that grow businesses, automate complex tasks and provides data to the masses.
                    </p>
                    <div onClick={this.openResume} className='Resume'>OPEN RESUME</div>
                    <div className='skills_certs'>
                        <div className='list'>
                            <h3>Certificates</h3>
                            <ul id='certificates'>
                                <li onClick={this.openCS50xCert}>
                                    CS50x by David J. Malan
                                </li>
                                <li onClick={this.openWebDeveloper}>
                                    The Web Developer Bootcamp 2021 by Colt Steele
                                </li>
                                <li onClick={this.openBootStrap4}>
                                    The Bootstrap 4 Bootcamp by Colt Steele
                                </li>
                                <li onClick={this.openResponsiveWebDesign}>
                                    Responsive Web Design by freeCodeCamp
                                </li>
                                <li onClick={this.openJSAlgo}>
                                    JavaScript Algorithms and Data Structures by freeCodeCamp
                                </li>
                                <li onClick={this.openFrontEndLibraries}>
                                    Front End Development Libraries by freeCodeCamp
                                </li>
                            </ul>
                        </div>
                        <div className='list'>
                            <h3>Skills</h3>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript</li>
                                <li>Node JS</li>
                                <li>React</li>
                                <li>Express</li>
                                <li>MongoDB</li>
                                <li>SQLite</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default About
