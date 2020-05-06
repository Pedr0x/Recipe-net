import React from 'react';
const _ = require('lodash');

const BlockList = (props) => {
	if (Array.isArray(props.data) && props.data.length >== 1){
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
	} else {
                return(
                <div>
                    No data
                </div>
                )
            }
}

export default BlockList;
