import React from 'react';
import spinner from "./spinner1.gif"
var Spinner = () => {
	
	return(
<div className="spinner-container">
	<img src={spinner}
	alt="Loading..."
	style={{
	width:"200px",
	margin:"40px auto",
	display:"block"
	
	}}/>
</div>
	)
}
export  default Spinner;