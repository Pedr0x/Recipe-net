import React from 'react';
import SearchItem from "./SearchItem/SearchItem";
var _ = require('lodash');

const SearchItemContainer = (props) => {
	return(
		<React.Fragment> 
		{props.data.map(elem =>
		 		<SearchItem 
						title={elem.recipe.label}
						image={elem.recipe.image}
						calories={elem.recipe.calories}
						ingredients={elem.recipe.ingredients}
						healthLabels={elem.recipe.healthLabels}
						weight={elem.recipe.totalWeight}
						time={elem.recipe.time}
						dietLabels={elem.recipe.dietLabels}
						cautions={elem.recipe.cautions}
						totalNutrients={elem.recipe.totalNutrients}
						key={_.uniqueId()}
						recipeYield={elem.recipe.yield}
						url={elem.recipe.url}
						/> 
		 	)}
		 	</React.Fragment>
	)
}

export default SearchItemContainer 