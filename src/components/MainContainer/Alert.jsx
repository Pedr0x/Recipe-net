import React from "react";

class Alert extends React.Component {
	
	render(props){
		
		return(
		<div className="alert-container">
		<div className="alert">
			<h3 className="alert-text">You have added {this.props.title} to favorites</h3>
			
		</div>
		
	</div>
		)
	}
	
}

export  default Alert