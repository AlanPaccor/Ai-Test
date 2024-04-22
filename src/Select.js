import React, { useState, useEffect } from 'react';
import './Select.css';
import image1 from './img/image1.jpeg';
import image2 from './img/image2.jpeg';
import image3 from './img/image3.jpeg';
import image4 from './img/image4.jpeg';
import image5 from './img/image5.jpeg';
import image6 from './img/image6.jpeg';
import Learn from './img/Learn.jpg'

export default function Select() {
    const [hoveredLink, setHoveredLink] = useState(null);
    const [learnImageVisible, setLearnImageVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLearnImageVisible(true);
        }, 100); // Delay for 1 second
        return () => clearTimeout(timer);
    }, []);

    const handleImageHover = (imageNumber) => {
        setHoveredLink(imageNumber);
    };

    const handleImageLeave = () => {
        setHoveredLink(null);
    };
    return (
        <body className='selectBody'>
            <div className='selectContainer'>
                <p className='bigSelect'>Do it all with</p>
                <p className='bigSelect'>WordPress.com</p>
                <p className='smallSelect'>Write, share, and reach an audience. Link, sell, and showcase your work. Anything, everything—all in one place.</p>
                <div className='selectContent'>
                    <div className='selectLinks'>
                        <a
                            href='youtube.com'
                            className='link1'
                            onMouseEnter={() => setHoveredLink(1)}
                            onMouseLeave={() => setHoveredLink(null)}
                        >
                            Blog
                        </a>
                        <a
                            className='link2'
                            onMouseEnter={() => setHoveredLink(2)}
                            onMouseLeave={() => setHoveredLink(null)}
                        >
                            Newsletter
                        </a>
                        <a
                            className='link3'
                            onMouseEnter={() => setHoveredLink(3)}
                            onMouseLeave={() => setHoveredLink(null)}
                        >
                            Link in Bio
                        </a>
                        <a
                            className='link4'
                            onMouseEnter={() => setHoveredLink(4)}
                            onMouseLeave={() => setHoveredLink(null)}
                        >
                            Video
                        </a>
                        <a
                            className='link5'
                            onMouseEnter={() => setHoveredLink(5)}
                            onMouseLeave={() => setHoveredLink(null)}
                        >
                            Commerce
                        </a>
                        <a
                            className='link6'
                            onMouseEnter={() => setHoveredLink(6)}
                            onMouseLeave={() => setHoveredLink(null)}
                        >
                            Course
                        </a>
                        {/* Add other links similarly */}
                    </div>
                    <div className='selectImages'>
                    {learnImageVisible && <img src={Learn} height="100%" width="100%" alt="Learn" id='images' />}
                        <img src={image1} height="100%" width="100%" alt="1" id='images' className={hoveredLink === 1 ? 'picture active' : 'selectPictures'} />
                        <img src={image2} height="100%" width="100%" alt="2" id='images' className={hoveredLink === 2 ? 'picture active' : 'selectPictures'} />
                        <img src={image3} height="100%" width="100%" alt="3" id='images' className={hoveredLink === 3 ? 'picture active' : 'selectPictures'} />
                        <img src={image4} height="100%" width="100%" alt="4" id='images' className={hoveredLink === 4 ? 'picture active' : 'selectPictures'} />
                        <img src={image5} height="100%" width="100%" alt="5" id='images' className={hoveredLink === 5 ? 'picture active' : 'selectPictures'} />
                        <img src={image6} height="100%" width="100%" alt="6" id='images' className={hoveredLink === 6 ? 'picture active' : 'selectPictures'} />
                        {/* Add other images similarly */}
                    </div>
                </div>
            </div>
        </body>
    )
}
