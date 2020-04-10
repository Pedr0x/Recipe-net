import React from 'react';

const ConnectionProblemsInfo = (props) => {
	return(
	<div className="connection-problems-info"> 
		<h1>  Connection problems. Click here after a minute to keep loading recipes</h1>
		<button className="btn btn_reload" onClick={props.showMoreResults}> reload</button>
			</div>
	)
}

export default ConnectionProblemsInfo 