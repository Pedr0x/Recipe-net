import React from 'react';
//Material UI Components
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import SearchItemList from "./SearchItemList";
import SearchItemListMeasures from "./SearchItemListMeasures";
import SearchItemGrid from "./SearchItemGrid";
import "./search-item.css";
import { connect } from 'react-redux';


const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    deleteFavorite: (param) => 
	 	dispatch({ type: 'DELETE_FAVORITE',  param}),
	 updateFavorite: (itemValues) => 
	  	dispatch({type: "UPDATE_FAVORITE", itemValues})
  }
};

function mapStateToProps(state) {
  return {
    globalFavorites: state
  };
}

const SearchItem = React.memo((props) => {
		const [value, setValue] = React.useState(0);
		const handleChange = (event, newValue) => {
		setValue(newValue);
	  };
	
	function updateLocalStorage(value, action){
		console.log(props.globalFavorites)
		if (action == "upd"){
		localStorage.setItem("favorites", JSON.stringify([...props.globalFavorites, value]));		
		//console.log(localStorage.favorites, "local favorites");
		} else {
			console.log(props.globalFavorites, "glb")
			//const news = JSON.parse(localStorage.favorites).filter(recipe => recipe.recipeName !== value);
			const news = props.globalFavorites.filter(recipe => recipe.recipeName !== value.recipeName);
			console.log(news, "news")
			localStorage.setItem("favorites", JSON.stringify(news));
		}
	}
	
	 function cardUpdateFavorites(itemValues) {
		updateLocalStorage(itemValues, "upd");
		props.updateFavorite(itemValues)
	}
	
	 function cardDeleteFavorites(itemValues) {
		 updateLocalStorage(itemValues,"del");
		props.deleteFavorite(itemValues)
	}
	
	//this is the TabPanal Component from Material UI
	function TabPanel(props) {
		const { children, value, index, ...other } = props;
  		return (
    		<Typography
			  component="div"
			  role="tabpanel"
			  hidden={value !== index}
			  id={`simple-tabpanel-${index}`}
			  aria-labelledby={`simple-tab-${index}`}
			  {...other}
			>
      		{value === index && <Box p={3}>{children}</Box>}
    		</Typography>
  );
	}
		
	const {
		title,
		image,
		calories,
		ingredients,
		healthLabels,
		weight,
		//time,
		//dietLabels,
		cautions,
		totalNutrients,
		url,
		recipeYield,
	} = props;
	
	const searchItemData = {
		image,
		recipeName:title,
		url
	}
	return(
		<div className="search-item-container"> 
			<Paper  className="search-item" square>
				<CardMedia
					  component="img"
					  alt={title}
					  height="250"
					  image={image}
					  title={title}
					>
				</CardMedia>
				 <CardHeader
					action={
						props.globalFavorites.some(elem => elem.recipeName === title) 
							? <IconButton
									onClick={() => 
										cardDeleteFavorites(searchItemData)}
									aria-label="favorite"
								>
									<FavoriteIcon color="secondary"/>
							</IconButton>
							: <IconButton
									onClick={() =>
										cardUpdateFavorites(searchItemData)}
									aria-label="favorite"
								>
									<FavoriteIcon/>
							</IconButton>

					}
					title={
						<a className="search-item-link" href={url}>
						  	{title}
						  </a>
					}
					subheader={`${parseInt(calories)} cal - ${parseInt(weight)}g  - For ${recipeYield}`}
				 /> 
				<Tabs
					value={value}
					indicatorColor="primary"
					textColor="primary"
					onChange={handleChange}
					aria-label="disabled tabs example"
				>
					<Tab label="Ingredients" />
					<Tab label="Labels" />
					 <Tab label="Nutrition" />
				</Tabs>
				
					<TabPanel value={value} index={0}>
						<SearchItemListMeasures data={ingredients}/>
					</TabPanel>
					<TabPanel value={value} index={1}>
						<SearchItemList 
							type="health" 
							data={healthLabels} 
							labelText=" Health Labels"
						/>
						<SearchItemList 
							type="caution" 
							data={cautions} 
							labelText="Cautions"
						/>
					</TabPanel>
					<TabPanel value={value} index={2}>
						<SearchItemGrid 
							labelText={"Total Nutrients"} 
							data={Object.entries(totalNutrients)}
						/>
					</TabPanel>
			</Paper>
		</div>
		)})
	
export default connect(mapStateToProps , mapDispatchToProps)(SearchItem);

