import React from "react";
import "./Menu.css";
import "font-awesome/css/font-awesome.min.css";
const Menu = () => {
	return (
		<nav className="navbar">
			<div className="navbar-logo">
				<a href="index2.html">
					<span>
						<i class="fas fa-trophy"></i>
					</span>
				</a>
			</div>
			<div className="menu-nav">
				<a href="/#">Home</a>
				<a href="/#">About</a>
				<a href="/#">Services</a>
				<a href="/#">Portfolio</a>
				<a href="/#">Contact</a>
			</div>
		</nav>
	);
};

export default Menu;
