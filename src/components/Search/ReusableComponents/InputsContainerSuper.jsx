import React from 'react';
import Input from "./Input"
const InputsContainerSuper = (props) => {
	return(
		<div className="inputs-container">
				<Input  callback={props.callback} type="number" labelText="Max Calories" name="caloriesMax"/>
				
				<Input callback={props.callback} labelText="Excluded Ingredients" name="excluded" placeholder="Eg: Pizza"/> 
		</div>
	)
	
}

export default InputsContainerSuper