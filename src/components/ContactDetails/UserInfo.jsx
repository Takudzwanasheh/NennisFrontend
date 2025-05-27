import React, { useRef } from "react";
import axios from "axios";
import "./contact.scss";

export default function UserInfo() {
	const formRef = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);

		axios
			.post(
				"https://vennis-resources-cli-f26738574c30.herokuapp.com/usercontact/contact",
				Object.fromEntries(formData.entries())
			)
			.then((response) => {
				console.log("It Worked", response.data);
				formRef.current.reset(); // Clear the form fields
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	return (
		<form className='Userinfo' onSubmit={handleSubmit} ref={formRef}>
			<div className='Details'>
				<div className='User'>
					<span>Username</span>
					<input
						placeholder='Enter Username'
						type='text'
						name='Username'
						required
					/>
				</div>
				<div className='User'>
					<span>Email</span>
					<input placeholder='Enter Email' type='email' name='Email' required />
				</div>
				<div className='User'>
					<span>Phone</span>
					<input placeholder='Phone (optional)' name='Phone' type='tel' />
				</div>
				<div className='User'>
					<span>Message</span>
					<textarea placeholder='Message' name='Message' required />
				</div>
			</div>
			<div className='button'>
				<button type='submit'>Send</button>
				{/* <span>we promise to contact you as soon as possible</span> */}
			</div>
		</form>
	);
}
