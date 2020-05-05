import React from 'react';
import logo from './main-bg.jpg';

const Banner = () => {
	return (
		<div className="banner">
			<img alt="" src={logo} objectFit="cover" objectPosition="50% 50%" />
			<div className="container">
				<div className="banner-details">
					<h1>I'm Swapnadeep.</h1>
					<ul className="sub-data">
						<li>Developer</li>
						<li>Student</li>
						<li>Designer</li>
					</ul>
					<span>View all of my projects here...</span>
				</div>
			</div>
		</div>
	);
};

export default Banner;
