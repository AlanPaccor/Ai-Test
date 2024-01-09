import React, { useEffect } from "react";
import './Works.css';
import Aos from "aos";
import 'aos/dist/aos.css'

function Works() { 
    useEffect(()=> {
        Aos.init({duration: 1500})
    }, [])
  return (
    <div>
        <div className="works-container">
        <h1 className="works-title" data-aos='zoom-in'>How It Works</h1>

        <div className="works-content">
            <div className="works-image"data-aos='fade-right'>
            <img src="exampleImage.jpg" alt="How It Works" />
            </div>

            <div className="works-details">
            <h2 className="works-image-title"data-aos='zoom-in'>Fillout</h2>
            <p className="works-image-description"data-aos='zoom-in'>
                This is a brief description of the image and how it works.
                Add more details here as needed.
            </p>
            </div>
        </div>
        </div>
        <div className="works-container2">
            <div className="works-content2">
                <div className="works-details2">
                <h2 className="works-image-title2"data-aos='zoom-in'>Fillout</h2>
                <p className="works-image-description2"data-aos='zoom-in'>
                    This is a brief description of the image and how it works.
                    Add more details here as needed.
                </p>
                </div>

                <div className="works-image2"data-aos='fade-left'>
                <img src="exampleImage.jpg" alt="How It Works" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Works;
