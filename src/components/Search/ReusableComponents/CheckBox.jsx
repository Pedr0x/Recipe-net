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
			this.setState({
				checked: !checked
			})
		};
	
	componentDidMount(){
		//this wil sync the checkbox value everytime
		//the parameters open
		const {name,getCheckBoxData,field} = this.props;
		getCheckBoxData(this.state.checked,name,field)
	}
	
	componentDidUpdate(){
		const {name,getCheckBoxData,field} = this.props;
		getCheckBoxData(this.state.checked,name,field)
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
						{ this.state.checked 
							?	<CheckBoxIcon color={"primary"}/> 
							: <CheckBoxOutlineBlankIcon  color={"primary"}/> 
						}  
			</div>
		)
	}
}

export default Checkbox 