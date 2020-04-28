import React from "react";
//styles
//import  "./pedrox.css"
//CSS
import './pedrox.css';
//React Router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider  } from 'react-redux'
import { createStore } from 'redux'

//Components
import MyProvider from "./MyProvider"
import NavBar from "./components/NavBar/NavBar"
import MainSearch from "./components/Search/Search"
import Favorites from './components/FavoriteRecipes/Favorites';
import NoMatch from "./components/NoMatch/NoMatch";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import favoritesReducer from "./redux/reducers"
import "./app.css"
export let MyContext = React.createContext();

const myStore = createStore(favoritesReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const App = () => {
	return(
		<div className="all-container">
			<MyProvider>
			<Provider store={myStore}> 
				<Router>
					<Header/>
					<div className="super-container"> 
						<NavBar/>
						<Switch> 
							<Route path="/" exact component={MainSearch}/>
							<Route path="/Favorites" component={Favorites}/>
							<Route path="/About" component={About}/>
							<Route component={NoMatch}/>
					</Switch>
					</div>
				</Router>
			</Provider>
			</MyProvider>
		 </div>
	)
}

export  default App;