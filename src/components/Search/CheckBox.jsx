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
		const {name,callback} = this.props;
		const {checked} = this.state;
			this.setState({
				checked: !checked
			}	
, 			(function () {callback(checked,name)}))
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