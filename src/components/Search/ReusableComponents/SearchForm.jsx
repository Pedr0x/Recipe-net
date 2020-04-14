import React, { useState, useEffect } from 'react';
import FormParameters from "./FormParameters";
import SearchFormMainInput from "./SearchFormMainInput";
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';



const SearchForm = React.memo((props) => {
	  const [isParamOpen, setParamOpen] = useState(false);
	
	
	const changeParams = (e) => {
		e.preventDefault();
		setParamOpen(!isParamOpen)
		console.log("toggled");
	}
	
	return(
		<div className="search-form-container-super"> 
			<form  className="search-form"  noValidate autoComplete="off">
					<SearchFormMainInput 
						toggleLang={props.toggleLang} 
						getQueryName={props.getQueryName} 
						searchCallback={props.handleChange}/>
						
					<button className="search-form-btn" onClick={changeParams}> { isParamOpen ? <CloseIcon/> :  <InfoIcon/>}</button>
				
					{isParamOpen 
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
