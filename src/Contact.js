import React, { useState } from 'react';

const Contact = () => {
	const [value, setValue] = useState({
		name: '',
		email: '',
		message: '',
	});

	const { name, email, message } = value;

	return (
		<div className="contact section" id="Contact">
			<div className="container">
				<div className="section-head">
					<h2 className="text-center">Contact</h2>
				</div>
				<form action={`https://formspree.io/xaypydrg`} name="contact" method="POST" data-netlify="true">
					<div>
						<label>
							Your Name:{' '}
							<input
								value={name}
								type="text"
								name="name"
								required
								onChange={(event) => {
									setValue({ name: event.target.value });
								}}
							/>
						</label>
					</div>
					<div>
						<label>
							Your Email:{' '}
							<input
								value={email}
								type="email"
								name="email"
								required
								onChange={(event) => {
									setValue({ email: event.target.value });
								}}
							/>
						</label>
					</div>
					<div>
						<label>
							Message:{' '}
							<textarea
								value={message}
								name="message"
								required
								onChange={(event) => {
									setValue({ message: event.target.value });
								}}
							></textarea>
						</label>
					</div>
					<div>
						<button type="submit">Send</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
