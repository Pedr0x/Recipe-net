import React from 'react'
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
		receivedData:true

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
		};
		 
	    this.handleChange = this.handleChange.bind(this);
	    this.getFavorite = this.getFavorite.bind(this);
	    this.caloriesChanger = this.caloriesChanger.bind(this);
	    this.checkboxChange = this.checkboxChange.bind(this);
	    this.apiRequest = this.apiRequest.bind(this);
	    this.getQueryValue = this.getQueryValue.bind(this);
 		this.getCheckBoxData = this.getCheckBoxData.bind(this);
	  }
	
	apiRequest(queryObj) {
		
		let {
			query,
			alcoholFree,
			vegetarian,
			lowFat,
			gluten,
			balanced,
			highProtein,
			caloriesMax
		} = queryObj;		
		
		const appID = "8bc00f3b";
		const appKey = "b1d9d15dadbddc109d83b189b71e533f";
				
		//conditional parameters
		const ManyCalories = caloriesMax != false && caloriesMax > 1  
			?  `&calories=0-${caloriesMax}` : "";
		const isVegetarian = vegetarian  ? '&health=vegetarian' : "";
		const isLowFat = lowFat ? "&diet=low-fat" : "";
		const isAlcoholFree = alcoholFree ? "&health=alcohol-free" : "";
		const isGlutenFree = gluten ? "&health=glutenFree" : "";
		const isBalanced = balanced ? "&diet=balanced" : "";
		const isHighProtein = highProtein ? "&diet=high-protein" : "";
		
		const urlRequest = `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${appKey}${ManyCalories}${isAlcoholFree}${isVegetarian}${isLowFat}${isGlutenFree}${isHighProtein}${isBalanced}`;

		const xhr = new XMLHttpRequest();
				xhr.open("GET", urlRequest);
				xhr.responseType = "json";
				xhr.onload = () => {
					let gotData;
					xhr.response.hits.length > 0 ? gotData= true : gotData = false
					this.setState({
						recipes: xhr.response.hits,
						receivedData: gotData
					})
				};
				xhr.send();
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
		this.apiRequest(this.queryParameters);
	}
	
	checkboxChange(e){
			{ this.queryParameters[e.target.name] = e.target.checked };	
	}

	caloriesChanger(e){
		this.queryParameters.caloriesMax = e.target.value; 
	}

	getCheckBoxData(checkBoxState,name){
		this.queryParameters[name] = checkBoxState;
	}

	render(){
		
		return (
			<React.Fragment> 
				<div  className="search-form-containersuper"> 
					<form  className="search-form"   noValidate autoComplete="off">
						 <div className="search-form-container">
							 <div className="search-form-main-panel">
								 <h1 className="main-search-title"> Search for a recipe!</h1>
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

				<MainContainer receivedData={this.state.receivedData} data={this.state.recipes} getFavorite={this.getFavorite}/>
			</React.Fragment>
				)	
				}
	}

export  default MainSearch 