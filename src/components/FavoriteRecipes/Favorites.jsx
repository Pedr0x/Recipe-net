import React from "react";
import {MyContext} from "../../App";
import FavoriteItemsContainer from "./FavoriteItemsContainer";
import "./favorite-styles.css"
class Favorites extends React.Component {
	render(props){
		return(
		<section className="favorite-recipes-super-container">
			<MyContext.Consumer>
			{(context) =>(
					<React.Fragment> 
						<FavoriteItemsContainer data={context.state.favoriteRecipes}/>												  
					</React.Fragment>
								)}
			</MyContext.Consumer>
				</section>
	)
}
}

export default Favorites



