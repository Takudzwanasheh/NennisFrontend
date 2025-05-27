import React, { useEffect, useState } from "react";
import "./products.scss";
import { Link, NavLink } from "react-router-dom";
// import { products } from "./Data";
import axios from "axios";

export default function HomeElements() {
	// const email = "vennisresources@gmail.com";
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
		<div className='products'>
			<div className='header'>
				<div className='left'>
					<span>Our Products</span>

					<p>
						Here is a selection of all the minerals in stock that we are
						offering
					</p>
				</div>
				<div className='right'>
					<NavLink to={"/availableStones"} className='right'>
						<button className='btn'>View All</button>
					</NavLink>
				</div>
			</div>
			<div className='Products'>
				{products.slice(0, 3).map((product) => (
					<div className='product' key={product.StoneName}>
						<img src={product.imageUrl} alt={product.StoneName} />
					</div>
				))}
			</div>
		</div>
	);
}
