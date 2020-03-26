import React from "react";
//styles
//import  "./pedrox.css"
import './pedrox.css'
import './components/MainContainer/main-container.css'
import './components/MainContainer/search-item.css'
import './components/Search/search-styles.css'


//Redux stuff
/*
import { Provider } from 'react-redux'
import {createStore} from "redux"
import allReducers from "./reducers/reducersIndex"
import {increment} from "./actions/increment"
import {decrement} from "./actions/decrement"
import {useSelector,useDispatch} from "react-redux"

*/
	//REDUCER
/*const store = createStore(
	allReducers,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)

store.subscribe(() => console.log(store.getState()))
//REDUX END
*/




//MATERIAL UI
//import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

//CONTEXT 
//import {Provider} from "./context"

//Component

import NavBar from "./components/NavBar/NavBar"
import MainSearch from "./components/Search/Search"
/*

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


var ReduxPractice = () => {

	const counter = useSelector(state => state.counter)
	const isLogged = useSelector(state => state.isLogged)
	const dispatch = useDispatch()
return( 
	<div> 
    <h1>Welcome to React Parcel Micro App!</h1>
	<p> Counter: {counter}</p>
	<div> 
	<button onClick={() => dispatch(increment())}>+ </button>
		<button onClick={() => dispatch(decrement())}>- </button>
	</div>
	<button> Login</button>
	
	{isLogged ? <h3>secret secret </h3> : "" } 
	</div> 
		
	)
			

};
	*/

var App = () => {
	return(
	
<div>		
		<NavBar/> 
				<MainSearch/>

</div>
	)
	
}

export  default App;