import React from "react";
//styles
//import  "./pedrox.css"
import './pedrox.css';
import './components/MainContainer/main-container.css';
import './components/MainContainer/search-item.css';
import './components/Search/search-styles.css';
import './components/FavoriteRecipes/favorite-styles.css';
import './components/NavBar/navbar-styles.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import NavBar from "./components/NavBar/NavBar"
import MainSearch from "./components/Search/Search"
import Favorites from './components/FavoriteRecipes/Favorites';

export let MyContext = React.createContext();


class MyProvider extends React.Component {
	state = {
		favoriteRecipes:[]
	}
	
	componentDidMount(){
		if (localStorage.favorites.length !== 0) {
			this.setState({
				favoriteRecipes:[...JSON.parse(localStorage.favorites)]
			})
		}
	console.log(this.state.favoriteRecipes);

	}
	render(){
		
		return(
		<MyContext.Provider value={{
			state:this.state,
			getFavorite:  (e) =>{
		//this function adds the targeted recipe value and image
		//and adds it to an array in the state and local storage
		//need to bind this
		e.stopPropagation()
		const newFavorite = {
			recipeName: e.target.name, 
			image:	e.target.dataset.image,
			url:e.target.dataset.url
		}

		if (this.state.favoriteRecipes.includes(e.target.name)) {
			console.log("already had that recipe")
		} 
		else {
	    	this.setState(({
				favoriteRecipes:[  ...this.state.favoriteRecipes,newFavorite]
    		}
						  )
			)
			
		let allFavorites = [...this.state.favoriteRecipes, newFavorite]
		localStorage.setItem("favorites", JSON.stringify(allFavorites))
		console.log(allFavorites)
		}
				//this is for future use
	}	
	
	}}
			>
		
		{this.props.children}
		</MyContext.Provider>
		)
	}
}

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