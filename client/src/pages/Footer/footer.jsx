import React from 'react'
import "./footer.css";
import Logo from "./Image/ACLC TAC LOGO.png";
import { Link } from 'react-router-dom';

function footer() {
    return (
        <footer class="footer-distributed">

			<div class="footer-left">

				<img src={Logo} className="footer-logo" />

				<p class="footer-links">
					<a href="#" class="link-1"><Link to="/">Home</Link></a>
				
					<a href="#"><Link to="/about">About</Link></a>
				</p>

				<p class="footer-company-name">Capstone Project for ACLC College of Tacloban</p>
			</div>

			<div class="footer-center">

				<div>
					<p><span>352 Real St. Tacloban City</span> 6500 Tacloban City, Philippines</p>
				</div>

				<div>
					<p>0921 636 4057</p>
				</div>

				<div>
					<p>aclclangmalakas@gmail.com</p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
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