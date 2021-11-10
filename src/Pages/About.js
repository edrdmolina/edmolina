import React, { Component } from 'react'
import Resume from '../Images/Resume.pdf';
import '../Styles/About.css'

export class About extends Component {
    openPDF = () => window.open(Resume)

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
                    <div onClick={this.openPDF} className='Resume'>OPEN RESUME</div>
                    <h3>Skills</h3>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>Node JS</li>
                        <li>React</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>SQLite</li>
                    </ul>
                    <h3>Hobbies</h3>
                    <ul>
                        <li>
                            Volleyball
                            <p>
                                Being the sport I grew up playing. Volleyball taught me how to work as a team and what it means
                                to truly dedicate your time to achieving a common goal.
                            </p>
                        </li>
                        <li>
                            Photography
                            <p>
                                Only in recent years did I come across Photography. I started with an old 35mm film camera in order
                                to learn the basics. Til this day, shooting on film is still my preferred medium. Learning Photography
                                connected me with my creative side and taught me patience in finding the right shots.
                            </p>
                        </li>
                        <li>
                            Running
                            <p>
                                At the start of 2020 I set a goal to run a marathon that year. After one month of training
                                I was challenged by a friend to run the Miami Marathon. I am proud to say that although I was 
                                not physically ready, I completed my goal!
                            </p>
                        </li>
                    </ul>
                    
                </div>
                
            </div>
        )
    }
}

export default About
