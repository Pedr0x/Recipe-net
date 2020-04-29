import React, { Component } from 'react'
import { InView } from 'react-intersection-observer'
import Spinner from "./Spinner";
import ConnectionProblemsInfo from "./ConnectionProblemsInfo";
import SearchItemContainer from "./SearchItemContainer";
import GoTopButton from "./GoTopButton";
import "./main-container.css"


const goTop = () => {
	 window.scrollTo({
  		top: 10,
  		behavior: 'smooth',
	 });
	}

  const Componentx = (props) => (
  <InView as="div" className="spinner-container" onChange={(inView, entry) => props.changeInView(inView) }>
  	<Spinner/>
  </InView>
)
  
class MainContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isInView: false
		};
	this.changeInView = this.changeInView.bind(this);
	}
	
	 changeInView(value) {
		this.setState({
			isInView : value
		});
		console.log(this.state.isInView)
	}
	
	 render(){
	 if (this.state.isInView && this.props.isMakingRequest === false) {
		 //The spinner makes another request on view
		//	so it checks if is already doing a request
		 this.props.showMoreResults();
		}
	
	 if ( this.props.receivedData && this.props.data.length === 0  ){
		//Query is loading
		return (
			<div className="main-search-container">
				<Spinner/> 
			</div>
		) 
	}
	
	 if (!this.props.receivedData ){
		// Query didn´t return any recipe
		return (
			<h1> We couldn´t find that recipe </h1>
		)
	}
	
	 if (this.props.data.length >= 1 && this.props.error){
		//Query already had  recipes but encountered
		//an error. Probably 429
		return( 
			<div className="main-search-container">
				<SearchItemContainer data={this.props.data}/>
				<GoTopButton callback={goTop}/>
				<ConnectionProblemsInfo 
					showMoreResults={this.props.showMoreResults}
				/>
 			</div>	
		)
	}
	
	 if (this.props.error && !this.props.data.length){
		//error starting 
		return(
			<ConnectionProblemsInfo 
				showMoreResults={this.props.showMoreResults}
			/>
		)
	}
	
	else {
		return(
			//regular return. XHR code = 200
			<div className="main-search-container">
				<GoTopButton callback={goTop}/>
				<SearchItemContainer data={this.props.data}/>
					{this.props.moreResultsAvailable 
						//Check if the response has more data under the same query
						? <Componentx changeInView={this.changeInView}/>
						: <h1 className="no-results-info"> No more results</h1>
					}
 			</div>	
		)
	}
}
}

export default MainContainer 