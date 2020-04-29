
import React from "react";
import "./about.css";

const About = () => {
	const Lorem = () => {
		return (
			<p className="about-text">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
			</p>
		)
	}
	return (
		<React.Fragment> 
			<section className="about-container"> 
				<h2 className="about-title"> Lorem Ipsum</h2>
				<Lorem/>
				<Lorem/>
				<Lorem/>
		</section>
		</React.Fragment>
	)
};
	
	export default About
	
