
import ToggleOffIcon from '@material-ui/icons/ToggleOff';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';
import React from "react";

//toggle is false by default

class ToggleItem extends React.Component{
	constructor(props) {
    super(props);
    this.state = {
		active:false
	}
		this.toggle = this.toggle.bind(this);	

	}
	
	toggle(){
		this.setState({
				active: !this.state.active
			}	
	, () => this.props.callback()) 
	}
	
	render(){
	return(
	
		 <div className="toggle-item-container" onClick={this.toggle}>
						  <label className="card-list-item-subtitle card-list-item-subtitle_small"> {this.props.labelText} </label>
						  
			{this.state.active ? <ToggleOnIcon color="primary" fontSize="large" /> : <ToggleOffIcon fontSize="large"/> }
						  	
						  </div>
		
		
		)
	}
}
export  default ToggleItem