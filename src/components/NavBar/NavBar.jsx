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
		<Typography variant="h5" align="left" fontWeight={600}> 
		
		RecipeFinder   </Typography> 
	
		</AppBar>

	)
	}
	
	export  default NavBar