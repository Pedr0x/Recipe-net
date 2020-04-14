import React from 'react';
//Material UI Components
import MainContainer from "../MainContainer/MainContainer";
import SearchForm from "./ReusableComponents/SearchForm"
import "./search-styles.css"
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
			alcoholFree:false,
			vegetarian:false,
			lowFat:false,
			gluten:false,
			balanced:false,
			highProtein:false,
			caloriesMax:null,
				pageQ: {
				from:0,
				to:10
				},
			moreResultsAvailable:false,
			inSpanish:false,
			cuisineType:"",
			excluded:"",
			celeryFree:false,
			crustceanFree:false,
			dairyFree:false,
			eggFree:false,
			fishFree:false,
			fodmapFree:false,
			keto:false,
			kidneyFriendly:false,
			kosher:false,
			lowPottassium:false
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
		 this.getValue = this.getValue.bind(this)
	  }
	apiRequest(queryObj) {
		const {
			query,
			alcoholFree,
			vegetarian,
			lowFat,
			gluten,
			balanced,
			highProtein,
			caloriesMax,
			pageQ,
			inSpanish,
			cuisineType,
			excluded,
			celeryFree,
			crustceanFree,
			dairyFree,
			eggFree,
			fishFree,
			fodmapFree,
			keto,
			kidneyFriendly,
			kosher,
			lowPottassium
		} = queryObj;		
		
		//conditional parameters
		const ManyCalories = caloriesMax !== false && caloriesMax > 1  
			?  `&calories=0-${caloriesMax}` : "";
		const isVegetarian = vegetarian  ? '&health=vegetarian' : "";
		const isLowFat = lowFat ? "&diet=low-fat" : "";
		const isAlcoholFree = alcoholFree ? "&health=alcohol-free" : "";
		//gluten free has problems with the api. will fix asap.
		const isGlutenFree = gluten ? "" : ""; 
		const isBalanced = balanced ? "&diet=balanced" : "";
		const isHighProtein = highProtein ? "&diet=high-protein" : "" ;
		const pagesToFetch =  `&from=${pageQ.from}&to=${pageQ.to}`;
		const requestLang = inSpanish ? "https://test-es.edamam.com/search" : "https://api.edamam.com/search";
		const cuisine = cuisineType ? `&cuisineType=${cuisineType}`: ""; 
		const excludedIngredients = excluded ? ("&" + excluded.split(",").map(elem=>  `excluded=${elem}`).join("&")) : "" ;
		
		const isCeleryFree = celeryFree ? '&health=celery-free' :""
		const isCrustceanFree = crustceanFree ? '&health=crustacean-free' : "";
		const isFodmapFree = fodmapFree ? '&health=fodmap-free' : "";
		const isKeto = keto ? '&health=keto-friendly' : "";
		const isKidneyFriendly = kidneyFriendly ? '&health=kidney-friendly' : "";
		const isKosher = kosher ? '&health=kosher' : "";
		const isLowPottassium = lowPottassium ? '&health=low-pottassium' : "";

		

		
		const urlRequest = `https://cors-anywhere.herokuapp.com/${requestLang}?q=${query}&app_id=8bc00f3b&app_key=b1d9d15dadbddc109d83b189b71e533f${pagesToFetch}${ManyCalories}${isAlcoholFree}${isVegetarian}${isLowFat}${isGlutenFree}${isHighProtein}${isBalanced}${cuisine}${isCeleryFree}${isCrustceanFree}${isFodmapFree}${isKeto}${isKidneyFriendly}${isKosher}${isLowPottassium}${excludedIngredients}`;

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
	componentDidMount() {  
		if (sessionStorage.lastQuery){
			this.queryParameters.query = sessionStorage.lastQuery;
		}
		console.log(sessionStorage.lastQuery);
		//make initial request with sample parameters
		this.apiRequest(this.queryParameters);
	}
		
	componentDidUpdate(){
		//console.count();
		//the component updates 2 times every render
	}
	
	componentWillUnmount(){
		this.isRequestCanceled = true;
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
	
	getCheckBoxData(checkBoxState,name){
		this.queryParameters[name] = checkBoxState;
	}
	
	showMoreResults(){
		this.queryParameters.pageQ.from +=10;
		this.queryParameters.pageQ.to += 10;	
		//api will receive stop returning data at 100 hits
		this.apiRequest(this.queryParameters);
	}
	
	toggleLang(e){
		this.queryParameters.inSpanish = !this.queryParameters.inSpanish;
		console.log(this.queryParameters.inSpanish);
	}

	getValue(e){
		this.queryParameters[e.target.name] = e.target.value;
		console.log(this.queryParameters[e.target.name] )
		//console.log(this.queryParameters[e.target.name])
	}
	
	getQueryName(e){
		this.queryParameters.query = e.target.value;

	}
	
	render(){
		return (
			<div className="search-super" onClick={() => console.log(this.queryParameters)}> 
				<SearchForm 
					getCheckBoxData={this.getCheckBoxData} 
					getQueryName={this.getQueryName} 
					handleChange={this.handleChange}
					callback={this.getValue}
					/>
					
				<MainContainer 
					receivedData={this.state.receivedData}
					data={this.state.recipes}
					moreResultsAvailable={this.state.moreResults} 
					showMoreResults={this.showMoreResults}
					error={this.state.error} 
					isMakingRequest={this.state.isMakingRequest}
					/> 
			</div>
				)	
				}
	}

export  default MainSearch 