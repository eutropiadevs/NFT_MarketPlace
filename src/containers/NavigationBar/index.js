import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import "./index.scss";

const Navbar = () => {
	 const [isOpen, setIsOpen] = useState(false);

		function toggleMenu() {
			setIsOpen(!isOpen);
		}
	return (
		<>
			<nav className="navbar">
				<div className="navbar-brand">
					<a href="/">Logo</a>
					<button className="navbar-toggle" onClick={toggleMenu}>
						<span className="navbar-toggle-icon"></span>
					</button>
				</div>
				<div>
					<ul className={`navbar-menu ${isOpen ? "is-open navbar-nav" : "navbar-nav"}`}>
						<li className="nav-item">
							<a href="/">Home</a>
						</li>
						<li className="nav-item">
							<a href="/marketPlace">MarketPlace</a>
						</li>
						<li className="nav-item">
							<a href="/creator">Creator</a>
						</li>
						<li className="nav-item">
							<a href="/connect">Connect</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
