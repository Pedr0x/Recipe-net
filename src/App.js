import React from "react";
//styles
//import  "./pedrox.css"
//CSS
import './pedrox.css';
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
import NoMatch from "./components/NoMatch/NoMatch";

export let MyContext = React.createContext();

var App = () => {
	return(
		<MyProvider>
				<Router>
				<NavBar/>
				<Switch> 
					<Route path="/" exact component={MainSearch}/>
					<Route path="/Favorites" component={Favorites}/>
					<Route component={NoMatch}/>
				</Switch>
				</Router>
		</MyProvider>
	)
}

export  default App;