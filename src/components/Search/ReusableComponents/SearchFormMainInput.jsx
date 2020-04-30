import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ToggleItem from "./Toggle";

import data from "../Data/FormMainInputData";

const SearchFormMainInput = (props) => {
	return(
		<div className="search-form-container">
			 <div className="search-form-main-panel">
			 	<h1 className="main-search-title">  
					{data.mainSearch.mainSearchTitle} 
				 </h1>
				 <div className="input-container">
					<input 
						name={data.inputName} 
						placeholder={data.mainSearch.placeholder} 
						className="query-input" 
						onChange={props.getQueryName}
					/>
					<button 
						onClick={props.searchCallback} 
						className="search-button"
					> 
						<SearchIcon/> 
					</button>
				 </div>
				   <div> 
					   <ToggleItem 
							labelText={data.toggleItem.text} 
							callback={props.toggleLang} 
							name={data.toggleItem.name}
						/>
				</div>
			</div>
	</div>
	)
};

export default SearchFormMainInput