import React from 'react';
import {MyContext} from "./App";
import moment from "moment";

class MyProvider extends React.Component {
	constructor(props){
	super(props);
	this.state = {
		favoriteRecipes:[]
	};
		this.updateFavorite = this.updateFavorite.bind(this);
		this.deleteFavorite = this.deleteFavorite.bind(this);
	}
	
	updateFavorite(itemValues)  {
		//this function adds the targeted recipe value and image
		//and adds or deletes it to an array in the state 
		console.log(itemValues)
		const newFavorite = {...itemValues, date: moment().format('MMMM Do')};
		//check if the state already has that recipe
				this.setState ({
					favoriteRecipes:[  ...this.state.favoriteRecipes,newFavorite]
				});
	console.log("updated")

	}
	
	deleteFavorite(param) {
		this.setState({
			favoriteRecipes: this.state.favoriteRecipes.filter(recipe => recipe.recipeName !== param.recipeName)
			});
		console.log("deleted")
	}
	
	componentDidMount() {
		//check if the user already has favorites in local storage
		if (localStorage.favorites !== undefined) {
			this.setState({
				favoriteRecipes: JSON.parse(localStorage.favorites)
			})
		};
		console.log(this.state.favoriteRecipes);
	}
	
	componentDidUpdate() {
		if (JSON.parse(localStorage.favorites !== this.state.favoriteRecipes)) {
			localStorage.setItem("favorites", JSON.stringify(this.state.favoriteRecipes))
		}
	}
	
	render(){
		return(
		<MyContext.Provider value={{
			state:this.state,
			updateFavorite:this.updateFavorite,
			deleteFavorite:this.deleteFavorite
			}}>
			{this.props.children}
		</MyContext.Provider>
		)
	}
}

export  default MyProvider