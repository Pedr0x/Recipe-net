import React from "react";
import {MyContext} from "../../App";
import FavoriteItemsContainer from "./FavoriteItemsContainer";

class Favorites extends React.Component {
	render(props){
		
		return(
		<div className="favorite-recipes-super-container">
			<h1 className="favorites-main-title">  favorites</h1>
			<MyContext.Consumer>
			{(context) =>(
					<React.Fragment> 
						<FavoriteItemsContainer data={context.state.favoriteRecipes}/>												  
					</React.Fragment>
								)
			}
			</MyContext.Consumer>
				</div>
		)
	}
	}

export default Favorites



