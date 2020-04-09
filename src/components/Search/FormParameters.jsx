import React from 'react';
import Select from "./Select";
import CheckboxContainerSuper from "./CheckboxContainerSuper";

const FormParameters = (props) => {
	return(
		<div className="form-parameters">
				<CheckboxContainerSuper  callback={props.callback} checkboxData={props.checkboxData.checkboxDataDiet.mainData} checkboxSuperSubtitle={checkboxData.checkboxDataDiet.subtitle} />
				<CheckboxContainerSuper callback={props.callback} checkboxData={props.checkboxData.checkboxDataHealth.mainData} checkboxSuperSubtitle={props.checkboxData.checkboxDataHealth.subtitle} />
						<InputContainerSuper callback={props.callback}/>
						<Select  name="cuisineType" callback={props.callback}/>
				</div>
	)
};

export FormParameters default