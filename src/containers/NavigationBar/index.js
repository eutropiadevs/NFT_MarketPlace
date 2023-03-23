import React, { useState } from "react";
import Modal from "../Modal";
// import { NavLink } from "react-router-dom";
import "./index.scss";

const Navbar = () => {
	 const [isOpen, setIsOpen] = useState(false);
	const [activeButton, setActiveButton] = useState("home");
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
					<ul
						className={`navbar-menu ${
							isOpen ? "is-open navbar-nav" : "navbar-nav"
						}`}
					>
						<li
							onClick={() => setActiveButton("home")}
							className={
								activeButton === "home" ? "active nav-item" : "nav-item"
							}
						>
							<a href="/">Home</a>
						</li>
						<li
							onClick={() => setActiveButton("marketPlace")}
							className={
								activeButton === "marketPlace" ? "active nav-item" : "nav-item"
							}
						>
							<a href="/marketPlace">MarketPlace</a>
						</li>
						<li
							onClick={() => setActiveButton("creator")}
							className={
								activeButton === "creator" ? "active nav-item" : "nav-item"
							}
						>
							<a href="/creator">Creator</a>
						</li>
						<li>
							<Modal />
						</li>
					</ul>
				</div>
				{/* <div>
					<Modal />
				</div> */}
			</nav>
		</>
	);
};

export default Navbar;
