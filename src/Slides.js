import React from 'react';
import './Slides.css';
import screamingKidImage from './img/kid_screaming.png'; // Importing the image


export default function Slides() {
  return (
    <div className='pract'>
        <img src={screamingKidImage} height="50" width="175" alt="Kid Screaming" className='picture'/>
        <button className='button' id='seeButton'>See More</button>
    </div>
  )
}
