import React from "react";
import "./profile.scss";
import { services } from "./Vennis";

export default function BusinessProfile() {
	return (
		<div className='business-profile'>
			<div className='business-profile-header'>
				<p className='ourbuz'>Our Business</p>
				<p>Our business is to develop new markets for Zimbabwean minerals</p>
			</div>
			<div className='gemstone-cards'>
				{services.map((services, index) => (
					<div className='gemstone-card' key={index}>
						<h2>{services.title}</h2>
						<img src={services.image} alt={services.name} />
						<p>{services.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}
