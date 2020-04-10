import React, { useRef,useState } from 'react'
import { useInView } from 'react-intersection-observer'
import SearchItem from "./SearchItem";
import Spinner from "./Spinner";
import ConnectionProblemsInfo from "./ConnectionProblemsInfo";

var _ = require('lodash');

const MainContainer = (props) => {
	 const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.33,
  })
	// const [isMakingRequest,setRequest] = useState(false)
	 //let isMakingRequest = true;
	 
	 if(inView && props.isMakingRequest === false){
		 //The spinner makes another request on view
		//	so it checks if is already doing a request
			 props.showMoreResults();
		}
	
	if ( props.receivedData === true && props.data.length === 0  ){
		//Query is loading
		return (
			<div className="main-search-container">
				<Spinner/> 
			</div>) 
	}
	
	if (props.receivedData === false ){
		// Query didn´t return any recipe
		return (<h1> We couldn´t find that recipe</h1>)
	}
	
	if (props.data.length >= 1 && props.error == true){
		//Query already had  recipes but encountered
		//an error. Probably 429
		return( 
			<div className="main-search-container">
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
						key={_.uniqueId()}
						recipeYield={elem.recipe.yield}
						url={elem.recipe.url}
						/> 
				)
								}
					<ConnectionProblemsInfo showMoreResults={props.showMoreResults}/>
 			</div>	
		)
	} if (props.error && !props.data.length){
		//error starting 
		return(
		<ConnectionProblemsInfo showMoreResults={props.showMoreResults}/>

		)
	}

	else {
		return(
			//regular return. XHR code = 200
			<div className="main-search-container">
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
						key={_.uniqueId()}
						recipeYield={elem.recipe.yield}
						url={elem.recipe.url}
						/> 
				)
								}
					{props.moreResultsAvailable ? 
					//Check if the response has more data under the same query
						<div className="spinner-container" ref={ref}> 
							<Spinner/> 
						</div> : <h1> No more results</h1>}
 			</div>	
		)
	}
}

export default MainContainer 