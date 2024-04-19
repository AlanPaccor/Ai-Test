import React from 'react';
import './Select.css';
import image1 from './img/image1.jpeg';
import image2 from './img/image1.jpeg';
import image3 from './img/image1.jpeg';
import image4 from './img/image1.jpeg';
import image5 from './img/image1.jpeg';
import image6 from './img/image1.jpeg';



export default function Select(){
    return (
        <body className='selectBody'>
            <div className='selectContainer'>
                <p className='bigSelect'>
                Do it all with
                </p>
                <p className='bigSelect'>
                WordPress.com
                </p>
                <p className='smallSelect'>
                Write, share, and reach an audience. Link, sell, and showcase your work. Anything, everything—all in one place.
                </p>
                <div className='selectContent'>
                    <div className='selectLinks'>
                        <a className='link1'>
                            Blog <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                        </a>
                        <a className='link2'>
                            Newsletter <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                        </a>
                        <a className='link3'>
                            Link In Bio <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                        </a>
                        <a className='link4'>
                            Video <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                        </a>
                        <a className='link5'>
                            Commerce <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                        </a>
                        <a className='link6'>
                            Course <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                        </a>
                    </div>
                    <div className='selectImages'>
                        <img src={image1} height="100%" width="100%" alt="Kid Screaming" className='picture'/>
                    </div>
                </div>
            </div>
        </body>
    )
    }