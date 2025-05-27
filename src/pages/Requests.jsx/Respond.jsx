import React, { useEffect, useState } from "react";
import "./respond.scss";
import Navbar from "../../components/Navbar/navbar";
import axios from "axios";

export default function Respond() {
	const [requests, setRequest] = useState([]);
	useEffect(() => {
		axios
			.get(
				"https://vennis-resources-cli-f26738574c30.herokuapp.com/usercontact/contact"
			)
			.then((response) => {
				setRequest(response.data);
			});
	});
	return (
		<div className='userRequests'>
			<Navbar />
			<div className='requestContainer'>
				{requests.map((Request, key) => (
					<div key={key} className='Request'>
						<span className='Username'>From: {Request.Username}</span>
						<p>{Request.Message}</p>
						<span>Email: {Request.Email}</span>
						<span>Phone: {Request.Phone}</span>
					</div>
				))}
			</div>
		</div>
	);
}
