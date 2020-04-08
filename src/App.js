import React from "react";
//styles
//import  "./pedrox.css"
//CSS
import './pedrox.css';
import './components/MainContainer/main-container.css';
import './components/MainContainer/search-item.css';
import './components/Search/search-styles.css';
import './components/FavoriteRecipes/favorite-styles.css';
import './components/NavBar/navbar-styles.css';
import './components/alert/alert-styles.css';
//React Router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//Components
import MyProvider from "./MyProvider"

import NavBar from "./components/NavBar/NavBar"
import MainSearch from "./components/Search/Search"
import Favorites from './components/FavoriteRecipes/Favorites';
export let MyContext = React.createContext();

var App = () => {
	return(
		<MyProvider>
				<Router>
				<NavBar/>
				<Switch> 
					<Route path="/Favorites" component={Favorites}/>
					<Route path="/" exact component={MainSearch}/>
				</Switch>
				</Router>
		</MyProvider>
	)
}

export  default App;