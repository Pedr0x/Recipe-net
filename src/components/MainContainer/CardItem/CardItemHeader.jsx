import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
	
  return {
    // dispatching plain actions
    deleteFavorite: (param) => 
	 	dispatch({ type: 'DELETE_FAVORITE',  param}),
	 updateFavorite: (itemValues) => 
	  	dispatch({type: "UPDATE_FAVORITE", itemValues})
  }
};

function mapStateToProps(state) {
   return {
   		globalFavorites: state
   };
};

const CardItemHeader = ({url, totalWeight, calories, recipeYield, recipeName, image, globalFavorites, deleteFavorite,  updateLocalStorage, updateFavorite}) => {
	const searchItemData = {
		image,
		recipeName,
		url
	}
	
	function updateLocalStorage(value, action){
		if (action == "upd"){
		localStorage.setItem("favorites", JSON.stringify([...globalFavorites, value]));		
		//console.log(localStorage.favorites, "local favorites");
		} else {
			//const news = JSON.parse(localStorage.favorites).filter(recipe => recipe.recipeName !== value);
			const news = globalFavorites.filter(recipe => recipe.recipeName !== value.recipeName);
			localStorage.setItem("favorites", JSON.stringify(news));
		}
	}
	
	 function cardUpdateFavorites(itemValues) {
		updateLocalStorage(itemValues, "upd");
		updateFavorite(itemValues)
	}
	
	 function cardDeleteFavorites(itemValues) {
		 updateLocalStorage(itemValues,"del");
		deleteFavorite(itemValues)
	}
	return(
		<div className="card-header">
			<a className="card-header-title" href={url}> {recipeName}</a>
				<div className="card-header-icon-container"> 
				{ (globalFavorites.some(elem => elem.recipeName === recipeName) )
					? <IconButton onClick={() => cardDeleteFavorites(searchItemData)}>
							<FavoriteIcon color="secondary"/>
						</IconButton>
					: <IconButton
						onClick={() =>
							cardUpdateFavorites(searchItemData)}
						aria-label="favorite"
					>
						<FavoriteIcon/>
					</IconButton>
				}
				</div>
			
			<h4 className="card-header-subtitle">
{				 `${parseInt(calories)} cal - ${parseInt(totalWeight)}g  - For ${recipeYield}`  }
			</h4>
			
		</div>)
}


export default connect(mapStateToProps , mapDispatchToProps)(CardItemHeader);