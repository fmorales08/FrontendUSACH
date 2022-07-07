import React from "react";
import "./Footer.css";
import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
	return (
		<footer class="footer">
			<div className="footer-nav">
				<a href="/#">
					<i class="fa fa-instagram"></i>
				</a>
				<a href="/#">
					<i class="fab fa-linkedin-in"></i>
				</a>
				<a href="/#">Home</a>
				<a href="/#">FAQs</a>
				<a href="/#">About</a>
			</div>
		</footer>
	);
};

export default Footer;
