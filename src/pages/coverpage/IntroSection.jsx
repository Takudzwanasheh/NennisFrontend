import "./cover.scss";
import React, { useState, useEffect } from "react";

import Slide1 from "../../assets/Slide (1).jpg";
import Slide2 from "../../assets/Slide (2).jpg";
import Slide3 from "../../assets/Slide (3).jpg";
import Slide4 from "../../assets/Slide (4).jpg";
import Slide5 from "../../assets/Slide (5).jpg";
import Slide6 from "../../assets/Slide (6).jpg";
import Slide7 from "../../assets/Slide (7).jpg";
import Slide8 from "../../assets/Slide (8).jpg";
import Slide9 from "../../assets/Slide (9).jpg";
import Slide10 from "../../assets/Slide (10).jpg";
import { NavLink } from "react-router-dom";

export default function IntroSection() {
	const slides = [
		Slide1,
		Slide2,
		Slide3,
		Slide4,
		Slide5,
		Slide6,
		Slide7,
		Slide8,
		Slide9,
		Slide10,
	];

	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prev) => (prev + 1) % slides.length);
		}, 5000); // Change slide every 3 seconds
		return () => clearInterval(interval);
	}, [slides.length]);

	return (
		<div className='CoverPage__content'>
			<div className='img'>
				{slides.map((slide, index) => (
					<img
						key={index}
						src={slide}
						alt={`Slide ${index + 1}`}
						className={`slideshow-image ${index === current ? "active" : ""}`}
					/>
				))}
			</div>
			<div className='absolute'>
				<h1>THE EXCLUSIVE AGENT</h1>
				<p>
					For marketing and selling of all minerals produced in Zimbabwe except
					gold and silver
				</p>
				<NavLink to={"/get_in_touch"}>
					<button className='QuickHelp'>Make A Deal</button>
				</NavLink>
			</div>
		</div>
	);
}
