
const globalTodos = (state = [], action) => {
	switch(action.type){
		case "ADD_ITEM" :
			return [...state, {text:action.text, id:action.id}]
		case "DELETE_ITEM":
			return state.filter(elem => elem.id !== action.id)
		default:
			return state
		}
	  }	

export default globalTodos


const favoritesReducer = (state = [], action) => {
	
	switch(action.type) {
		case "UPDATE_FAVORITE" :
			return e
		case "DELETE_FAVORITE" :
			return state.filter(recipe => recipe.recipeName !== action.param)
		default:
			return state
			
	}
}