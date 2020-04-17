const formParametersData = {
	
			inputData : {
			
				excludedIngredients : {
						type:"",
					labelText:"Excluded Ingredients",
					name:"excluded",
					placeholder:"Eg: Pizza, cake"
				}
			},
			 checkboxData : {
				 checkboxDataHealth :{
					 mainData: [
					
						{
							label:"Vegetarian",
							name:"vegetarian"
						},
				
						{
							label:"Vegan",
							name:"vegan"

						},
						 {
							label:"Alcohol Free",
							name:"alcoholFree"
						},
						  	{
							label:"Peanut Free",
							name:"peanutFree"
						},
						  	{
							label:"Treenut free",
							name:"treeNutFree"
						},
						  	{
							label:"Sugar Conscious",
							name:"sugarConscious "
						},
						 
					
					],
					 subtitle:"Health Restrictions",
					 field:"health"
				 },
				 checkboxDataDiet : {
					mainData: [

						
						{
							label:"Balanced",
							name:"balanced"
						},
							{
							label:"Low Carb",
							name:"lowCarb"
						},
							{
							label:"High Protein",
							name:"highProtein"
						},
					],
					 subtitle: "Diet Restrictions",
					 field:"diet"
				 }
			 }
		 };


export default formParametersData