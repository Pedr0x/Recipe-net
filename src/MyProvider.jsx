import React from 'react';
import {MyContext} from "./App";
import moment from "moment";

class MyProvider extends React.Component {
	constructor(props){
	super(props);
	this.state = {
		favoriteRecipes:[]
	};
		this.getFavorite = this.getFavorite.bind(this);
		this.deleteFavorite = this.deleteFavorite.bind(this);
	}
	
	getFavorite(itemValues)  {
				//this function adds the targeted recipe value and image
				//and adds it to an array in the state and local storage
				console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
				console.log(itemValues)
				const newFavorite = {...itemValues, date: moment().format('MMMM Do')};
				//check if the state already has that recipe
				if (this.state.favoriteRecipes.some
					(elem => elem.recipeName === newFavorite.recipeName)){
						this.setState({
							favoriteRecipes: this.state.favoriteRecipes.filter
							(elem => elem.recipeName !== newFavorite.recipeName)
						}, 
						() =>  localStorage.setItem("favorites", JSON.stringify(this.state.favoriteRecipes)))
				}	//Update local storage with the deleted item
					else {
						this.setState({
							favoriteRecipes:[  ...this.state.favoriteRecipes,newFavorite]
						});
						let allFavorites = [...this.state.favoriteRecipes, newFavorite];
						localStorage.setItem("favorites", JSON.stringify(allFavorites));
						console.log(allFavorites);
					}
	}
	
	deleteFavorite(param) {
		this.setState({
			favoriteRecipes: this.state.favoriteRecipes.filter(recipe => recipe.recipeName !== param)
			}, () => localStorage.setItem("favorites", JSON.stringify(this.state.favoriteRecipes)))
			}
	
	
	componentDidMount(){
		//check if the user already has favorites in local storage
		if(localStorage.favorites !== undefined){
			this.setState({
				favoriteRecipes:JSON.parse(localStorage.favorites)
			})
		}
		console.log(this.state.favoriteRecipes);
	}
	
	render(){
		return(
		<MyContext.Provider value={{
			state:this.state,
			getFavorite:this.getFavorite,
			deleteFavorite:this.deleteFavorite
	
			}}>
		{this.props.children}
		</MyContext.Provider>
		)
	}
}

export  default MyProvider