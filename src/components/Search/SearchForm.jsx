import React from 'react';
import FormParameters from "./FormParameters"
import SearchFormMainInput from "./SearchFormMainInput"
const SearchForm = (props) => {

	return(
			<form  className="search-form"  noValidate autoComplete="off">
			 <div className="search-form-container">
					<SearchFormMainInput toggleCallback={props.getCheckBoxData} callback={props.getValue} searchCallback={props.handleChange}/>
					
			<FormParameters callback={props.callback} checkboxData={props.checkboxData} />
			<InputContainerSuper callback={props.callback} />
			<Select  name="cuisineType" callback={this.getValue}/>
			</div>
	</form>
	
	)
};

export SearchForm default
