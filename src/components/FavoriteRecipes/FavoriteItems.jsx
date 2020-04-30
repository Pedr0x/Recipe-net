import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
  return {
    deleteFavorite: (param) => dispatch({ type: 'DELETE_FAVORITE',  param})
  }
}

const FavoriteItems = (props) => {
	const {img, url ,title} = props;
	const itemData = {
		recipeName: title,
		img,
		url
	}
	
	function dispatchDeleteFavorite(value) {
		const updatedFavorites = JSON.parse(localStorage.favorites)
			.filter(elem => elem.recipeName !== value.recipeName);
		localStorage.setItem(
			"favorites", 
			JSON.stringify(updatedFavorites)
		);
		props.deleteFavorite(value);
	}
	
	return (
		<div 
			className="favorite-recipes-item" 
			style={{background: `url(${props.img})`}}
		>
			<DeleteIcon 
				className="favorite-item-delete-icon" 
				onClick={() => 
					dispatchDeleteFavorite(itemData)} 
			/>
			<div  className="favorite-recipes-item-title"> 
				<a href={props.url} className="favorites-item-link">
					{props.title} 
				</a>
			</div>		
		</div>
		)
	}

export default connect(null, mapDispatchToProps)(FavoriteItems);

