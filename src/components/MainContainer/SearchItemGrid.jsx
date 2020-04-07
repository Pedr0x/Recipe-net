import React from 'react';
var _ = require('lodash');

const SearchItemGrid = (props) => {
	if (props.data != false){
	return(
		<React.Fragment>
			{props.labelText}
			<ul className="grid-list card-list-item-total-nutrients-container"> 
				{props.data.map(elem => 
					<li key= { _.uniqueId()} >
						{elem[1].label} {parseInt(elem[1].quantity)}{elem[1].unit} 
					</li>
						   )}
			</ul>
		 </React.Fragment>
	)}
else{
	return(<h1> no data</h1>)
}
		}

export  default SearchItemGrid;

