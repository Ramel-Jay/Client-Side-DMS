import React from 'react';
import Nav from "../NavigationBar/Nav";
import "./Home.css";
import { useState, useEffect } from 'react';
import image1 from "./image/imagenav.jpg"
import image2 from "./image/carousel1.jpg"
import image3 from "./image/carousel2.jpg"
import image4 from "./image/carousel3.jpg"

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
    
    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };
    
    const nextSlide = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

return (
    <div>
        <Nav/>
        <div className="slideshow-container">
            <img className="slideshow-image" src={images[currentIndex]} alt="slideshow" />
            <div className="btn-slideshow">
                <button onClick={prevSlide}>Previous</button>
                <button onClick={nextSlide}>Next</button>
            </div>
        </div>
    </div>
)
}

export default Home
