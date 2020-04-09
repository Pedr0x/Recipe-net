import React from 'react';
import FormParameters from "./FormParameters";
import SearchFormMainInput from "./SearchFormMainInput";

const SearchForm = (props) => {

	return(
<div className="search-form-container-super"> 
			<form  className="search-form"  noValidate autoComplete="off">
			 <div className="search-form-container">
					<SearchFormMainInput toggleCallback={props.getCheckBoxData} callback={props.getValue} searchCallback={props.handleChange}/>
			<FormParameters callback={props.callback} getCheckBoxData={props.getCheckBoxData}/>
			</div>
	</form>
		</div>
	
	)
};

export default SearchForm 
