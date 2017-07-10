$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	
	recipesArray.filter(function(el){
		if(el.highlighted == true){
			renderRecipe(el);
		}
	})
}





/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}

function ocultarFlecha(){
	var flecha = document.getElementById("flecha");

	flecha.setAttribute("class", "hidden");
}
ocultarFlecha();

function printNews(){
	var parrafo = document.getElementById("new");
	nuevoParrafo = document.createElement('p');
	var texto = document.createTextNode('nuevas recetas');
	nuevoParrafo.appendChild(texto);
	parrafo.appendChild(nuevoParrafo);
}
printNews();