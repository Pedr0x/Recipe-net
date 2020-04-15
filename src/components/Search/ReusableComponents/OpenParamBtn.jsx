import React from "react";
import InfoIcon from '@material-ui/icons/Info';

const OpenParamBtn = (props) => {
	
	const OpenButton = 
				  <React.Fragment>
						<InfoIcon  style={{ color: "00c853" }}/> 
					</React.Fragment>
			  
	const ClosedButton = 
				  	<React.Fragment>
						<InfoIcon  style={{ color: "#a2a2a2" }} /> 
					</React.Fragment>

	return(
		<div onClick={props.changeParams}> 
			<button className="search-form-btn"> 
				{ props.isParamOpen 
				 	? OpenButton
				 	: ClosedButton
				}
							</button>
		</div>
	)}

export default  OpenParamBtn;