import React, { useState, useEffect } from 'react';
import FormParameters from "./FormParameters";
import SearchFormMainInput from "./SearchFormMainInput";

const SearchForm = React.memo((props) => {
	  const [isActive, setActive] = useState(false);
	
	function toggle(e){
		e.preventDefault();
		setActive(!isActive);
		console.log("toggled")
	}
	
	useEffect(() => {
		console.log("use effect works")
	})
	
	return(
		<div className="search-form-container-super"> 
			<form  className="search-form"  noValidate autoComplete="off">
					<SearchFormMainInput 
						toggleCallback={props.getCheckBoxData} 
						getQueryName={props.getQueryName} 
						searchCallback={props.handleChange}/>

				<button className="search-form-btn" onClick={toggle}> { isActive ? "Less" : "More"}</button>
				
					{isActive 
						? <FormParameters 
						callback={props.callback} 
						getCheckBoxData={props.getCheckBoxData}/>
						: null
					}
			
			</form>
		</div>
	)
});

export default SearchForm 
