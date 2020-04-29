import React from 'react';
var _ = require('lodash');

const BlockList = (props) => {
	if (props.data != false){
	return(
		<ul> 
		<h3 className="card-list-item-subtitle"> 
			{props.labelText}
		</h3>
		<ul className="card-list-item-container"> 
				{props.data.map(elem => 
					<li 
					  key={ _.uniqueId()} 
					  className={`card-list-item card-list-item_${props.type}`}
					> 
						{elem}
					</li>
				)}
	</ul>
		)
	}
}

export default BlockList;
