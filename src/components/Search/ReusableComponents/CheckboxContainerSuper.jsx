import React from 'react';
import CheckBox from "./CheckBox";
var _ = require('lodash');

const CheckboxContainerSuper = (props) => {
	return(
		<div className="checkboxs-container-super"> 
				<h2 className="checkbox-subtitle"> {props.checkboxSuperSubtitle}  </h2>
				 <div className="checkboxes-container">
				 {props.checkboxData.map(elem => 
						<CheckBox key={_.uniqueId()} getCheckBoxData={props.getCheckBoxData} label={elem.label} name={elem.name}/>)}
				</div>
		</div>
	)
	
}
export  default CheckboxContainerSuper 