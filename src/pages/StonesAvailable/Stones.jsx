import React from "react";
import "./stop.scss";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function Stones() {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		axios
			.get(
				"https://vennis-resources-cli-f26738574c30.herokuapp.com/vennisstones"
			)
			.then((response) => {
				setProducts(response.data);
			});
	});
	return (
		<div className='stones'>
			<h1 className='text-center'>Products</h1>
			<div className='stones__container'>
				{products.map((product, key) => (
					<div key={key} className='stones__card'>
						<img src={product.imageUrl} alt={product.name} />
						<h2>{product.StoneName}</h2>
						<p className='p'>
							{product.description && product.description.length > 50
								? product.description.slice(0, 40) + "..."
								: product.description}
						</p>
						<p style={{ fontWeight: "bold" }}>
							Price ${product.price} per carat{" "}
						</p>
						<NavLink to={`/stoneDetails/${product.id}`} className='right'>
							<button className='btn'>More details</button>
						</NavLink>
					</div>
				))}
			</div>
		</div>
	);
}
