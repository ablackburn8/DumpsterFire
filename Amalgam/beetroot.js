var films = document.getElementById("films");
var filmstext = document.getElementById("filmstext");
var books = document.getElementById("books");
var bookstext = document.getElementById("bookstext");
var comics = document.getElementById("comics");
var comicstext = document.getElementById("comicstext");
console.log(films);

films.addEventListener("click", function(){
	if(filmstext.className === "hide"){
		filmstext.className = "";
	}else {filmstext.className = "hide";}
});

books.addEventListener("click", function(){
	if(bookstext.className === "hide"){
		bookstext.className = "";
	}else {bookstext.className = "hide";}
});
comics.addEventListener("click", function(){
	if(comicstext.className === "hide"){
		comicstext.className = "";
	}else {comicstext.className = "hide";}
});	
						
						
						
						
						
						
