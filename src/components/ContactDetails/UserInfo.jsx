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

	const [loading, setLoading] = React.useState(false);

	const [disableButton, setDisableButton] = React.useState(false);

	return (
		<form
			className='Userinfo'
			onSubmit={async (e) => {
				if (!loading && !disableButton) {
					setLoading(true);
					setDisableButton(true);
					await handleSubmit(e);
					setLoading(false);
					setTimeout(() => setDisableButton(false), 3000); // 3 seconds
				}
			}}
			ref={formRef}
		>
			<div className='Details'>
				<div className='User'>
					<span>Username</span>
					<input
						placeholder='Enter Username'
						type='text'
						name='Username'
						required
						disabled={loading}
					/>
				</div>
				<div className='User'>
					<span>Email</span>
					<input
						placeholder='Enter Email'
						type='email'
						name='Email'
						required
						disabled={loading}
					/>
				</div>
				<div className='User'>
					<span>Phone</span>
					<input
						placeholder='Phone (optional)'
						name='Phone'
						type='tel'
						disabled={loading}
					/>
				</div>
				<div className='User'>
					<span>Message</span>
					<textarea
						placeholder='Message'
						name='Message'
						required
						disabled={loading}
					/>
				</div>
				<div className='User'>
					<span>Attach File</span>
					<input
						placeholder='Message'
						type='file'
						accept='.pdf,.doc,.docx,.jpg,.jpeg,.png'
						name='file'
						required
						disabled={loading}
					/>
				</div>
			</div>
			<div className='button'>
				<button type='submit' disabled={loading || disableButton}>
					{loading ? "Sending..." : "Send"}
				</button>
				<span style={{ fontSize: "13px" }}>
					we promise to contact you as soon as possible
				</span>
			</div>
		</form>
	);
}
