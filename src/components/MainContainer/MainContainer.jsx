import React, { useRef,useState } from 'react'
import { useInView } from 'react-intersection-observer'
import SearchItem from "./SearchItem";
import Spinner from "./Spinner";

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
		//Query already had returned recipes but encountered
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
						key={elem.recipe.url}
						recipeYield={elem.recipe.yield}
						url={elem.recipe.url}
						/> 
				)
								}
					<div className="connection-problems-info"> 
						<h1>  Connection problems. Click here after a minute to keep loading recipes</h1>
						<p> code:{props.error}</p>
						<button className="btn btn_reload" onClick={props.showMoreResults}> reload</button>
					</div>
 			</div>	
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
						key={elem.recipe.url}
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