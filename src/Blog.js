import React from 'react';
import data from './dataBlog.json';

const Blog = () => {
	return (
		<div className="blogs-section section" id="Blogs">
			<div className="container">
				<div className="section-head">
					<h2>Blogs</h2>
				</div>
				<ul className="work-list">
					{data.map((item, index) => {
						return (
							<li className="item" key={index}>
								<div className="inner">
									<a href={item.link} target="_blank">
										<img src={item.image} />
										<h3 className="title">{item.name}</h3>
										<span className="date">
											<i className="fas fa-calendar-alt"></i>
											{item.date}
										</span>
									</a>
								</div>
							</li>
						);
					})}
					{/* {data.edges.map((item, index) => {
						return (
							<li key={index} className="item">
								<div className="inner">
									<Link className="link" to={item.node.slug} />

									{item.node.featureImage ? (
										<Img
											fixed={item.node.featureImage.fluid}
											objectFit="cover"
											objectPosition="50% 50%"
										/>
									) : (
										<div className="no-image"></div>
									)}
									<div className="details">
										<h3 className="title">{item.node.title}</h3>
										<span className="date">
											<i className="fas fa-calendar-alt"></i>{' '}
											{moment(item.node.createdAt).format('LL')}
										</span>
									</div>
								</div>
							</li>
						);
					})} */}
				</ul>
			</div>
		</div>
	);
};
export default Blog;
