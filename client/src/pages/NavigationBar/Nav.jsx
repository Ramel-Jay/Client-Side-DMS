import React, { useState, useRef, useEffect } from 'react'
import "./Nav.css";
import { Link } from 'react-router-dom';
import aclc from "./Image/aclccares.png";
import { FaBars, FaTimes } from 'react-icons/fa';
import { GiReceiveMoney } from "react-icons/gi";
import { MdToys } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function Nav() {

    const [bars, setBars] = useState(true);
    const [times, setTimes] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef(null);

    const navigate = new useNavigate();

    const handleClickOutside = event => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };
    
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div>
            <nav>
                <img src={aclc} className="logo" onClick={() => navigate("/")}/>
                <div>
                <ul id="navbar" >
                        <li><a><Link to="/" className="active">Home</Link></a></li>
                        <li><a onClick={() => setIsOpen(true)}>Donate</a></li>
                        <li><a><Link to="/about">About</Link></a></li>
                </ul>
                {showNavbar && 
                    <ul id="side-navbar" >
                        <li><a href="index.html"><Link to="/" className="active">Home</Link></a></li>
                        <li><a onClick={() => setIsOpen(true)}>Donate</a></li>
                        <li><a><Link to="/about">About</Link></a></li>

                    </ul>
                }
                </div>
                <div id="mobile">
                    <i id="bar">
                        {bars && <FaBars onClick={() => {
                            setBars(false);
                            setTimes(true);
                            setShowNavbar(true);
                        }} />}
                        {times && <FaTimes onClick={() => {
                            setTimes(false);
                            setBars(true);
                            setShowNavbar(false);
                        }} />}
                    </i>
                </div>
            </nav>
            <div>
                {isOpen && (
                <div ref={modalRef} className="home-modal">
                    <div className="home-modal-content">
                        <div className="modal-close">
                            <button onClick={() => setIsOpen(false)}>
                                <FaTimes className="home-modal-close"/>
                            </button>
                        </div>
                        <div className="home-modal-header">
                            <h3>Select your donation type</h3>
                        </div>
                        <div className="home-modal-body">
                            <button onClick={() => navigate("/donateNow")}>
                                <GiReceiveMoney onClick={() => navigate("/donateNow")} className="home-cash-logo"/>
                                <p>Cash</p>
                            </button>
                            <button onClick={() => navigate("/inKind")}>
                                <MdToys onClick={() => navigate("/inKind")} className="home-cash-logo"/>
                                <p>Items</p>
                            </button>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default Nav