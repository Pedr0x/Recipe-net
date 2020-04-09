import React from 'react';

const ChexboxContainerSuper = (props) => {
	return(
		<div className="checkboxs-container-super"> 
				<h2 className="checkbox-subtitle"> {props.checkboxSuperSubtitle}  </h2>
				 <div className="checkboxes-container">
				 {props.checkboxData.map(elem => 
						<Checkbox callback={props.callback} label={elem.label} name={elem.name}/>)}
				</div>
		</div>
	)
	
}
export ChexboxContainerSuper default;