import React from "react";

import DeleteIcon from '@material-ui/icons/Delete';

const FavoriteItems = (props) => {		
		return(
			<div className="favorite-recipes-item" style={{background: `url(${props.img})`}}>
				<DeleteIcon className="favorite-item-delete-icon"/>
		<div  className="favorite-recipes-item-title"> 
		<a href={props.url}>{props.title} </a>
		</div>		
			</div>

		)
	}

export default FavoriteItems
