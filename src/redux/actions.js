
export const updateFavorite = (itemValues) => {
		return {type: "UPDATE_FAVORITE", itemValues};
};

export const deleteFavorite = (recipeName) => {
		return {type: "DELETE_FAVORITE", recipeName};
};
