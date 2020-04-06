import React from 'react';
//Material UI Components
import SearchIcon from '@material-ui/icons/Search';

import CheckBox from './CheckBox';
import MainContainer from "../MainContainer/MainContainer";
import Input from './InputRange';
import ToggleItem from './Toggle';
import Select from './Select';

import  './input-range.css';

class MainSearch extends React.Component {
	 constructor(props) {
    super(props);
    this.state = {
		recipeQueryValue: "",
		recipes: [],
		favorites:[],
		receivedData:true,
		moreResults:false,
		//renderMoreResults:false,
		page:1

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
			pageQ: 3,
			moreResultsAvailable:false,
			inSpanish:false,
			cuisineType:"",
			excluded:""
		};
		 
		 this.options = {
  			root: null, /* or `null` for page as root */
  			threshold: 0.1 // Only observe when the entire box is in view
		 }
		 
		this.observer = new IntersectionObserver(this.callback, this.options);
	    this.handleChange = this.handleChange.bind(this);
	    this.apiRequest = this.apiRequest.bind(this);
	    this.getQueryValue = this.getQueryValue.bind(this);
 		this.getCheckBoxData = this.getCheckBoxData.bind(this);
		this.showMoreResults = this.showMoreResults.bind(this);
		this.scrolla = this.scrolla.bind(this);
		this.callback = this.callback.bind(this);
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
		const pagesToFetch = pageQ * 2;
		const requestLang = inSpanish ? "https://test-es.edamam.com/search" : "https://api.edamam.com/search";
		const cuisine = cuisineType ? `&cuisineType=${cuisineType}`: "";
		const excludedIngredients = excluded ? ("&" + excluded.split(",").map(elem=>  `excluded=${elem}`).join("&")) : "" ;
		
		const urlRequest = `https://cors-anywhere.herokuapp.com/${requestLang}?q=${query}&app_id=8bc00f3b&app_key=b1d9d15dadbddc109d83b189b71e533f&from=0&to=${pagesToFetch}${ManyCalories}${isAlcoholFree}${isVegetarian}${isLowFat}${isGlutenFree}${isHighProtein}${isBalanced}${cuisine}${excludedIngredients}`;

		let getPromise = new Promise((resolve,reject) => {
			const xhr = new XMLHttpRequest();
				xhr.open("GET", urlRequest);
				xhr.responseType = "json";
				xhr.onload = () => {
					if(xhr.status === 200){
						//check if query found any recipes
						if(xhr.response.hits.length > 0){	
							this.setState({
							recipes: xhr.response.hits,
							receivedData: true
						})
							//check if there are more recipes
							if(xhr.response.more == true){
								console.log("more results available");
								this.setState({
									moreResults:true
								});
								this.queryParameters.moreResultsAvailable = true;
							} else {
									console.log("there arent more results available")
									this.setState({
										moreResults:false
									});
									this.queryParameters.moreResultsAvailable = false;
							}
						}
						else{
							//the request was succesful but didn´t return data
							this.setState({
								receivedData: false
					});
						}
						resolve(xhr.response);
					}
					//status code not 200
					else{
						this.setState({
							receivedData:false
						})
						reject("Status code wasn´t 200");
					}
					//connection problems
					xhr.onerror = () => {
						this.setState({
							receivedData:false
						});
						reject("request did not load because of connection problems")
			}
				};
			
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
	
	getQueryValue(e){
		this.queryParameters.query = e.target.value;
	}
	
	handleChange(e){
		e.preventDefault();
		//Reset recipes 
		this.setState({
			recipes: []
		});
		//reset the pages request
		this.queryParameters.pageQ = 3;
		this.apiRequest(this.queryParameters);
	}
	
	getCheckBoxData(checkBoxState,name){
		this.queryParameters[name] = checkBoxState;
	}
	
	showMoreResults(){
		
		/*this.setState({
			showMoreResults:true
		})*/
		this.queryParameters.pageQ += 1; 
		console.log(this.queryParameters)
		this.apiRequest(this.queryParameters)
	}

	callback(){
		console.log("scroll works")
	}

	scrolla(e){
		console.log(1)
		this.observer.observe(e.target);
	}
	
	toggleLang(e){
		this.queryParameters.inSpanish = !this.queryParameters.inSpanish;
		console.log(this.queryParameters.inSpanish);
	}
	
	getValue(e){
		this.queryParameters[e.target.name] = e.target.value;
		console.log(this.queryParameters)
	}
	
	render(){
		
		return (
			<React.Fragment> 
				<div  className="search-form-container-super"> 
					<form  className="search-form"  noValidate autoComplete="off">
						 <div className="search-form-container">
							 <div className="search-form-main-panel" onClick={() => console.log(this.queryParameters)}>
								 <h1 className="main-search-title" onClick={() => console.log(this.state)}> Search for a recipe!</h1>
								 <div className="input-container">
									<input name="query" placeholder="Donuts" className="query-input" onChange={this.getValue}/>
									<button onClick={this.handleChange} className="search-button"> <SearchIcon/> </button>
								 </div>
								   <ToggleItem labelText="change query lang" callback={this.toggleLang}/>
								</div>
							 </div>
						<div className="form-parameters">
							<div className="checkboxs-container-super"> 
								<h2 className="checkbox-subtitle"> Dietary Restrictions  </h2>

								 <div className="checkboxes-container">
									<CheckBox  callback={this.getCheckBoxData} label="Alcohol Free" name="alcoholFree"/>

									<CheckBox  callback={this.getCheckBoxData} label="Vegetarian" name="vegetarian"/>

									<CheckBox  callback={this.getCheckBoxData} label="Gluten" name="gluten"/>
								</div>
							</div>
							
							<div className="checkboxs-container-super">
							<h2 className="checkbox-subtitle"> Health restrictions </h2>								
								<div className="checkboxes-container">
								<CheckBox  callback={this.getCheckBoxData} label="Balanced" name="balanced"/>

								<CheckBox  callback={this.getCheckBoxData} label="High Protein" name="highProtein"/>

								<CheckBox  callback={this.getCheckBoxData} label="Low Fat" name="lowFat"/>
						</div>
					</div>
					<div className="inputs-container">
						
						 <Input  callback={this.getValue} type="number" labelText="Max Calories" name="caloriesMax"/>
							<Input callback={this.getValue} labelText="Excluded Ingredients" name="excluded" placeholder="Eg: Pizza, peas"/> 
						  </div>
						  <Select  name="cuisineType" callback={this.getValue}/>
						</div>
					</form>
				</div>

				<MainContainer receivedData={this.state.receivedData} data={this.state.recipes} moreResultsAvailable={this.state.moreResults} showMoreResults={this.showMoreResults}
								event={this.scrolla}
									/> 
			</React.Fragment>
				)	
				}
	}

export  default MainSearch 