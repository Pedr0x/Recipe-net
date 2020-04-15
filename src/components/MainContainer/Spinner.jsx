import React from 'react';
import spinner from "./spinner1.gif"
const Spinner = () => {
	
	return(
		<div className="spinner-container">
			<img 
				className="spinner" src={spinner}
				alt="Loading..."
				/>
</div>
	)
}
export  default Spinner;
