import React, { useEffect, useState } from "react";
import "./stop.scss";
import axios from "axios";
import { useParams, NavLink } from "react-router-dom";

export default function ProductDetails() {
	const [products, setProducts] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		axios
			.get(
				"https://vennis-resources-cli-f26738574c30.herokuapp.com/vennisstones"
			)
			.then((response) => {
				setProducts(response.data);
			});
	}, []); // Add dependency array to avoid infinite requests

	const product = products.find((product) => product.id === parseInt(id));

	if (!product) {
		return <div>Loading...</div>;
	}

	return (
		<div className='Stone'>
			<div className='left'>
				<img src={product.imageUrl} alt={product.StoneName} />
			</div>
			<div className='right'>
				<h2>{product.StoneName}</h2>
				<p className='description'>{product.description}</p>
				<p>Found in {product.Location}</p>
				{/* <p style={{ fontWeight: "bold" }}>${product.price} per carat</p> */}

				<NavLink to={"/get_in_touch"}>
					<button className='Intirested'> Inquire </button>
				</NavLink>
				<NavLink to={"/availableStones"} className='right'>
					<button className='btn'>View All</button>
				</NavLink>
			</div>
		</div>
	);
}
