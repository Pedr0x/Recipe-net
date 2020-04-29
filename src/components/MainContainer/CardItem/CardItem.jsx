import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import SearchItemList from "./SearchItemList";
import SearchItemListMeasures from "./SearchItemListMeasures";
import SearchItemGrid from "./SearchItemGrid";
import CardItemHeader from "./CardItemHeader";

import "./card-item.css";
const CardItem = (props) => {
	const {
			label: recipeName ,
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
			<div 
				className="card-item-img-container" 
				style={{background : `url(${image})`}}
			/> 
			<div className="card-item-main-container"> 
				<CardItemHeader 
					url={url} 
					recipeName={recipeName} 
					image={image} 
					calories={calories} 
					totalWeight={totalWeight} 
					recipeYield={recipeYield}
				/>
		
			  	<div className="card-item-tabs-container">
				  <Tabs>
						<TabList className="card-item-tab-title-container">
							  <Tab className="card-item-tab-title">
							  Ingredients
							  </Tab>
							  <Tab className="card-item-tab-title">
							  Label 
							  </Tab>
							  <Tab className="card-item-tab-title">
							  Nutrition 
							  </Tab>
						</TabList>

					<TabPanel>
					<SearchItemListMeasures 
						className="card-item-ingredients-container" 
						data={ingredients}
					/>

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