
export const updateFavorite = (itemValues) => {
		return {type: "UPDATE_FAVORITE", itemValues};
};

export const deleteFavorite = (param) => {
		return {type: "DELETE_FAVORITE", param};
};
