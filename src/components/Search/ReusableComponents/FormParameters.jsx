import React from 'react';
import Select from "./Select";
import CheckboxContainerSuper from "./CheckboxContainerSuper";
import InputsContainerSuper from "./InputsContainerSuper";
//im not sure if this is the right way. Might fix later
import formParametersData from "../Data/FormParametersData";
const FormParameters = (props) => {
	return(
		<div className="form-parameters">
				<CheckboxContainerSuper  getCheckBoxData={props.getCheckBoxData} checkboxData={formParametersData.checkboxData.checkboxDataDiet.mainData} checkboxSuperSubtitle={formParametersData.checkboxData.checkboxDataDiet.subtitle} />
				<CheckboxContainerSuper getCheckBoxData={props.getCheckBoxData} checkboxData={formParametersData.checkboxData.checkboxDataHealth.mainData} checkboxSuperSubtitle={formParametersData.checkboxData.checkboxDataHealth.subtitle} />
						<InputsContainerSuper callback={props.callback}/>
						<Select  name="cuisineType" callback={props.callback}/>
				</div>
	)
};

export  default FormParameters