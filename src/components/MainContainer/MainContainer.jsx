import React, { useRef,useState } from 'react'
import { useInView } from 'react-intersection-observer'
import SearchItem from "./SearchItem";
import Spinner from "./Spinner";
import ConnectionProblemsInfo from "./ConnectionProblemsInfo";
import SearchItemContainer from "./SearchItemContainer"
var _ = require('lodash');

const MainContainer = (props) => {
	 const [ref, inView, entry] = useInView({
    threshold: 0.33,
  })
	 
	 if (inView && props.isMakingRequest === false){
		 //The spinner makes another request on view
		//	so it checks if is already doing a request
		 props.showMoreResults();
		}
	
	 if ( props.receivedData && props.data.length === 0  ){
		//Query is loading
		return (
			<div className="main-search-container">
				<Spinner/> 
			</div>) 
	}
	
	else if (!props.receivedData ){
		// Query didn´t return any recipe
		return (<h1> We couldn´t find that recipe</h1>)
	}
	
	else if (props.data.length >= 1 && props.error){
		//Query already had  recipes but encountered
		//an error. Probably 429
		return( 
			<div className="main-search-container">
				<SearchItemContainer data={props.data}/>
				<ConnectionProblemsInfo showMoreResults={props.showMoreResults}/>
 			</div>	
		)
	}
	
	else if (props.error && !props.data.length){
		//error starting 
		return(
		<ConnectionProblemsInfo showMoreResults={props.showMoreResults}/>
		)
	}
	
	else {
		return(
			//regular return. XHR code = 200
			<div className="main-search-container">
				<SearchItemContainer data={props.data}/>
				{props.moreResultsAvailable 
					//Check if the response has more data under the same query
					? <div className="spinner-container" ref={ref}> 
							<Spinner/> 
					  </div> 
					: <h1 className="no-results-text"> No more results</h1>}

 			</div>	
		)
	}
}

export default MainContainer 