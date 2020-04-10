import React from "react";

const Input = (props) => {
	
	
	if(props.type === "number"){
	return(
		<div className="input-range-container">
			<label className="form-subtitle"> {props.labelText}</label>
			<input className="input-range" onChange={props.callback} name={props.name}  placeholder={props.placeholder}  min="1" max="30000" type="number"/> 
		</div>
	)
} else {
	return (
	<div className="input-range-container">
			<label className="form-subtitle"> {props.labelText}</label>
			<input className="input-range" onChange={props.callback} name={props.name}  placeholder={props.placeholder} /> 
		</div>
	)
}


}

export default Input


/*<div className="calories-max-container">
							<h2 className="checkbox-subtitle"> Max Calories</h2>
							<input className="calories-input" onChange={this.caloriesChanger} name="caloriesMax" type="number"  min="1" max="30000"/>
						 </div>*/