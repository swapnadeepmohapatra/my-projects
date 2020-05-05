import React from 'react';
import './App.css';
import Banner from './Banner';
import Work from './Work';
import Contact from './Contact';
import About from './About';
import Blog from './Blog';

function App() {
	return (
		<div>
			<Banner />
			<About />
			<Work />
			<Blog />
			<Contact />
		</div>
	);
}

export default App;
