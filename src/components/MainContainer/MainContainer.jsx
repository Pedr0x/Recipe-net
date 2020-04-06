import React, { useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import SearchItem from "./SearchItem";
import Spinner from "./Spinner";
const MainContainer = (props) => {
	
	 const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0,
  })
	 if(inView){
		 props.showMoreResults();
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
			<div className="main-search-container" onClick={console.log(inView)}>
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
					<div className="spinner-container" ref={ref}> 
								<Spinner/> 
								</div> : <h1> No more results</h1>}

 			</div>	
		)
	}
}

export default MainContainer 