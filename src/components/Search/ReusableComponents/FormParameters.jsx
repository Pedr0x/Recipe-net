import React from 'react';
import Select from "./Select";
import CheckboxContainerSuper from "./CheckboxContainerSuper";
import InputsContainerSuper from "./InputsContainerSuper";
//im not sure if this is the right way. Might fix later
import formParametersData from "../Data/FormParametersData";
var _ = require('lodash');


const FormParameters = (props) => {
	return(
		<div className="form-parameters scale-in-center">
				{Object.values(formParametersData.checkboxData)
					.map(elem => 
						<CheckboxContainerSuper
							getCheckBoxData={props.getCheckBoxData}
							checkboxSuperSubtitle={elem.subtitle}
							checkboxData={elem.mainData}
							key={_.uniqueId()}
							/>
					)
				}
				<InputsContainerSuper callback={props.callback}/>
				<Select  name="cuisineType" callback={props.callback}/>
		</div>
	)
};
export  default FormParameters