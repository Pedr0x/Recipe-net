import React from 'react';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

class Checkbox extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			checked:false
		}
				
		this.toggle = this.toggle.bind(this)	
	}
		toggle(){
			this.setState({
				checked: !this.state.checked
			}	
, 			(function () {this.props.callback(this.state.checked, this.props.name)}))
		}
	
	render(){
		return(
			<div className="checkbox-item">
			 <label> {this.props.label} </label>
				<input 
					name={this.props.name}
					className="checkbox"
					type="checkbox"
					onClick={this.toggle}
					/>

				{ this.state.checked ?	<CheckBoxIcon color={"primary"}/> : <CheckBoxOutlineBlankIcon  color={"primary"}/> }  
				
			</div>
		
		)
	}
}

export default Checkbox 
