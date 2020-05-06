const localFavorites = localStorage.favorites ? JSON.parse(localStorage.favorites) : [];

const favoritesReducer = (state = localFavorites, action) => {
    switch (action.type) {
        case "UPDATE_FAVORITE":
            return [...state, action.itemValues]
        case "DELETE_FAVORITE":
            return state.filter(recipe => recipe.recipeName !== action.recipeName)
        default:
            return state
    }
};

export default favoritesReducer
