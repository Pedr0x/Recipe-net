import React from 'react';
//Material UI Components
import SearchIcon from '@material-ui/icons/Search';

import CheckBox from './CheckBox';
import MainContainer from "../MainContainer/MainContainer";
import Input from './InputRange';
import Select from './Select';

import SearchForm from "./ReusableComponents/SearchForm"
import  './input-range.css';

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
			excluded:""
		};
		 //methods
	    this.handleChange = this.handleChange.bind(this);
	    this.apiRequest = this.apiRequest.bind(this);
 		this.getCheckBoxData = this.getCheckBoxData.bind(this);
		this.showMoreResults = this.showMoreResults.bind(this);
		this.toggleLang = this.toggleLang.bind(this);
		this.getValue = this.getValue.bind(this);
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
			excluded
		} = queryObj;		
		
		//conditional parameters
		const ManyCalories = caloriesMax !== false && caloriesMax > 1  
			?  `&calories=0-${caloriesMax}` : "";
		const isVegetarian = vegetarian  ? '&health=vegetarian' : "";
		const isLowFat = lowFat ? "&diet=low-fat" : "";
		const isAlcoholFree = alcoholFree ? "&health=alcohol-free" : "";
		const isGlutenFree = gluten ? "&health=glutenFree" : "";
		const isBalanced = balanced ? "&diet=balanced" : "";
		const isHighProtein = highProtein ? "&diet=high-protein" : "" ;
		const pagesToFetch =  `&from=${pageQ.from}&to=${pageQ.to}`;
		const requestLang = inSpanish ? "https://test-es.edamam.com/search" : "https://api.edamam.com/search";
		const cuisine = cuisineType ? `&cuisineType=${cuisineType}`: ""; 
		const excludedIngredients = excluded ? ("&" + excluded.split(",").map(elem=>  `excluded=${elem}`).join("&")) : "" ;
		
		const urlRequest = `https://cors-anywhere.herokuapp.com/${requestLang}?q=${query}&app_id=8bc00f3b&app_key=b1d9d15dadbddc109d83b189b71e533f${pagesToFetch}${ManyCalories}${isAlcoholFree}${isVegetarian}${isLowFat}${isGlutenFree}${isHighProtein}${isBalanced}${cuisine}${excludedIngredients}`;

	let getPromise = new Promise((resolve,reject) => {
				const xhr = new XMLHttpRequest();
					xhr.open("GET", urlRequest);
					xhr.responseType = "json";
					xhr.onload = () => {
						this.setState({
							isMakingRequest:true
						});

						
	let responseData = {
		recipes:this.state.recipes,
		receivedData:this.state.recipes,
		error:this.state.error,
		moreResults:this.state.moreResults
}
	let { moreResults,error, receivedData, recipes} = responseData;

	if(xhr.status === 200){
					//check if query found any recipes
					if (xhr.response.hits.length > 0) {
						receivedData = true;
						error = false;
						if (this.state.recipes.lenght !== 0) {
							recipes = [...this.state.recipes, ...xhr.response.hits]
						} else {
							recipes = xhr.response.hits;
						}
						//check if there are more recipes
						if (xhr.response.more == true) {
							moreResults = true;
						} else {
							//no more recipes available
							moreResults = false;
						}
						resolve(xhr.response);
					} else {
						//the request was succesful but didn´t return data
						receivedData = false;
						resolve(xhr.response);
					}
					}
					//status code not 200
					else {
						this.setState({
							error: true
						})
						error = true;
						reject("Status code wasn´t 200: " + xhr.status);
					}
						//connection problems
						xhr.onerror = () => {
							this.setState({
							receivedData:false
						})
						receivedData = false;
						reject("request did not load because of connection problems");
				}
					//end of request
						//this can be optimized
						this.setState({
						moreResults,receivedData,error, recipes,
						isMakingRequest: false
					})	
					}					
					xhr.send();
			}
			)
			getPromise
				.then(res => console.log(res))
				.catch(err => console.log(err))
				}

	componentDidMount() {  
		//make initial request with sample parameters
		this.apiRequest(this.queryParameters);
	}
		
	componentDidUpdate(){
		console.count();
		//the component updates 2 times every render
	}
	
	handleChange(e){
		e.preventDefault();
		//Reset recipes 
		this.setState({
			recipes: []
		});
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
		//I have been testing and I dont think the user will see
		this.apiRequest(this.queryParameters);
	}
	
	toggleLang(e){
		this.queryParameters.inSpanish = !this.queryParameters.inSpanish;
		console.log(this.queryParameters.inSpanish);
	}

	getValue(e){
		this.queryParameters[e.target.name] = e.target.value;
	}
	
	render(){
		return (
			<React.Fragment> 
				<SearchForm 
					getCheckBoxData={this.getCheckBoxData} 
					getValue={this.getValue} 
					handleChange={this.handleChange} 
					/>
				<MainContainer 
					receivedData={this.state.receivedData}
					data={this.state.recipes}
					moreResultsAvailable={this.state.moreResults} 
					showMoreResults={this.showMoreResults}
					error={this.state.error} 
					isMakingRequest={this.state.isMakingRequest}
					/> 
			</React.Fragment>
				)	
				}
	}

export  default MainSearch 