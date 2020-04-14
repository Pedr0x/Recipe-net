import React from "react";
import {  Link } from "react-router-dom";

import "./header.css"
const Header = () => {
	return(
		<div className="header">
		<Link to="/"> 
			<div className="header-logo">
				
				RecipeFinder
			</div>
			</Link>
		</div>
	)
}

export default Header 