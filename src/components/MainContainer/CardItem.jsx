import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import SearchItemList from "./SearchItem/SearchItemList";
import SearchItemListMeasures from "./SearchItem/SearchItemListMeasures";
import SearchItemGrid from "./SearchItem//SearchItemGrid";

import "./card-item.css";
const CardItem = (props) => {
const {
		label,
		image,
		calories,
		ingredients,
		healthLabels,
		 totalWeight,
		//time,
		//dietLabels,
		cautions,
		totalNutrients,
		url
	} = props.data;
	
const recipeYield = props.data.yield;
	return(
		<div className="card-item-container"> 
		
		<div className="card-item-img-container" style={{background : `url(${image})`}}/> 
				
		<div className="card-item-main-container"> 
			<div className="card-header">
			<a className="card-header-title" href={url}> {label}</a>
				<div className="card-header-icon-container"> 
					<IconButton> 
						<FavoriteIcon/>
					</IconButton>
				</div>
			
			<h4 className="card-header-subtitle">
{				 `${parseInt(calories)} cal - ${parseInt(totalWeight)}g  - For ${recipeYield}`  }
			</h4>
			
		</div>
		
	  <div className="card-item-tabs-container">
		  <Tabs>
    			<TabList className="card-item-tab-title-container">
					  <Tab className="card-item-tab-title">Ingredients</Tab>
					  <Tab className="card-item-tab-title">Label </Tab>
					  <Tab className="card-item-tab-title">Nutrition </Tab>
				</TabList>
			<TabPanel>
			<SearchItemListMeasures className="card-item-ingredients-container" data={ingredients}/>
		</TabPanel>
		<TabPanel>
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
			<TabPanel>
		 							<SearchItemGrid 
							labelText={"Total Nutrients"} 
							data={Object.entries(totalNutrients)}
						/>
		</TabPanel>
 		
  		</Tabs>
	</div>
	</div>
	</div>
		)
}

export default CardItem;