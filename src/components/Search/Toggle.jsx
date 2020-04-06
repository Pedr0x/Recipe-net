
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

		this.name = this.props.name;
	}
	
	toggle(){
		this.setState({
				active: !this.state.active
			}	
					 )
	}
	
	componentDidUpdate(){
		const {active} = this.state;
		const {callback,name} = this.props
		callback(active,name);
	}
	
	render(){
		let Info;
		let Toggle;
		if(this.state.active){
			Info = <label className="toggle-subtitle toggle-subtitle_active"> {this.props.labelText}</label>;
			 Toggle = <ToggleOnIcon color="primary" fontSize="large" /> 
		} else {
			Info = <label className="toggle-subtitle"> {this.props.labelText}</label>;
			Toggle = <ToggleOffIcon fontSize="large"/>
				
				}	
	return(
	
		 <div className="toggle-item-container" onClick={this.toggle}>
		 	{Info} {Toggle}
		</div>
		)
	}
}
export  default ToggleItem