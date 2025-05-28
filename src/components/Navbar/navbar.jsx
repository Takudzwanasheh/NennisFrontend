import React, { useState, useEffect } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import vennis from "../../assets/Vennis.png";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
	const [showRightSection, setShowRightSection] = useState(false);

	const handleMenuClick = () => {
		setShowRightSection((prev) => !prev);
	};

	// Close right section when clicking outside
	useEffect(() => {
		if (!showRightSection) return;

		const handleClickOutside = (event) => {
			const navbar = document.querySelector(".navbar");
			if (navbar && !navbar.contains(event.target)) {
				setShowRightSection(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [showRightSection]);

	return (
		<div className={`navbar${showRightSection ? " scrolled" : ""}`}>
			<div className='left-section'>
				<MenuIcon fontSize='large' className='icon' onClick={handleMenuClick} />
				<h1>
					Vennis <img src={vennis} alt='Vennis logo' /> Resources
				</h1>
			</div>

			<div className={`right-section${showRightSection ? " show" : ""}`}>
				<NavLink to={"/upload"} className='cart'>
					<button>Add New Stones</button>
				</NavLink>
				<NavLink to={"/"} className='cart'>
					Home
				</NavLink>
				<button className='login'>Icon</button>
			</div>
		</div>
	);
}
