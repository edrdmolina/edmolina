// Libraries
import React, { Component } from 'react';
import { v4 as uuid_v4 } from 'uuid';
// Components
import FilmPhoto from '../Components/FilmPhoto';
// Styles
import '../Styles/Photos.css';
// Data
import PortfolioData from '../PortfolioData';

export class Photos extends Component {
    render() {

        const filmPhotos = PortfolioData.filmPhotos.map(p => {
            return (
                <FilmPhoto {...p} key={uuid_v4()} />
            )
        })

        return (
            <div className='Photos'>
                <div className='Heading'>
                    <h1>Photos</h1>
                </div>
                <div className='Photos-container'>
                    {filmPhotos}
                </div>
            </div>
        )
    }
}

export default Photos
