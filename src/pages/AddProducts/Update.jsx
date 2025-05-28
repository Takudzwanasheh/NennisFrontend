import React, { useRef, useEffect, useState } from "react";
import "./add.scss";
import Navbar from "../../components/Navbar/navbar";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function UpdateProduct() {
	const { id } = useParams();
	const formRef = useRef(null);
	const [formValues, setFormValues] = useState({
		StoneName: "",
		imageUrl: "",
		Location: "",
		price: "",
		description: "",
	});

	useEffect(() => {
		// Fetch existing product data
		axios
			.get(
				`https://vennis-resources-cli-f26738574c30.herokuapp.com/vennisstones/${id}`
			)
			.then((response) => {
				setFormValues(response.data);
			})
			.catch((error) => {
				console.error("Error fetching product:", error);
			});
	}, [id]);

	const handleChange = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		axios
			.patch(
				`https://vennis-resources-cli-f26738574c30.herokuapp.com/vennisstones/${id}`,
				formValues
			)
			.then((response) => {
				console.log("Update successful", response.data);
			})
			.catch((error) => {
				console.error("Error updating:", error);
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
							value={formValues.StoneName}
							onChange={handleChange}
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
							value={formValues.imageUrl}
							onChange={handleChange}
							required
						/>
					</div>
					<div className='User'>
						<span>Location</span>
						<input
							placeholder='Location'
							name='Location'
							value={formValues.Location}
							onChange={handleChange}
							required
						/>
					</div>
					<div className='User'>
						<span>Price</span>
						<input
							placeholder='Price'
							name='price'
							type='number'
							value={formValues.price}
							onChange={handleChange}
							required
						/>
					</div>
					<div className='User'>
						<span>Description</span>
						<textarea
							placeholder='Stone Description'
							name='description'
							value={formValues.description}
							onChange={handleChange}
							required
						/>
					</div>
				</div>
				<div className='button'>
					<button type='submit'>Update</button>
				</div>
			</form>
		</div>
	);
}
