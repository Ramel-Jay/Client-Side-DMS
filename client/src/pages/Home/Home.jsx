import React from 'react';
import Nav from "../NavigationBar/Nav";
import "./Home.css";
import { useState, useEffect } from 'react';
import image1 from "./image/carousel1.png"
import image2 from "./image/carousel2.jpg"
import image3 from "./image/carousel3.jpg"
import image4 from "./image/carousel4.jpg"
import image5 from "./image/carousel5.png"
import Footer from "../Footer/footer"
import AOS from 'aos';
import 'aos/dist/aos.css';
import post1 from "./image/Image1.jpg";
import post2 from "./image/Image2.jpg";
import benefits from "./image/benefits.png";

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
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
        <><br></br><br></br><br></br></>
        <div>
            <img className="slideshow-image" src={images[currentIndex]} alt="slideshow"/>
        </div>

        <div className="intro">
            <h3 className="intro-header">LET'S CREATE A BETTER WORLD FOR EVERYONE!</h3>
            <p className="intro-body">2023 could be the year where a little gets clean water for the first time, or a destitute family can eat
             until they are full. You could help start a new year with hope – for the first time since they can remember. Choose to help a kababayan
             in need, choose to donate in ACLC Cares.
            </p>
            <h1 button class="donatebtn">DONATE NOW</h1>
        </div>

        <div className="body-container">
        <br></br>
        <h1 className='drivetitle'>RECENT DONATION DRIVE ACTIVITIES</h1>
            <div data-aos="fade-down-right" className="img-container">
                <img src={post1} className="img1"/>
                <p className="img-description">Last January 5, 2022, ACLC College of Tacloban sent relief goods to Sogod, Southern Leyte.</p>
            </div>
            <div data-aos="fade-down-left" className="img-container">
                <img src={post2} className="img1"/>
                <p className="img-description">ACLC College of Tacloban went to Tabangi, Southern Leyte to provide aid to the locals of the said place.</p>
            </div>
        </div>

        <div className="benefits">
            <h4>Your donations are always used in the best way possible.</h4>
            <p>Here in ACLC Cares, recepients of your donations benefit mostly from the following:</p>
            <img src={benefits}/>
        </div>



        
        <Footer/>
    </div>
)
}

export default Home
