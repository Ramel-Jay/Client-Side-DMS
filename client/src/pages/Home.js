import React from 'react';
import Header from '../Image/imgHeader.jpg';

function Home() {
return (
    <div className="homeBody">
        <img  id="imgHeader" src={Header} alt="Nav" />
        <button className="btnDonateModal">Donate Now</button>
    </div>
)
}

export default Home
