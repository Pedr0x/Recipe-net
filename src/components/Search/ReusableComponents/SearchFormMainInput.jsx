import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ToggleItem from "./Toggle"
const SearchFormMainInput = (props) => {
	return(
		 <div className="search-form-main-panel">
			 <h1 className="main-search-title"> Search for a recipe!</h1>
			 <div className="input-container">
				<input name="query" placeholder="Donuts" className="query-input" onChange={props.callback}/>
				<button onClick={props.searchCallback} className="search-button"> <SearchIcon/> </button>
			 </div>
			   <ToggleItem labelText="Buscar en español" callback={props.toggleCallback} name="inSpanish"/>
			</div>
	)
};

export default SearchFormMainInput