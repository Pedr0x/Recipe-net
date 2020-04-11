import React from 'react';
var _ = require('lodash');

const SearchItemListMeasures = (props) => {
	if (props.data != false){
	return(
		<ul className="block-list"> 
			{props.data.map(elem => 
				<li key={ _.uniqueId()} className="block-list-item"> 
					  {elem.text} {parseInt(elem.weight)}g
				</li>
			)}
		</ul>
		)}
	else {
		return(<h1> no data</h1>)
	}
}

export  default SearchItemListMeasures;

