import React from 'react';
//Material UI Components
import MainContainer from "../MainContainer/MainContainer";
import SearchForm from "./ReusableComponents/SearchForm"
import "./search-styles.css"
var _ = require('lodash');

class MainSearch extends React.Component {
	 constructor(props) {
    super(props);
    this.state = {
		recipeQueryValue: "",
		recipes: [],
		receivedData:true,
		moreResults:false,
		error:"",
		isMakingRequest:false

	};
		//this object contains both the query value and the parameters
		// for the request
		this.queryParameters = {
			query:"donuts",			
			highProtein:false,
			caloriesMax:null,
				pageQ: {
				from:0,
				to:10
				},
			moreResultsAvailable:false,
			inSpanish:false,
			excluded:"",
				health: {
					vegetarian:false,
					vegan:false,
					alcoholFree:false,
					peanutFree:false,
					sugarConscious:false,
					treenutFree:false
	 		},
				diet : {
					highProtein:false,
					lowCarb:false,
					balanced:false
				}
		}; 

		 this.lastQuery = "donuts";
		 this.isRequestCanceled = false;
		 //methods
	    this.handleChange = this.handleChange.bind(this);
	    this.apiRequest = this.apiRequest.bind(this);
 		this.getCheckBoxData = this.getCheckBoxData.bind(this);
		this.showMoreResults = this.showMoreResults.bind(this);
		this.toggleLang = this.toggleLang.bind(this);
		this.getQueryName = this.getQueryName.bind(this);
		 this.getValue = this.getValue.bind(this);
		 this.refactorParameters = this.refactorParameters.bind(this);
		 
	  }
	
	apiRequest(queryObj) {
		const {
			query,
			health,
			diet,
			pageQ,
			inSpanish,
			excluded
		} = queryObj;		
		
		//conditional parameters
	
		const pagesToFetch =  `&from=${pageQ.from}&to=${pageQ.to}`;
		const requestLang = inSpanish ? "https://test-es.edamam.com/search" : "https://api.edamam.com/search";
		const excludedIngredients = excluded ? ("&" + excluded.split(",").map(elem=>  `excluded=${elem}`).join("&")) : "" ;
		const healthData = (this.refactorParameters(Object.entries(health),"health"))
		
		const dietData = (this.refactorParameters(Object.entries(diet),"diet"))
		
		const urlRequest = `https://cors-anywhere.herokuapp.com/${requestLang}?q=${query}&app_id=8bc00f3b&app_key=b1d9d15dadbddc109d83b189b71e533f${pagesToFetch}${healthData}${excludedIngredients}${dietData}`;

		let getPromise = new Promise((resolve,reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open("GET", urlRequest);
			xhr.responseType = "json";
			
			xhr.onload = () => {
				this.setState({
					isMakingRequest:true
				});

				let responseData = {
					recipes: [...this.state.recipes],
					receivedData: this.state.receivedData,
					error: this.state.error,
					moreResults: this.state.moreResults
				};
						
				let { moreResults,error, receivedData, recipes} = responseData;

				if(xhr.status === 200){
					
					if (xhr.response.hits.length > 0) {
						receivedData = true;
						error = false;
						moreResults = xhr.response.more ? true : false
						recipes = (this.state.recipes.lenght !== 0   
											? [...this.state.recipes, ...xhr.response.hits] 
											: xhr.response.hits) 
						} else {
							receivedData = false
						}
				resolve(xhr.response);
				} else {
						error = true;
						reject("Status code wasn´t 200: " + xhr.status);
					}
				
			//connection problems
				xhr.onerror = () => {
					receivedData = false;
					reject("request did not load because of connection problems");
				}
				//end of request
				this.setState({
					moreResults,
					receivedData,
					error, 
					recipes,
					isMakingRequest: false
				})	
			}					
				xhr.send();
			
			if (this.isRequestCanceled){
				console.log("aborted request")
				xhr.abort();
			}
		}
	)
			getPromise
				.then(res => console.log(res))
				.catch(err => console.log(err))
				}

	getLastQuery() {
 		this.lastQuery = this.queryParameters.query;
		sessionStorage.setItem("lastQuery", `${this.lastQuery}`)
		
		}
	
	refactorParameters(param,str){
	//object.entries will return an array where the 
	//first element is the elements name and the second its 
	//boolean value
		return(
			param
				.map(elem =>  elem[1]
					? `&${str}=${_.kebabCase(elem[0])}` 
					 : "" )
				.join(""))
		}
	
	componentDidMount() {  
		if (sessionStorage.lastQuery){
			this.queryParameters.query = sessionStorage.lastQuery;
		}
		//make initial request with sample parameters
		this.apiRequest(this.queryParameters);
	}
		
	
	componentWillUnmount(){
		this.isRequestCanceled = true;
		sessionStorage.setItem("recipes", this.state.recipes);
	}
	
	handleChange(e){
		e.preventDefault();
		//Reset recipes 
		this.setState({
			recipes: []
		});
		this.getLastQuery() 
		//reset the pages request
		this.queryParameters.pageQ.from = 0;
		this.queryParameters.pageQ.to = 10;
		this.apiRequest(this.queryParameters);
	}
	
	getCheckBoxData(checkBoxState,name,field){

		this.queryParameters[field][name] = checkBoxState;
		//console.log(this.queryParameters)
	}
	
	showMoreResults(){
		this.queryParameters.pageQ.from +=10;
		this.queryParameters.pageQ.to += 10;	
		//api will receive stop returning data at 100 hits
		this.apiRequest(this.queryParameters);
	}
	
	toggleLang(state,name){
		this.queryParameters[name] = state;
		
		// 15/04
		//for some reason toggleLang gets called on click
		//on OpenParamBtn. I´m not sure why yet.
	}

	getValue(e){
		this.queryParameters[e.target.name] = e.target.value;
		//console.log(this.queryParameters[e.target.name])
	}
	
	getQueryName(e){
		this.queryParameters.query = e.target.value;

	}
	
	render(){
		return (
			<section className="search-super"> 
				<SearchForm 
					getQueryName={this.getQueryName} 
					handleChange={this.handleChange}
					callback={this.getValue}
					getCheckBoxData={this.getCheckBoxData}
					toggleLang={this.toggleLang} 
					/>
					
				<MainContainer 
					receivedData={this.state.receivedData}
					data={this.state.recipes}
					moreResultsAvailable={this.state.moreResults} 
					showMoreResults={this.showMoreResults}
					error={this.state.error} 
					isMakingRequest={this.state.isMakingRequest}
					/> 
			</section>
				)	
				}
	}

export  default MainSearch 