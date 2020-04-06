import React from 'react';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

class Checkbox extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			checked:false
		};
		this.toggle = this.toggle.bind(this);	
	}
		toggle(){
		const {checked} = this.state;
		console.log(checked + "start")
			this.setState({
				checked: !checked
			})
		}
	componentDidUpdate(){
		//for some reason, the set state callback
		//started having bugs returning the untoggled 
		//value so i´ll start calling the callback here
		const {name,callback} = this.props;
		callback(this.state.checked,name)
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