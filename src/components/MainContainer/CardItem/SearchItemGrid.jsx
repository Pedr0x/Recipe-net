import React from 'react';
const _ = require('lodash');

const SearchItemGrid = (props) => {
	if (Array.isArray(props.data) && props.data.length >= 1) {
		return(
			<React.Fragment>
				<h2 className="card-list-item-subtitle">  
					{props.labelText} 
				</h2>
				<ul 
					className="grid-list card-list-item-total-nutrients-container"
				> 
					{props.data.map(elem => 
						<li key= { _.uniqueId()}>
							{ ` ${elem[1].label}  ${parseInt(elem[1].quantity)}${elem[1].unit}` }
						</li>
						)
					}
				</ul>
			 </React.Fragment>
		)
} else {
	return(
		<h1> no data</h1>
		)
	}
}

export  default SearchItemGrid;

