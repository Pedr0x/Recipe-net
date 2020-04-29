import React from 'react';
import RefreshIcon from '@material-ui/icons/Refresh';

const ConnectionProblemsInfo = (props) => {
	return(
	<div className="connection-problems-info"> 
		<h1> 
			Connection problems. Click here after a minute to keep loading
		</h1>
		<button 
			className="btn btn_reload" 
			onClick={props.showMoreResults}
		> 
			<RefreshIcon/> 
		</button>
	</div>
	)
}

export default ConnectionProblemsInfo 