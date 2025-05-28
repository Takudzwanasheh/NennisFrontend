import React, { useRef } from "react";
import "./add.scss";
import Navbar from "../../components/Navbar/navbar";
import axios from "axios";

export default function Addproduct() {
	const formRef = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();

		const formData = new FormData(event.target);

		axios
			.post(
				"https://vennis-resources-cli-f26738574c30.herokuapp.com/vennisstones",
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
		<div className='container'>
			<Navbar />
			<form
				className='Userinfo'
				onSubmit={handleSubmit}
				ref={formRef}
				autoComplete='off'
			>
				<div className='Details'>
					<div className='User'>
						<span>Stone Name</span>
						<input
							placeholder='Enter Stone Name'
							type='text'
							name='StoneName'
							required
						/>
					</div>
					<div className='User'>
						<span>Image URL</span>
						<input
							placeholder='Enter Image URL'
							type='text'
							name='imageUrl'
							pattern='https?://.*'
							title='Please enter a valid URL starting with http or https'
							required
						/>
					</div>
					<div className='User'>
						<span>Location</span>
						<input placeholder='Location' name='Location' required />
					</div>
					<div className='User'>
						<span>Price</span>
						<input placeholder='Price' name='price' type='number' required />
					</div>
					<div className='User'>
						<span>Description</span>
						<textarea
							placeholder='Stone Description'
							name='description'
							required
						/>
					</div>
				</div>
				<div className='button'>
					<button type='submit'>Upload</button>
				</div>
			</form>
		</div>
	);
}
