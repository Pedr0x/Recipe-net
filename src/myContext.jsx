import React from "react";

var myContext = React.createContext()


class MyProvider extends React.Component {
	state = {
		favoriteRecipes:[]
	}
	
	render(){
		
		return(
		<MyContext.Provider>
		
		{this.props.children}
		</MyContext.Provider>
		)
	}
}