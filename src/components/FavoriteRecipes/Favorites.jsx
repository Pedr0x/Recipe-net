import React from "react";
import {MyContext} from "../../App";
import FavoriteItemsContainer from "./FavoriteItemsContainer";
import "./favorite-styles.css";
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    globalFavorites: state
  };
}


const Favorites = (props) => {
		return(
			<section className="favorite-recipes-super-container" onClick={() => console.log(props.globalFavorites)}>
					<FavoriteItemsContainer
						data={props.globalFavorites}
					/>	
			</section>
		)
	}




export default connect(mapStateToProps)(Favorites);




