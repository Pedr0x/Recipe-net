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
import {MyContext} from "../../App";

//Lodash for creating unique key IDs
var _ = require('lodash');

const SearchItem = (props) => {
		const [value, setValue] = React.useState(0);
		const handleChange = (event, newValue) => {
		setValue(newValue);
	  };
	
	
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
		
	var {
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
		<div className="search-item-super" onClick={() => console.log(searchItemData)}> 
			<Paper  className="search-item" square>
				<CardMedia
					  component="img"
					  alt={title}
					  height="250"
					  image={image}
					  title={title}
					>
				</CardMedia>
				<MyContext.Consumer> 
			{(context) => (
				 <CardHeader
					action={ 

						<IconButton
							 name={title} 
							 data-image={image} 
							 onClick={context.getFavorite}
							 data-url={url}
							 aria-label="favorite">
							{context.state.favoriteRecipes.some(elem => elem.recipeName === title) 
										? <FavoriteIcon color="secondary"/> : <FavoriteIcon/> }
						</IconButton>
					}
					title={<a href={url}>  {title}</a>}
					subheader={`${parseInt(calories)} cal - ${parseInt(weight)}g  - For ${recipeYield}`}
				 /> )}
				</MyContext.Consumer> 

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
						<ul> 
							{ingredients.map(elem => <li key={ _.uniqueId()} > {elem.text}  {parseInt(elem.weight)}g</li>)}
						</ul>
					</TabPanel>

					<TabPanel value={value} index={1}>
						<Typography className="card-list-item-subtitle"> Health Labels </Typography>  
						<ul className="card-list-item-container"> 
							{healthLabels.map(elem => 
								<li key={ _.uniqueId()}  className="card-list-item card-list-item_health"> {elem}</li> )}
						</ul>

						<Typography className="card-list-item-subtitle"> Cautions </Typography>
						<ul className="card-list-item-container">
							{cautions.map(elem => 
										  <li key= { _.uniqueId()} className="card-list-item card-list-item_caution">{elem} </li>)
										  }
						</ul>

					</TabPanel>

					<TabPanel value={value} index={2}>
						Total Nutrients
						<ul className="card-list-item-total-nutrients-container"> 
							{ Object.entries(totalNutrients).map( 
								elem =>  
									<li key= { _.uniqueId()} > {elem[1].label} {parseInt(elem[1].quantity)}{elem[1].unit} </li>
							)
								}
						</ul>
					</TabPanel>
		</Paper>
	</div>
		)}
	


export  default SearchItem 
