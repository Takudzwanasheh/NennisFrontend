import React from "react";
import Background2 from "../../assets/vennisBackground2.mp4";
import Background from "../../assets/vennisBackground.mp4";
import About from "../../components/about/About";
import BusinessProfile from "../../components/OurBusiness/BusinessProfile";
import HomeElements from "../../components/Products/HomeElements";
import IntroSection from "./IntroSection";

import "./cover.scss";

export default function CoverPage() {
	const videos = [Background, Background2];

	const randomVideo = videos[Math.floor(Math.random() * videos.length)];

	return (
		<div className='CoverPage'>
			<IntroSection />
			<BusinessProfile />
			<About />
			<HomeElements />
		</div>
	);
}
