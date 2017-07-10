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
		if(el.highlighted === true){
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

	/*var listado = document.getElementById('listado');
	var nuevoDiv = document.createElement('div');
	nuevoDiv.setAttribute('id', 'contenedor');
	listado.appendChild(nuevoDiv);
	
	var contenedor = document.getElementById('contenedor');
	var contenido = document.createElement('a');
	contenido.setAttribute('class', 'item-recipe');
	contenedor.appendChild(contenido);
	listado.appendChild(contenido);

	var attri = document.createElement('span');
	attri.setAttribute('class', 'attribution');
	contenido.appendChild(attri);
	listado.appendChild(attri);

	var titulo = document.createElement('span');
	titulo.setAttribute('class', 'title-recipe');
	var textoTitulo = document.createTextNode(recipe.title);
	titulo.appendChild(textoTitulo);
	attri.appendChild(titulo);
	listado.appendChild(titulo);

	var meta = document.createElement('span');
	meta.setAttribute('class', 'metadata-recipe');
	attri.appendChild(meta);
	listado.appendChild(meta);

	var autor = document.createElement('span');
	autor.setAttribute('class', 'author-recipe');
	var textoAutor = document.createTextNode(recipe.source.name)
	autor.appendChild(textoAutor);
	meta.appendChild(autor);
	listado.appendChild(autor)

	var book = document.createElement('span');
	book.setAttribute('class', 'bookmarks-recipe');
	meta.appendChild(book);
	listado.appendChild(book);

	var icon = document.createElement('span');
	icon.setAttribute('class', 'icon-bookmark');
	book.appendChild(icon);
	listado.appendChild(icon);

	var imagen = document.createElement('img');
	imagen.setAttribute('src', 'img/recipes/320x350/'+recipe.name+'.jpg');
	contenido.appendChild(imagen);*/

    $(".list-recipes").append("<a class='item-recipe' href='#'>" + 
    	"<span class='attribution'>" + "<span class='title-recipe'>" + 
    	recipe.title + "</span>" + "<span class='metadata-recipe'>" + 
    	"<span class='author-recipe'>" + recipe.source.name + " </span>" + 
    	"<span class='bookmarks-recipe'>" +"<span class='icon-bookmark'></span>" +
    	"</span>" +"</span>" + "</span>" +"<img src='img/recipes/640x800/" + recipe.name +".jpg'>" +
    	"</a>");
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
	var flecha = document.getElementById('flecha');

	flecha.setAttribute('class', 'hidden');
}
ocultarFlecha();

function printNews(){
	var parrafo = document.getElementById('new');
	var nuevoParrafo = document.createElement('p');
	var texto = document.createTextNode('nuevas recetas');
	nuevoParrafo.appendChild(texto);
	parrafo.appendChild(nuevoParrafo);
}
printNews();