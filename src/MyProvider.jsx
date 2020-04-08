import React from 'react';
import {MyContext} from "./App"
class MyProvider extends React.Component {
	state = {
		favoriteRecipes:[]
	}
	
	componentDidMount(){
		if (localStorage.favorites !== undefined) {
			this.setState({
				favoriteRecipes:[...JSON.parse(localStorage.favorites)]
			})
		}
		else{
			return
		}
	console.log(this.state.favoriteRecipes);
	}
	render(){
		return(
		<MyContext.Provider value={{
			state:this.state,
			getFavorite:  (itemValues) =>{
				//this function adds the targeted recipe value and image
				//and adds it to an array in the state and local storage
				//need to bind this
				console.log(itemValues)
				const now = new Date();
				const day = now.getDate();
				const month = now.getMonth() + 1; 
				const newFavorite = {...itemValues, date: `${day}/${month}`}

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
	},	
			deleteFavorite: (param) => {
				this.setState({
					favoriteRecipes: this.state.favoriteRecipes.filter(recipe => recipe.recipeName !== param)
				});
				localStorage.setItem("favorites", JSON.stringify(this.state.favoriteRecipes))
				}
	}}>
		{this.props.children}
		</MyContext.Provider>
		)
	}
}

export  default MyProvider