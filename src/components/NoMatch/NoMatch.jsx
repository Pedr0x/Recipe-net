import React from 'react';
import "./no-match-styles.css"
const NoMatch = () => {
	return(
		<div className="no-match-container"> 
			<div> 
				<h1 className="no-match-title"> 404</h1>
				<p clasName="no-match-subtext"> We couldn´t find what you were looking for </p> 
			</div>
		</div>
	
	)
}

export default NoMatch 