import React from 'react'
// import TextField from '@material-ui/core/TextField';
//import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
// import Box from '@material-ui/core/Box';
//import axios from "axios"
import MainContainer from "../MainContainer/MainContainer";
//import Checkbox from '@material-ui/core/Checkbox';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Slider from '@material-ui/core/Slider';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';




//import "./search-styles.css"

class MainSearch extends React.Component {
	  constructor(props) {
    super(props);
    this.state = {
		recipeQueryValue: "",
		recipes: [],
		favorites:[],
		alcoholFree:false,
		vegetarian:false,
		lowFat:false,
		gluten:false,
		balanced:false,
		highProtein:false,
		caloriesMax:null,
		receivedData:true
		
	
		
	};
	    this.handleChange = this.handleChange.bind(this);
	    this.getFavorite = this.getFavorite.bind(this);
	    this.caloriesChanger = this.caloriesChanger.bind(this);
	    this.checkboxChange = this.checkboxChange.bind(this);
	    this.apiRequest = this.apiRequest.bind(this);
	    this.getQueryValue = this.getQueryValue.bind(this);
		 
	  }
	
	
	
	apiRequest(queryObj) {
		
let {	query, howManyCalories, isAlcoholFree, isVegetarian, isLowFat, isGlutenFree, isHighProtein, isBalanced } = queryObj;
		
		
		const appID = "8bc00f3b";
	const appKey = "b1d9d15dadbddc109d83b189b71e533f";

		let ManyCalories = "";
		let vegetarian= "";
		let lowFat = "";
		let alcoholFree = ""
		let glutenFree = "";
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
	var q = `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${appKey}${ManyCalories}${alcoholFree}${vegetarian}${glutenFree}${highProtein}${lowFat}${balanced}`;
	
		const xhr = new XMLHttpRequest();
			xhr.open("GET", q);
			
			xhr.responseType = "json";
			
			xhr.onload = () => {
				var result = xhr.response.hits;
		 var gotData;
		result.length > 0 ? gotData= true : gotData = false

				this.setState({
					recipes: result,
					receivedData: gotData
				})

			};
				xhr.send();

		}
	
	
	
	componentDidMount() {  
		let sampleRequest = {
			query:"donut",
			howManyCalories:false,
			isAlcoholFree:false,
			isVegetarian:false,
			isLowFat:false,
			isGlutenFree:false,
			isHighProtein:false,
			isBalance:false	
		}
		this.apiRequest(sampleRequest)
	
	}
	
	getFavorite(e){
			//	console.log(e.target.name);
		e.stopPropagation()
		 let name = e.target.name;
//		let imgdata = e.target.imgdata;
		let imgdata = e.target.dataset.image;
		let newFavorite = {recipeName:name, image:imgdata}

		if (this.state.favorites.includes(name)){
			console.log("already had that recipe")
		} else {
		
					this.setState(({
      favorites:[  ...this.state.favorites,newFavorite]
    })); 
		
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
	//		this.setState({querssy: e.target.value})
	//	console.log(this.state.query)
	//this is probably wrong might need to fix later
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
	let queryObj = new QueryData(query,howManyCalories,isAlcoholFree,isVegetarian,isLowFat,isGlutenFree,isHighProtein,isBalanced)
	
	this.apiRequest(queryObj)
}

checkboxChange(e){


this.setState({ [e.target.name] : e.target.checked });	
	
}

caloriesChanger(e){
	
	this.setState({ [e.target.name] : e.target.value });	

}


	render(){
		
	let mainSearchStyle = {
		padding: "2%",
		justifyContent: "center"
	}
	
	let checkboxContainer = {
		    gridTemplateColumns:"repeat(auto-fit, minmax(100px, 1fr))",
		display:"grid",
		padding:"1% 5%"
	}
	
	let checkboxItem = {
		alignItems: "center",
justifyContent: "center",
display: "flex",
flexWrap: "wrap",
flexDirection: "column"
	}

	
	return (
		<React.Fragment> 
		<div  className="search-form-containersuper"> 
	<form  className="search-form"   noValidate autoComplete="off" style={mainSearchStyle}>
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

  <div className="checkboxs-container" style={checkboxContainer}>
  	<div style={checkboxItem}  className="checkbox-item"> 
 	     <label> Alcohol Free</label>
  	     <input name="alcoholFree" onChange={this.checkboxChange} className="checkbox"type="checkbox"/>
  	       	      	       	  {  this.state.alcoholFree ?	<CheckBoxIcon color={"primary"}/> : <CheckBoxOutlineBlankIcon  color={"primary"}/> }  

  	</div>
  	
  	 	<div style={checkboxItem}  className="checkbox-item"> 
 	     <label> Vegetarian</label>
  	     <input name="vegetarian" onChange={this.checkboxChange} className="checkbox"type="checkbox" />
  	       	       	     {  this.state.vegetarian ?	<CheckBoxIcon color={"primary"}/> : <CheckBoxOutlineBlankIcon  color={"primary"}/> }  

 	
  	</div>
  	
		 	  	
  		 	<div style={checkboxItem}  className="checkbox-item"> 
 	     <label> Gluten</label>
  	     
  	     <input name="gluten" onChange={this.checkboxChange} className="checkbox" type="checkbox" />
  	
{  this.state.gluten ?	<CheckBoxIcon color={"primary"}/> : <CheckBoxOutlineBlankIcon color={"primary"}/> }  
 		</div>
 		 	 </div>
 		 	 </div>
 		 	 
 		 	 <div className="checkboxs-container-super">
 <h2 className="checkbox-subtitle"> Health restrictions </h2>
  <div className="checkboxs-container" style={checkboxContainer}>		 	 
  		 	<div style={checkboxItem}  className="checkbox-item"> 
 	     <label onClick={this.apiRequest}> Balanced</label>
  	     <input name="balanced" onChange={this.checkboxChange} className="checkbox"type="checkbox" />
  	       	     {  this.state.balanced ?	<CheckBoxIcon color={"primary"}/> : <CheckBoxOutlineBlankIcon color={"primary"}/> }  

  	</div>
  		 	<div style={checkboxItem}  className="checkbox-item"> 
 	     <label> High-Protein</label>
  	     <input name="highProtein" onChange={this.checkboxChange} className="checkbox"type="checkbox" />
  	     {  this.state.highProtein ?	<CheckBoxIcon color={"primary"}/> : <CheckBoxOutlineBlankIcon color={"primary"}/> }  

  	</div>
 		 	
 		 		<div  style={checkboxItem} className="checkbox-item"> 
 	     <label> Low-Fat</label>
  	     <input name="lowFat" onChange={this.checkboxChange} className="checkbox"type="checkbox"/>
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