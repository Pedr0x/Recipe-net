import React from 'react';
import Select from "./Select";
import CheckboxContainerSuper from "./CheckboxContainerSuper";
import InputsContainerSuper from "./InputsContainerSuper";
//im not sure if this is the right way. Might fix later
import formParametersData from "../Data/FormParametersData";
const _ = require('lodash');

const FormParameters = (props) => {
	return(
		<div className="form-parameters-super">
			<div className="form-parameters scale-in-center">
					{Object.values(formParametersData.checkboxData)
						.map(elem => 
							<CheckboxContainerSuper
								getCheckBoxData={props.getCheckBoxData}
								checkboxSuperSubtitle={elem.subtitle}
								checkboxData={elem.mainData}
								key={_.uniqueId()}
								field={elem.field}
							/>
						)
					}
					<InputsContainerSuper callback={props.callback}/>
					<Select  name="cuisineType" callback={props.callback}/>
			</div>
		 </div>
	)
};

export  default FormParameters

