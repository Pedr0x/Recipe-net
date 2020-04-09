import React from 'react';
import Input from "./Input"
import formParametersData from "../Data/FormParametersData";
var _ = require('lodash');

const InputsContainerSuper = (props) => {
	return(
		<div className="inputs-container">
		{Object.values(formParametersData.inputData).map(elem => 
		<Input
			callback={props.callback}
			labelText={elem.labelText}
			name={elem.name}
			type={elem.type}
			key={_.uniqueId()}
			/>
								 ) }
		</div>
	)
}

export default InputsContainerSuper