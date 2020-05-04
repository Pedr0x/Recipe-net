import React from 'react';
import FormParameters from "./FormParameters";
import SearchFormMainInput from "./SearchFormMainInput";
import OpenParamBtn from "./OpenParamBtn";

class SearchForm extends React.Component {
	 constructor(props) {
		super(props);
		this.state = {
		isParamOpen:false
		};
	 	this.changeParams = this.changeParams.bind(this);
	 }
	
	 changeParams (e) {
		 e.preventDefault();
		 this.setState({isParamOpen : !this.state.isParamOpen})
	 }
	
	shouldComponentUpdate(nextProps, nextState){
		if (this.state !== nextState) {
      return true;
    } else {
		return false
		}
	}
	
	render(){
		return(
		<div className="search-form-container-super"> 
			<form  className="search-form"  noValidate autoComplete="off">
				<OpenParamBtn 
					IsParamOpen={this.state.isParamOpen} 
					changeParams={this.changeParams}
				/>
				<SearchFormMainInput 
					toggleLang={this.props.toggleLang} 
					getQueryName={this.props.getQueryName} 
					searchCallback={this.props.handleChange}
				/>
				{this.state.isParamOpen 
					&& <FormParameters 
						callback={this.props.callback} 
						getCheckBoxData={this.props.getCheckBoxData}
						/>
				}
			</form>
		</div>
		)
	}
}

export default SearchForm 
