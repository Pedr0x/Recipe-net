import React from 'react';
import FormParameters from "./FormParameters";
import SearchFormMainInput from "./SearchFormMainInput";

const SearchForm = React.memo((props) => {
	return(
		<div className="search-form-container-super"> 
			<form  className="search-form"  noValidate autoComplete="off">
					<SearchFormMainInput 
						toggleCallback={props.getCheckBoxData} 
						callback={props.getValue} 
						searchCallback={props.handleChange}/>

					<FormParameters 
						callback={props.callback} 
						getCheckBoxData={props.getCheckBoxData}/>
			</form>
		</div>
	)
});

export default SearchForm 
