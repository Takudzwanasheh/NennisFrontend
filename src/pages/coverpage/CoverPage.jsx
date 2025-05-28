import React from "react";
import About from "../../components/about/About";
import BusinessProfile from "../../components/OurBusiness/BusinessProfile";
import HomeElements from "../../components/Products/HomeElements";
import IntroSection from "./IntroSection";

import "./cover.scss";

export default function CoverPage() {
	return (
		<div className='CoverPage'>
			<IntroSection />
			<BusinessProfile />
			<About />
			<HomeElements />
		</div>
	);
}
