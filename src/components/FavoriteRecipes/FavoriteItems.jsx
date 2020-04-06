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

		<a href={props.url} className="favorites-item-link">{props.title} </a>
		<a  className="favorites-item-date"> Added on: {props.date} </a>
		</div>		
			</div>

		)
	}

export default FavoriteItems
