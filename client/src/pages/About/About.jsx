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
        <br></br><p className="aboutdesign">ABOUT US</p>

        <h2>Mission:</h2>
            <p>To serve as an effective, hassle free, donation platform for ACLC's donation drive 
                and charity works, catering to donators all over the world and helping individuals 
                that are in need.</p>
            <br></br>

        <h2>Vision:</h2>
            <p>To become AMA's main platform for its donation drive and charity works. To make a great
                 impact to everyone that receive aid and support through this system, seeing them happy,
                  triumphant, and successful in life.</p>
            <br></br>

        <div className='team'>
        <h1 style={{ textAlign:"center" }}>OUR TEAM</h1>
        <p style={{ textAlign:"center" }}>Below are the individuals behind this online donation system.</p>
        
            <div class="gallery">
            <a target="_blank" href={Ramel}>
                <img src={Ramel} alt="Ramel" width="200" height="200"></img>
            </a>
            <div class="desc">
                <h6>Ramel Jay O. Cuña</h6>
                <p>Email: rameljay15@gmail.com</p>
            </div>
            </div>

            <div class="gallery">
            <a target="_blank" href={Kim}>
                <img src={Kim} alt="Kim" width="200" height="200"></img>
            </a>
            <div class="desc">
                <h6>Kim L. Magbulugtong</h6>
                <p>Email: kimpulga21@gmail.com</p>
            </div>
            </div>

            <div class="gallery">
            <a target="_blank" href={Andrei}>
                <img src={Andrei} alt="Andrei" width="200" height="200"></img>
            </a>
            <div class="desc">
                <h6>Andrei Christian N. Zabala</h6>
                <p>Email: andreichristianzabala@gmail.com</p>
            </div>
            </div>

            <div class="gallery">
            <a target="_blank" href={Bjorn}>
                <img src={Bjorn} alt="Bjorn" width="200" height="200"></img>
            </a>
            <div class="desc">
                <h6>Bjorn Farinelli L. Orgen</h6>
                <p>Email: bjornfarinelli@gmail.com</p>
            </div>
            </div>

            <div class="gallery">
            <a target="_blank" href={Mel}>
                <img src={Mel} alt="Mel" width="200" height="200"></img>
            </a>
            <div class="desc">
                <h6>Melhebbford A. Bareja</h6>
                <p>Email: barejamel1@gmail.com</p>
            </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
 
)
}

export default About
