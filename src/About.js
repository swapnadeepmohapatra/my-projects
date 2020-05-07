import React from 'react';
import dp from './dp.jpg';

const About = () => (
	<div className="about section" id="About">
		<div className="abt-container">
			<div className="about-main">
				<div className="left col-md-5 col-lg-4 mb-3">
					<img src={dp} style={{ height: 300, width: 300, marginRight: 20 }} alt="Profile" />
				</div>
				<div className="left col-md-7 col-lg-8">
					<div className="about-details">
						<span className="name">My Name is Swapnadeep.</span>
						<h2 className="sub-position">I'm a Full Stack Developer .</h2>
						<ul className="details">
							<li>
								<strong>Full Name</strong>
								<p>Swapnadeep Mohapatra</p>
							</li>
							<li>
								<strong>Tech Stack</strong>
								<ul
									style={{
										paddingLeft: 0,
										display: 'flex',
										flexDirection: 'column',
									}}
								>
									<li>
										<p>JavaScript, Android (Java), React Native, React.js</p>
									</li>
									<li>
										<p>Node.js, Express.js, IoT, RaspberryPi, Arduino</p>
									</li>
									<li>
										<p>Python, HTML, CSS, QBasic</p>
									</li>
								</ul>
							</li>
							{/* <li>
								<strong style={{ color: '#ffffff' }}>Texh Stack</strong>
								<p>Node.js, Express.js, IoT, RaspberryPi, Arduino</p>
							</li>
							<li>
								<strong style={{ color: '#ffffff' }}>Texh Stack</strong>
								<p>Python, HTML, CSS, QBasic</p>
							</li> */}
							<li>
								<strong>Age</strong>
								<p>16 Years (17/04/2004)</p>
							</li>
							<li>
								<strong>Location</strong>
								<p>Bhubneswar, Odisha, India</p>
							</li>
							<li>
								<strong>Email</strong>
								<p>
									<a href={`mailto:swapnadeep456@gmail.com`}>swapnadeep456@gmail.com</a>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default About;
