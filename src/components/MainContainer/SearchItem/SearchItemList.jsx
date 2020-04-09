import React from 'react';
var _ = require('lodash');

const SearchItemList = (props) => {
	if (props.data != false){
	return(
		<React.Fragment> 
		<h3 className="card-list-item-subtitle"> {props.labelText}</h3>
		<ul className="card-list-item-container"> 
			{props.data.map(elem => 
				<li key={ _.uniqueId()} 
					className={`card-list-item card-list-item_${props.type}`}> 
					  {elem}
				</li>
			)}
		</ul>
		</React.Fragment>
		)}
	else{
		return(
			<div>
			<h3 className="card-list-item-subtitle"> {props.labelText}</h3>
			<h4 className="card-list-item-subtext_no-data"> This item doesn´t have any {props.type} labels</h4>
		 	</div>
			)
	}
}

export  default SearchItemList;

