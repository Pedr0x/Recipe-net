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
					placeholder:"Eg: Pizza, cake"
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
						 {
							 label:"Celery-free" ,
							 name:"celery-free" 
						 }, 
						 	 {
							 label: "Crustcean-free",
							 name: "crustceanFree" 
						 }
						 ,	 {
							 label: "Dairy Free",
							 name: "dairyFree"
						 }
						 ,	 {
							 label:"Egg Free" ,
							 name:"eggFree" 
						 },
						 	 {
							 label:"Fish Free" ,
							 name: "fishFree"
						 }
						 ,
						 	 {
							 label:"FODMAP-free" ,
							 name: "fodmapFree"
						 },
						 	 {
							 label: "Keto" ,
							 name: "keto"
						 }
						 ,	 {
							 label: "Kidney friendly",
							 name:"kidneyFriendly" 
						 }
						 ,	 {
							 label:"Kosher",
							 name: "kosher" 
						 },
						 {
							 label:"Low pottassium",
							 name:"lowPottassium"
						 }
						 , {
							 label:"Lupine Free" ,
							 name:"lupineFree"
						 }
					
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
							label:"Gluten Free",
							name:"gluten"
						},
					],
					 subtitle: "Diet Restrictions"
				 }
			 }
		 };


export default formParametersData