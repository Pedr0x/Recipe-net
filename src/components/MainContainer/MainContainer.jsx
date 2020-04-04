import React from 'react'
import SearchItem from "./SearchItem";
import Spinner from "./Spinner";
import Alert from "./Alert";

import VizSensor from 'react-visibility-sensor';

var MainContainer = (props) => {
	
	function handleScroll(e)  {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    console.log(bottom);
		
  }
	function isBottom(el) {
  //console.log(e.getBoundingClientRect().bottom <= window.innerHeight);
		  return el.getBoundingClientRect().bottom <= window.innerHeight;
		    console.log(23);

}
	if ( props.receivedData === true && props.data.length === 0  ){
		return (
			<div className="main-search-container">
				<Spinner/> 
			</div>) 
	}
	
	if (props.receivedData === false){
		return (<h1> We couldn´t find that recipe</h1>)
	}
	
	else {
		return(
			<div className="main-search-container" onScroll={isBottom}>
				{props.data.map( (elem) => 
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
						key={elem.recipe.url}
						recipeYield={elem.recipe.yield}
						url={elem.recipe.url}
						/> 
				)
								}
					{props.moreResultsAvailable ? 
					<div className="ex"> 
								<button onClick={props.showMoreResults} className="btn btn_render-more"> Render More</button>
								</div> : <h1> No more results</h1>}

 			</div>	
		)
	}
}

export default MainContainer 