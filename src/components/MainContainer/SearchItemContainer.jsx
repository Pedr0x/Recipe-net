import React from 'react';
import CardItem from "./CardItem/CardItem";
const _ = require('lodash');

const SearchItemContainer = (props) => {
	return(
		<React.Fragment> 
			{props.data 
				? props.data.map(elem =>
						<CardItem key={_.uniqueId()} data={elem.recipe}/> 
					)
				: null				 
			}
		</React.Fragment>
	)
}

export default SearchItemContainer 