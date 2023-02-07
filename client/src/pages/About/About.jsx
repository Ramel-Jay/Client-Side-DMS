import React from 'react'
import "./About.css"
import Nav from "../NavigationBar/Nav"
import Ramel from "./Image/ramel.jpg"
import Kim from "./Image/kim.jpg"
import Andrei from "./Image/andrei.jpg"
import Bjorn from "./Image/bjorn.jpg"
import Mel from "./Image/mel.jpg"
import Footer from "../Footer/footer";

function About() {

return (
    <div>
        <Nav/>
        <p className="about-header">ABOUT</p>

        <div className="about-container">
            <div className="mission-container">
                <div className="mission">
                    <h2 className="mission-header">MISSION</h2>
                    <p>To serve as an effective, hassle free, donation platform for ACLC's donation drive 
                        and charity works, catering to donators all over the world and helping individuals 
                        that are in need.
                    </p>
                </div>
            </div>

            <div className="vision-container">
                <div className="vision">
                    <h2 className="mission-header">VISION</h2>
                    <p>To become AMA's main platform for its donation drive and charity works. To make a great 
                        impact to everyone that receive aid and support through this system, seeing them happy,
                        triumphant, and successful in life.
                    </p>
                </div>
            </div>
        </div>

        <div className='team'>
            <div className="team-header-container">
                <h1 className="team-header">OUR TEAM</h1>
                <p>Below are the individuals behind this online donation system.</p>
            </div>
        
            <div className="gallery">
            <a target="_blank" href={Ramel}>
                <img src={Ramel} alt="Ramel"></img>
            </a>
            <div className="desc">
                <h6>Ramel Jay O. Cuña</h6>
                <p>Project Lead Developer</p>
                <p>rameljay15@gmail.com</p>
            </div>
            </div>

            <div className="gallery">
            <a target="_blank" href={Kim}>
                <img src={Kim} alt="Kim"></img>
            </a>
            <div className="desc">
                <h6>Kim L. Magbulugtong</h6>
                <p>Research Leader</p>
                <p>kimpulga21@gmail.com</p>
            </div>
            </div>

            <div className="gallery">
            <a target="_blank" href={Andrei}>
                <img src={Andrei} alt="Andrei"></img>
            </a>
            <div className="desc">
                <h6>Andrei Christian N. Zabala</h6>
                <p>Project Lead Developer</p>
                <p>andreichristianzabala@gmail.com</p>
            </div>
            </div>

            <div className="gallery">
            <a target="_blank" href={Bjorn}>
                <img src={Bjorn} alt="Bjorn"></img>
            </a>
            <div className="desc">
                <h6>Bjorn Farinelli L. Orgen</h6>
                <p>Developer</p>
                <p>bjornfarinelli@gmail.com</p>
            </div>
            </div>

            <div className="gallery">
            <a target="_blank" href={Mel}>
                <img src={Mel} alt="Mel"></img>
            </a>
            <div className="desc">
                <h6>Melhebbford A. Bareja</h6>
                <p>Researcher</p>
                <p>barejamel1@gmail.com</p>
            </div>
            </div>
        </div>
        <Footer/>
    </div>
 
)
}

export default About
