import React from "react";
import FavoriteItems from "./FavoriteItems";
var _ = require('lodash');


var FavoriteItemsContainer = (props) => {
	
	if (props.data.length === 0){
		return(
			<h1 className="favorites-title_no-items">You haven´t added any recipe to favorites yet</h1>
		)
	} else {
		return(
			
			props.data.map(elem => 
				<FavoriteItems
					 img={elem.image}
					  url={elem.url}
					title={elem.recipeName}
				  	key={_.uniqueId()}		
					 date={elem.date}
					  />			  
						  
						  )
		)
	}
}
			
export default FavoriteItemsContainer
