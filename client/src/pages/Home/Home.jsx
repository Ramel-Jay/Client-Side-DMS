import React from 'react';
import Nav from "../NavigationBar/Nav";
import "./Home.css";
import { useState, useEffect } from 'react';
import image1 from "./image/carousel1.jpg"
import image2 from "./image/carousel2.jpg"
import image3 from "./image/carousel3.jpg"
import image4 from "./image/carousel4.jpg"
import Footer from "../Footer/footer"

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        image1,
        image2,
        image3,
        image4,
    ];

    useEffect(() => {
        let intervalId = null;

            intervalId = setInterval(() => {
                setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
            }, 5000);
            return () => clearInterval(intervalId);

    }, [currentIndex]);

return (
    <div>
        <Nav/>
        <div className="slideshow-container">
            <img className="slideshow-image" src={images[currentIndex]} alt="slideshow"/>
        </div>
        <div className="intro">
            <h3 className="intro-header">Let's Create Better world for everyone</h3>
            <p className="intro-body">Too often we underestimate the power of a giving, sharing, a listening ear, 
                or the smallest act of caring, all of which have the potential to turn a life around, a potential to 
                help not just one person but the whole world.
            </p>
        </div>
        <Footer/>
    </div>
)
}

export default Home
