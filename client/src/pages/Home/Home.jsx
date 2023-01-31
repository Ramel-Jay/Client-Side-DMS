import React from 'react';
import Nav from "../NavigationBar/Nav";
import "./Home.css";
import { useState, useEffect } from 'react';
import image1 from "./image/carousel1.jpg"
import image2 from "./image/carousel2.jpg"
import image3 from "./image/carousel3.jpg"
import image4 from "./image/carousel4.jpg"
import Footer from "../Footer/footer"
import AOS from 'aos';
import 'aos/dist/aos.css';
import post1 from "./image/Image1.jpg";
import post2 from "./image/Image2.jpg";

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

    useEffect(() => {
        AOS.init();
    }, [])

return (
    <div>
        <Nav/>
        <div className="slideshow-container">
            <img className="slideshow-image" src={images[currentIndex]} alt="slideshow"/>
        </div>
        <div className="intro">
            <h3 className="intro-header">Let's create a better world for everyone!</h3>
            <p className="intro-body">Too often we underestimate the power of giving, sharing, a listening ear, 
                or the smallest act of caring, all of which have the potential to turn a life around, a potential to 
                help not just one person but the whole world.
            </p>
        </div>
        <div className="body-container">
            <div data-aos="fade-down-right" className="img-container">
                <img src={post1} className="img1"/>
                <p className="img-description">Last January 5, 2022, ACLC College of Tacloban sent relief goods to Sogod, Southern Leyte.</p>
            </div>
            <div data-aos="fade-down-left" className="img-container">
                <img src={post2} className="img1"/>
                <p className="img-description">ACLC College of Tacloban went to Tabangi, Southern Leyte to provide aid to the locals of the said place.</p>
            </div>
        </div>
        <Footer/>
    </div>
)
}

export default Home
