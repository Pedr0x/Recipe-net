import React from "react";
import InfoIcon from '@material-ui/icons/Info';

const OpenParamBtn = (props) => {
	
	const OpenButton = 
				  <div className="open-param-button_">
						<InfoIcon/>
					</div>
			  
	const ClosedButton = 
				  	<div className="open-param-button_closed">
							<InfoIcon/>
					</div>

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