import React from "react";
import "./contact.scss";
import Afrika from "../../assets/Afrikamap.png";
import { NavLink } from "react-router-dom";

export default function Contact() {
	const emailPage =
		"https://mail.google.com/mail/u/0/#inbox?compose=lqrsljcJBdTwXVMnplrbnnxvmRlSpKBZRhQlHwzNCjWTdzjDMMnBFldlCqhlJtRwcTPXmmtPVTkltHRSK";
	return (
		<div className='contact '>
			<div className='details'>
				<div className='left'>
					<NavLink to={"/get_in_touch"}>
						<button> Contact Us </button>
					</NavLink>
					<p>Direct Contact Details</p>
					<span>Whatsapp and Calls</span>
					<span> +263 772625855 </span>
					<span> +263 787876017 </span>
					<a href={emailPage} target='_blank' rel='noopener noreferrer'>
						vennisresources@gmail.com
					</a>
				</div>
				<div className='right'>
					<img src={Afrika} alt='Afrika' />
				</div>
			</div>
		</div>
	);
}
