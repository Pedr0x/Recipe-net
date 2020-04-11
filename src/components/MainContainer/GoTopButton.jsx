import React from 'react';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
 import "./go-top-button.css"
const GoTopButton = (props) =>{
	return(
		<div className="action-btn-container">
		<button className="action-button" onClick={props.callback}>
			<ArrowUpward className="action-btn-icon"/>
		</button>				
		</div>
	
	)
}
export default GoTopButton