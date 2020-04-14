import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import {  Link } from "react-router-dom";
import "./navbar-styles.css";
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import InfoIcon from '@material-ui/icons/Info';
import GitHubIcon from '@material-ui/icons/GitHub';

import HelpIcon from '@material-ui/icons/Help';


var NavBar = () => {
	return(
		<div className="navbar-super"> 
			<div className="navbar-container"> 
			<div className="navbar scale-up-hor-left">
				<Link className="navbar-title navbar-title_main" to="/">
				<SearchIcon/>
			   </Link>
			  <Link className="navbar-title" to="/favorites">
				<FavoriteIcon/>
			  </Link>
			  <Link className="navbar-title" to="/about">
				<HelpIcon/>
			  </Link>
			  <a className="navbar-title" href="https://github.com/Pedr0x/Recipe-net/tree/development/src">
				<GitHubIcon/>
			  </a>
			   <Link className="navbar-title monospace" to="/404">
				404
			  </Link>
			</div>
			</div>
		</div>
	)
	}
	
	export  default NavBar