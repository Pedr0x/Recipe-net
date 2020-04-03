import React from 'react';
//Material UI Components
import SearchIcon from '@material-ui/icons/Search';

import CheckBox from './CheckBox';
import MainContainer from "../MainContainer/MainContainer";

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
			moreResultsAvailable:false
		};
		 
	    this.handleChange = this.handleChange.bind(this);
	    this.getFavorite = this.getFavorite.bind(this);
	    this.caloriesChanger = this.caloriesChanger.bind(this);
	    this.apiRequest = this.apiRequest.bind(this);
	    this.getQueryValue = this.getQueryValue.bind(this);
 		this.getCheckBoxData = this.getCheckBoxData.bind(this);
		this.showMoreResults = this.showMoreResults.bind(this);

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
			pageQ
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

		
				const urlRequest = `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${query}&app_id=8bc00f3b&app_key=b1d9d15dadbddc109d83b189b71e533f&from=0&to=${pagesToFetch}${ManyCalories}${isAlcoholFree}${isVegetarian}${isLowFat}${isGlutenFree}${isHighProtein}${isBalanced}`;

		let getPromise = new Promise((resolve,reject) => {
			const xhr = new XMLHttpRequest();
				xhr.open("GET", urlRequest);
				xhr.responseType = "json";
				xhr.onload = () => {
					if(xhr.status === 200){
						if(xhr.response.hits.length > 0){	
							this.setState({
							recipes: xhr.response.hits,
							receivedData: true
						})
							if(xhr.response.more == true){
								console.log("more results available");
								this.setState({
									moreResults:true
								});
								this.queryParameters.moreResultsAvailable = true;
							} else {
								console.log("the arent more results available")
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
		this.apiRequest(this.queryParameters);
	}
	
	
	getFavorite(e){
		//this function adds the targeted recipe value and image
		//and adds it to an array in the state and local storage
		e.stopPropagation()
		const newFavorite = {
			recipeName: e.target.name, 
			image:	e.target.dataset.image
		}

		if (this.state.favorites.includes(e.target.name)) {
			console.log("already had that recipe")
		} 
		
		else {
	    	this.setState(({
				favorites:[  ...this.state.favorites,newFavorite]
    		}
						  )
			)
			
		let allFavorites = [...this.state.favorites, newFavorite]
		localStorage.setItem("favorites", JSON.stringify(newFavorite))
		console.log(allFavorites)
		}
				//this is for future use
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
	
	caloriesChanger(e){
		this.queryParameters.caloriesMax = e.target.value; 
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

	render(){
		
		return (
			<React.Fragment> 
				<div  className="search-form-container-super"> 
					<form  className="search-form"  noValidate autoComplete="off">
						 <div className="search-form-container">
							 <div className="search-form-main-panel">
								 <h1 className="main-search-title" onClick={() => console.log(this.state)}> Search for a recipe!</h1>
								 <div className="input-container">
									<input placeholder="Donuts" className="query-input" onChange={this.getQueryValue}/>
									<button onClick={this.handleChange} className="search-button"> <SearchIcon/> </button>
								 </div>
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
						<div className="calories-max-container">
							<h2 className="checkbox-subtitle"> Max Calories</h2>
							<input className="calories-input" onChange={this.caloriesChanger} name="caloriesMax" type="number"  min="1" max="30000"/>
						 </div>
						</div>
					</form>
				</div>

				<MainContainer receivedData={this.state.receivedData} data={this.state.recipes} getFavorite={this.getFavorite} moreResultsAvailable={this.state.moreResults} showMoreResults={this.showMoreResults}/> 
			</React.Fragment>
				)	
				}
	}

export  default MainSearch 