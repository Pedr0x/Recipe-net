import React from "react";
import {MyContext} from "../../App";


import DeleteIcon from '@material-ui/icons/Delete';

const FavoriteItems = (props) => {
	var {img,url,title} = props;
	var itemData = {
		img,
		url,
		title
	}
		return(
			<div className="favorite-recipes-item" style={{background: `url(${props.img})`}}>
				<MyContext.Consumer>	
				 {(context) => (
						<DeleteIcon onClick={() => context.deleteFavorite(itemData.title)} className="favorite-item-delete-icon"/>

					)
						
					}
						 </MyContext.Consumer>
		<div  className="favorite-recipes-item-title"> 

		<a href={props.url}>{props.title} {itemData.title} </a>
		</div>		
			</div>

		)
	}

export default FavoriteItems