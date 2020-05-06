import React from 'react';
const _ = require('lodash');

const SearchItemList = (props) => {
	const LabelText = () => {
		return(
		<h3 className="card-list-item-subtitle"> 
			{props.labelText}
		</h3>
		)
	}
	
	if (Array.isArray(props.data) && props.data.length >= 1) {
		return(
			<React.Fragment> 
				<LabelText/>
				<ul className="card-list-item-container"> 
					{props.data.map(elem => 
						<li key={ _.uniqueId()} 
							className={`card-list-item card-list-item_${props.type}`}> 
							  {elem}
						</li>
					)}
				</ul>
			</React.Fragment>
			)
	} else {
	  	return (
			<div>
				<LabelText/>
				<h4 className="card-list-item-subtext_no-data"> 
					This item doesn´t have any {props.type} labels
				</h4>
		 	</div>
		)
	}
}

export  default SearchItemList;

