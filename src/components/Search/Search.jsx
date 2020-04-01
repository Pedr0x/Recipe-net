import React from 'react'
//Material UI Components

import SearchIcon from '@material-ui/icons/Search';
import MainContainer from "../MainContainer/MainContainer";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

class MainSearch extends React.Component {
	 constructor(props) {
    super(props);
    this.state = {
		recipeQueryValue: "",
		recipes: [],
		favorites:[],
	
		receivedData:true

	};
		
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
		this.toggle = this.toggle.bind(this);
 
	  }
	
	apiRequest(queryObj) {
		
		let {
			query,
			howManyCalories,
			isAlcoholFree,
			isLowFat,
			isGlutenFree,
			isHighProtein,
			isBalanced
		} = queryObj;		
		
		const appID = "8bc00f3b";
		const appKey = "b1d9d15dadbddc109d83b189b71e533f";
		var isVegetarian = true
		let ManyCalories = "";
		let vegetarian = isVegetarian  ? '&health=vegetarian' : '"';
		let lowFat = "";
		let alcoholFree = ""
		let glutenFree =  "";
		let balanced= "";
		let highProtein = "";
		
		isAlcoholFree ? alcoholFree ="&health=alcohol-free" : alcoholFree = "";
		isVegetarian ? vegetarian ="&health=vegetarian" : vegetarian = "";
		isLowFat ? lowFat="&diet=low-fat" : lowFat= "";
		isBalanced ? balanced = "&diet=balanced" : balanced = "";
		isHighProtein ? highProtein= "&diet=high-protein" : highProtein = "";
		isGlutenFree ? glutenFree= "&health=glutenFree" : glutenFree = "";

		if (howManyCalories !== null && howManyCalories > 1) {
				ManyCalories = `&calories=0-${this.state.caloriesMax}`;
		}
		
		//const urlRequest = `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${appKey}${howManyCalories}${isAlcoholFree}${isVegetarian}${isLowFat}${isGlutenFree}${isHighProtein}${isBalanced}`;

		const urlRequest = `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${appKey}`;

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
		/*let sampleRequest = {
			query:"donut",
			howManyCalories:false,
			isAlcoholFree:false,
			isVegetarian:false,
			isLowFat:false,
			isGlutenFree:false,
			isHighProtein:false,
			isBalance:false	
		}*/
				console.log(this.queryParameters)

		this.apiRequest(this.queryParameters)
	}
	
	getFavorite(e){
		e.stopPropagation()
		const newFavorite = {
			recipeName: e.target.name, 
			image:	e.target.dataset.image
		}

		if (this.state.favorites.includes(e.target.name)){
			console.log("already had that recipe")
		} 
		else {
	  this.setState(({
      favorites:[  ...this.state.favorites,newFavorite]
    	})) 
	  
		let allFavorites = [...this.state.favorites, newFavorite]
		localStorage.setItem("favorites", JSON.stringify(newFavorite))
		console.log(allFavorites)
		}
	}

	getQueryValue(e){
		let value = e.target.value;
		this.setState({recipeQueryValue: e.target.value});
	}
	
	handleChange = (e) => {
		e.preventDefault();

		let {recipeQueryValue : query,
			 alcoholFree : isAlcoholFree,
			 vegetarian : isVegetarian,
			 lowFat : isLowFat,
			 balanced : isBalanced,
			 highProtein : isHighProtein,
			 glutenFree : isGlutenFree,
			 caloriesMax : howManyCalories}  = this.state;

		this.setState({
			recipes: []
		})

		class QueryData {
			constructor(query,howManyCalories,isAlcoholFree,isVegetarian,isLowFat,isGlutenFree,isHighProtein,isBalanced) {
				this.howManyCalories = howManyCalories;
				this.query = query;
				this.isVegetarian = isVegetarian
				this.isAlcoholFree = isAlcoholFree;
				this.isLowFat = isLowFat;
				this.isGlutenFree = isGlutenFree;
				this.isHighProtein = isHighProtein;
				this.isBalanced = isBalanced;
		  }
		}
		
		//Make a new object with the data
		let queryObj = new QueryData(query,howManyCalories,isAlcoholFree,isVegetarian,isLowFat,isGlutenFree,isHighProtein,isBalanced)
		//Pass the object as a parameter to the request
		this.apiRequest(this.queryParameters)
		
	}
queryParameters
	checkboxChange(e){
		{ this.queryParameters[e.target.name] = e.target.checked };	
		console.log(e.target.name);
		console.log(e.target.checked)

	}

	caloriesChanger(e){
		this.setState({ [e.target.name] : e.target.value });	
}

toggle(){
	this.name = !this.name;
	console.log(this.name);
}

	render(){
		
		return (
			<React.Fragment> 
				<div  className="search-form-containersuper" onClick={this.toggle}> 
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
										<div className="checkbox-item"> 
											<label> Alcohol Free</label>
											<input name="alcoholFree" 
												onChange={this.checkboxChange} 
												className="checkbox" type="checkbox"/>
												{  this.queryParameters.alcoholFree ?	<CheckBoxIcon color={"primary"} /> : <CheckBoxOutlineBlankIcon  color={"primary"}/> }  

										</div>

										<div  className="checkbox-item"> 
											<label> Vegetarian</label>
											<input
												name="vegetarian" 
												onChange={this.checkboxChange} 
												className="checkbox"type="checkbox" />
												{ this.state.vegetarian ?	<CheckBoxIcon color={"primary"}/> : <CheckBoxOutlineBlankIcon  color={"primary"}/> }  
											</div>

										<div className="checkbox-item"> 
											<label> Gluten</label>
											<input 
												name="gluten"
												onChange={this.checkboxChange}
												className="checkbox" 
												type="checkbox" />
												{  this.state.gluten ?	<CheckBoxIcon color={"primary"}/> : <CheckBoxOutlineBlankIcon color={"primary"}/> }  
										</div>
								</div>
							</div>
							<div className="checkboxs-container-super">
								<h2 className="checkbox-subtitle"> Health restrictions </h2>
								<div className="checkboxes-container">

									<div  className="checkbox-item"> 
										<label onClick={this.apiRequest}> Balanced</label>
										  <input
										   name="balanced"
										   onChange={this.checkboxChange}
										   className="checkbox"type="checkbox" />
										   {  this.state.balanced ?	<CheckBoxIcon color={"primary"}/> : <CheckBoxOutlineBlankIcon color={"primary"}/> }  
									</div>

									<div className="checkbox-item"> 
										<label> High-Protein</label>
										<input
										 name="highProtein"
										 onChange={this.checkboxChange}
										 className="checkbox"
										 type="checkbox" />
										{  this.state.highProtein ?	<CheckBoxIcon color={"primary"}/> : <CheckBoxOutlineBlankIcon color={"primary"}/> }  
									</div>

								<div className="checkbox-item"> 
									<label> Low-Fat</label>
									<input
										name="lowFat"
										onChange={this.checkboxChange}
										className="checkbox"
										type="checkbox"/>
										 {  this.state.lowFat ?	<CheckBoxIcon color={"primary"}/> : <CheckBoxOutlineBlankIcon color={"primary"}/> }  
								</div>

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