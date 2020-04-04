import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Favorites from "./../FavoriteRecipes/Favorites"

var NavBar = () => {
	
	
	return(

	<AppBar color="primary" position="static"> 	
		   	<div className="navbar">
			   <Link className="navbar-title navbar-title_main" to="/">RecipeFinder</Link>
              <Link className="navbar-title" to="/favorites">Favorites</Link>
               </div>
		</AppBar>

	)
	}
	
	export  default NavBar