import React, { useRef } from "react";
import './Body.css';
import Spline from '@splinetool/react-spline';


function Body() {

    return (
        <div className="container">
            <div className="spline-container">
                <div className="spline">
                <Spline
                    scene="https://prod.spline.design/5QFWS-fiER-Favtx/scene.splinecode"
                />
                </div>
                <div className="overlay"></div>
            </div>
            <a href="#" className="TryFree">
               Get Started
            </a>
            <p href="#" className="Slogan">
               Learn To Create. Create To Learn
            </p>
        </div>
      );
}

export default Body;