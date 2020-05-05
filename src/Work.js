import React, { Component } from 'react';
import logo from './main-bg.jpg';
import bg from './abstract-business-code-coder-270348.jpg';

export default class Work extends Component {
	render() {
		return (
			<div className="work section" id="Work">
				<div className="container">
					<div className="section-head">
						<h2 className="text-center">My Projets</h2>
					</div>
					<ul className="work-list">
						<li className="item">
							<div className="inner">
								<a href="#">
									<img src={bg} />
									<span className="name">Add</span>
								</a>
							</div>
						</li>
						<li className="item">
							<div className="inner">
								<a href="#">
									<img src={bg} />
									<span className="name">Add</span>
								</a>
							</div>
						</li>
						<li className="item">
							<div className="inner">
								<a href="#">
									<img src={logo} />
									<span className="name">Add</span>
								</a>
							</div>
						</li>
						<li className="item">
							<div className="inner">
								<a href="#">
									<img src={logo} />
									<span className="name">Add</span>
								</a>
							</div>
						</li>
						<li className="item">
							<div className="inner">
								<a href="#">
									<img src={logo} />
									<span className="name">Add</span>
								</a>
							</div>
						</li>
						{/* {data.edges.map((item, index) => {
							return (
								<li key={index} className="item">
									<div className="inner">
										<a href={item.node.url}>
											<img
												fixed={item.node.image.fluid}
												objectFit="cover"
												objectPosition="50% 50%"
											/>
											<span className="name">{item.node.siteName}</span>
										</a>
									</div>
								</li>
							);
						})} */}
					</ul>
				</div>
			</div>
		);
	}
}