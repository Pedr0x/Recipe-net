import React from "react";
import {MyContext} from "../../App";
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
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
	
	return (
		<div 
			className="favorite-recipes-item" 
			style={{background: `url(${props.img})`}}
		>
					<DeleteIcon 
						className="favorite-item-delete-icon" 
						onClick={() => 
							props.deleteFavorite(itemData)} 
					/>
			<div  className="favorite-recipes-item-title"> 
				<a href={props.url} className="favorites-item-link">
					{props.title} 
				</a>
				<p className="favorites-item-date">
				 	Added on: {props.date} 
				 </p>
			</div>		
		</div>
		)
	}

export default connect(null, mapDispatchToProps)(FavoriteItems);

