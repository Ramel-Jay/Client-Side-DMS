import React from 'react'
import "./footer.css";
import Logo from "./Image/ACLC TAC LOGO.png";
import { Link } from 'react-router-dom';

function footer() {
    return (
        <footer className="footer-distributed">

			<div className="footer-left">

				<img src={Logo} className="footer-logo" />

				<p className="footer-links">
					<a href="#" className="link-1"><Link to="/">Home<br></br></Link></a>
				
					<a href="#" className="link-1"><Link to="/about">About</Link></a>
				</p>

				<p className="footer-company-name">Capstone Project for ACLC College of Tacloban</p>
			</div>

			<div className="footer-center">

				<div>
					<p><span>352 Real St. Tacloban City</span> 6500 Tacloban City, Philippines</p>
				</div>

				<br/>

				<div>
					<p>0921 636 4057</p>
				</div>

				<br/>

				<div>
					<p>admissionoffice_aclctacloban@yahoo.com</p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About ACLC</span>
					Established in 1986, ACLC stands for AMA Computer Learning Center, as it was originally a computer training center 
					offering skill-based courses on computer hardware and software. To date, ACLC remain to be a popular choice for TESDA 
					Short Courses in the Philippines.
				</p>

			</div>

		</footer>
    )
}

export default footer