import React from "react";

const InputRange = (props) => {
	
	return(
		<div className="input-range-container">
			<label className="card-list-item-subtitle "> {props.labelText}</label>
			<input className="input-range" onChange={props.callback} name={props.name} type="number"  min="1" max="30000" type="number"/> 
		</div>
	
	)
	
}

export default InputRange


/*<div className="calories-max-container">
							<h2 className="checkbox-subtitle"> Max Calories</h2>
							<input className="calories-input" onChange={this.caloriesChanger} name="caloriesMax" type="number"  min="1" max="30000"/>
						 </div>*/