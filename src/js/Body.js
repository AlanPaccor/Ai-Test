import React, { useRef, useEffect, useState } from "react";
import '../css/Body.css';
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
            <a class="box" href="test" target="_blank">
                <span></span>
                <h2>Get Started</h2>
            </a>
            <p href="#" className="Slogan">
               Learn To Create. Create To Learn
            </p>
            <div className="gradient">
                <span className="color-1"></span>
                <span className="color-2"></span>
                <span className="color-3"></span>
                <span className="color-4"></span>
                <span className="color-5"></span>
            </div>
        </div>
      );
}

export default Body;