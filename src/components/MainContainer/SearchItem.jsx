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

import SearchItemList from "./SearchItemList"
import SearchItemListMeasures from "./SearchItemListMeasures"
import SearchItemGrid from "./SearchItemGrid"


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
							 onClick={context.getFavorite}
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
						<SearchItemListMeasures data={ingredients}/>
					</TabPanel>

					<TabPanel value={value} index={1}>
						<SearchItemList type="health" data={healthLabels} labelText=" Health Labels"/>
						<SearchItemList type="caution" data={cautions} labelText="Cautions"/>
					</TabPanel>

					<TabPanel value={value} index={2}>
						<SearchItemGrid labelText={"Total Nutrients"} data={Object.entries(totalNutrients)}/>
					</TabPanel>
		</Paper>
		)}
	
export  default SearchItem 
