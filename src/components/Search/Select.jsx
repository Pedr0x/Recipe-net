
import React from "react";
import "./select-styles.css"

class Select extends  React.Component{
	
	constructor(props) {
    super(props);
    this.state = {
		active:false
	}}
	render(){
		return(
		<div onChange={this.props.callback} className="select-container">
		<label>Cuisine Type</label>
			<select name={this.props.name} onChange={this.props.callback}>
				<option value="">Select:</option>
				<option value="indian">Indian</option>
				<option value="italian">italian</option>				
			</select>
		</div>
		)
	}
}

export default Select;