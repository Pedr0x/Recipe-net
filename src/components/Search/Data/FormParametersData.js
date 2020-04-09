const formParametersData = {
	
			inputData : {
				calories : {
					type:"number",
					labelText:"Max Calories",
					name:"caloriesMax",
					placeholder:""
				},
				excludedIngredients : {
						type:"",
					labelText:"Excluded Ingredients",
					name:"excluded",
					placeholder:"Eg: Pizza"
				}
			},
			 checkboxData : {
				 checkboxDataHealth :{
					 mainData: [
						{
							label:"Balanced",
							name:"balanced"
						},
						{
							label:"High Protein",
							name:"highProtein"
						},
						{
							label:"Low Fat",
							name:"lowFat"
						},
					],
					 subtitle:"Health Restrictions"
				 },
				 checkboxDataDiet : {
					mainData: [
						{
							label:"Vegetarian",
							name:"vegetarian"
						},
						{
							label:"Alcohol Free",
							name:"alcoholFree"
						},
						{
							label:"gluten",
							name:"glutenFree"
						},
					],
					 subtitle: "Diet Restrictions"
				 }
			 }
		 };


export default formParametersData