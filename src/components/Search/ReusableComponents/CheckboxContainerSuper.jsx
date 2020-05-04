import React from 'react';
import CheckBox from "./CheckBox";
const _ = require('lodash');

const CheckboxContainerSuper = (props) => {
	return(
		<div className="checkboxs-container-super"> 
			<h2 className="form-subtitle"> 
			 	{props.checkboxSuperSubtitle}  
			</h2>
			 <div className="checkboxes-container">
				 {props.checkboxData.map(elem => 
						<CheckBox 
							key={_.uniqueId()} 
							getCheckBoxData={props.getCheckBoxData} 
							label={elem.label} 
							name={elem.name}
							field={props.field}
							sub={props.checkboxSuperSubtitle}
						/>
					)
				}
			  </div>
		</div>
	)
}

export  default CheckboxContainerSuper 