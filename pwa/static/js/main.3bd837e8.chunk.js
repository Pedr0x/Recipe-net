(this["webpackJsonprecipe-net"]=this["webpackJsonprecipe-net"]||[]).push([[0],{44:function(e,a,t){e.exports=t.p+"static/media/spinner1.0491b1ab.gif"},54:function(e,a,t){e.exports=t(70)},59:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(14),i=t.n(r),l=(t(59),t(60),t(61),t(62),t(89)),s=t(32),o=function(){return c.a.createElement(l.a,{color:"primary",position:"static",style:{fontSize:32,fontWeight:600,padding:"0.35% 1%"}},c.a.createElement(s.a,{variant:"h5",align:"left",fontWeight:600},"RecipeFinder   "))},m=t(33),u=t(28),h=t(29),d=t(9),p=t(30),b=t(31),g=t(45),v=t.n(g),E=t(42),f=t.n(E),k=t(41),y=t.n(k),x=function(e){Object(b.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).state={checked:!1},n.toggle=n.toggle.bind(Object(d.a)(n)),n}return Object(h.a)(t,[{key:"toggle",value:function(){this.setState({checked:!this.state.checked},(function(){this.props.callback(this.state.checked,this.props.name)}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"checkbox-item"},c.a.createElement("label",null," ",this.props.label," "),c.a.createElement("input",{name:this.props.name,className:"checkbox",type:"checkbox",onClick:this.toggle}),this.state.checked?c.a.createElement(y.a,{color:"primary"}):c.a.createElement(f.a,{color:"primary"}))}}]),t}(c.a.Component),N=t(47),C=t(46),q=t(71),j=t(96),D=t(93),O=t(95),F=t(90),w=t(91),S=t(43),P=t.n(S),B=t(92),I=t(67),L=function(e){var a=c.a.useState(0),t=Object(C.a)(a,2),n=t[0],r=t[1];function i(e){var a=e.children,t=e.value,n=e.index,r=Object(N.a)(e,["children","value","index"]);return c.a.createElement(s.a,Object.assign({component:"div",role:"tabpanel",hidden:t!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},r),t===n&&c.a.createElement(O.a,{p:3},a))}var l=e.title,o=e.image,m=e.calories,u=e.ingredients,h=e.healthLabels,d=e.weight,p=e.cautions,b=e.totalNutrients,g=e.getFavorite,v=e.url,E=e.recipeYield;return c.a.createElement(q.a,{className:"search-item",square:!0},c.a.createElement(F.a,{component:"img",alt:l,height:"250",image:o,title:l}),c.a.createElement(w.a,{action:c.a.createElement(B.a,{name:l,"data-image":o,onClick:g,"aria-label":"favorite"},c.a.createElement(P.a,null)),title:c.a.createElement("a",{href:v},"  ",l),subheader:"".concat(parseInt(m)," cal - ").concat(parseInt(d),"g  - For ").concat(E)}),c.a.createElement(j.a,{value:n,indicatorColor:"primary",textColor:"primary",onChange:function(e,a){r(a)},"aria-label":"disabled tabs example"},c.a.createElement(D.a,{label:"Ingredients"}),c.a.createElement(D.a,{label:"Labels"}),c.a.createElement(D.a,{label:"Nutrition"})),c.a.createElement(i,{value:n,index:0},c.a.createElement("ul",null,u.map((function(e){return c.a.createElement("li",{key:I.uniqueId()}," ",e.text,"  ",parseInt(e.weight),"g")})))),c.a.createElement(i,{value:n,index:1},c.a.createElement(s.a,{className:"card-list-item-subtitle"}," Health Labels "),c.a.createElement("ul",{className:"card-list-item-container"},h.map((function(e){return c.a.createElement("li",{key:I.uniqueId(),className:"card-list-item card-list-item_health"}," ",e)}))),c.a.createElement(s.a,{className:"card-list-item-subtitle"}," Cautions "),c.a.createElement("ul",{className:"card-list-item-container"},p.map((function(e){return c.a.createElement("li",{key:I.uniqueId(),className:"card-list-item card-list-item_caution"},e," ")})))),c.a.createElement(i,{value:n,index:2},"Total Nutrients",c.a.createElement("ul",{className:"card-list-item-total-nutrients-container"},Object.entries(b).map((function(e){return c.a.createElement("li",{key:I.uniqueId()}," ",e[1].label," ",parseInt(e[1].quantity),e[1].unit," ")})))))},R=t(44),M=t.n(R),V=function(){return c.a.createElement("div",{className:"spinner-container"},c.a.createElement("img",{src:M.a,alt:"Loading...",style:{width:"200px",margin:"40px auto",display:"block"}}))},Q=function(e){return!0===e.receivedData&&0===e.data.length?c.a.createElement("div",{className:"main-search-container"},c.a.createElement(V,null)):!1===e.receivedData?c.a.createElement("h1",null," We couldn\xb4t find that recipe"):c.a.createElement("div",{className:"main-search-container"},e.data.map((function(a){return c.a.createElement(L,{title:a.recipe.label,image:a.recipe.image,calories:a.recipe.calories,ingredients:a.recipe.ingredients,healthLabels:a.recipe.healthLabels,weight:a.recipe.totalWeight,time:a.recipe.time,dietLabels:a.recipe.dietLabels,cautions:a.recipe.cautions,totalNutrients:a.recipe.totalNutrients,key:a.recipe.url,recipeYield:a.recipe.yield,url:a.recipe.url,getFavorite:e.getFavorite})})))},H=function(e){Object(b.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).state={recipeQueryValue:"",recipes:[],favorites:[],receivedData:!0},n.queryParameters={query:"donuts",alcoholFree:!1,vegetarian:!1,lowFat:!1,gluten:!1,balanced:!1,highProtein:!1,caloriesMax:null},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.getFavorite=n.getFavorite.bind(Object(d.a)(n)),n.caloriesChanger=n.caloriesChanger.bind(Object(d.a)(n)),n.apiRequest=n.apiRequest.bind(Object(d.a)(n)),n.getQueryValue=n.getQueryValue.bind(Object(d.a)(n)),n.getCheckBoxData=n.getCheckBoxData.bind(Object(d.a)(n)),n}return Object(h.a)(t,[{key:"apiRequest",value:function(e){var a=this,t=e.query,n=e.alcoholFree,c=e.vegetarian,r=e.lowFat,i=e.gluten,l=e.balanced,s=e.highProtein,o=e.caloriesMax,m=!1!==o&&o>1?"&calories=0-".concat(o):"",u=c?"&health=vegetarian":"",h=r?"&diet=low-fat":"",d=n?"&health=alcohol-free":"",p=i?"&health=glutenFree":"",b=l?"&diet=balanced":"",g=s?"&diet=high-protein":"",v="https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=".concat(t,"&app_id=8bc00f3b&app_key=b1d9d15dadbddc109d83b189b71e533f").concat(m).concat(d).concat(u).concat(h).concat(p).concat(g).concat(b);new Promise((function(e,t){var n=new XMLHttpRequest;n.open("GET",v),n.responseType="json",n.onload=function(){200===n.status?(n.response.hits.length>0?a.setState({recipes:n.response.hits,receivedData:!0}):a.setState({receivedData:!1}),e(n.response)):(a.setState({receivedData:!1}),t("Status code wasn\xb4t 200")),n.onerror=function(){a.setState({receivedData:!1}),t("request did not load because of connection problems")}},n.send()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}},{key:"componentDidMount",value:function(){this.apiRequest(this.queryParameters)}},{key:"getFavorite",value:function(e){e.stopPropagation();var a={recipeName:e.target.name,image:e.target.dataset.image};if(this.state.favorites.includes(e.target.name))console.log("already had that recipe");else{this.setState({favorites:[].concat(Object(m.a)(this.state.favorites),[a])});var t=[].concat(Object(m.a)(this.state.favorites),[a]);localStorage.setItem("favorites",JSON.stringify(a)),console.log(t)}}},{key:"getQueryValue",value:function(e){this.queryParameters.query=e.target.value}},{key:"handleChange",value:function(e){e.preventDefault(),this.setState({recipes:[]}),this.apiRequest(this.queryParameters)}},{key:"caloriesChanger",value:function(e){this.queryParameters.caloriesMax=e.target.value}},{key:"getCheckBoxData",value:function(e,a){this.queryParameters[a]=e}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"search-form-container-super"},c.a.createElement("form",{className:"search-form",noValidate:!0,autoComplete:"off"},c.a.createElement("div",{className:"search-form-container"},c.a.createElement("div",{className:"search-form-main-panel"},c.a.createElement("h1",{className:"main-search-title"}," Search for a recipe!"),c.a.createElement("div",{className:"input-container"},c.a.createElement("input",{placeholder:"Donuts",className:"query-input",onChange:this.getQueryValue}),c.a.createElement("button",{onClick:this.handleChange,className:"search-button"}," ",c.a.createElement(v.a,null)," ")))),c.a.createElement("div",{className:"form-parameters"},c.a.createElement("div",{className:"checkboxs-container-super"},c.a.createElement("h2",{className:"checkbox-subtitle"}," Dietary Restrictions  "),c.a.createElement("div",{className:"checkboxes-container"},c.a.createElement(x,{callback:this.getCheckBoxData,label:"Alcohol Free",name:"alcoholFree"}),c.a.createElement(x,{callback:this.getCheckBoxData,label:"Vegetarian",name:"vegetarian"}),c.a.createElement(x,{callback:this.getCheckBoxData,label:"Gluten",name:"gluten"}))),c.a.createElement("div",{className:"checkboxs-container-super"},c.a.createElement("h2",{className:"checkbox-subtitle"}," Health restrictions "),c.a.createElement("div",{className:"checkboxes-container"},c.a.createElement(x,{callback:this.getCheckBoxData,label:"Balanced",name:"balanced"}),c.a.createElement(x,{callback:this.getCheckBoxData,label:"High Protein",name:"highProtein"}),c.a.createElement(x,{callback:this.getCheckBoxData,label:"Low Fat",name:"lowFat"}))),c.a.createElement("div",{className:"calories-max-container"},c.a.createElement("h2",{className:"checkbox-subtitle"}," Max Calories"),c.a.createElement("input",{className:"calories-input",onChange:this.caloriesChanger,name:"caloriesMax",type:"number",min:"1",max:"30000"}))))),c.a.createElement(Q,{receivedData:this.state.receivedData,data:this.state.recipes,getFavorite:this.getFavorite}))}}]),t}(c.a.Component),W=function(){return c.a.createElement("div",null,c.a.createElement(o,null),c.a.createElement(H,null))};i.a.render(c.a.createElement(W,null),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.3bd837e8.chunk.js.map