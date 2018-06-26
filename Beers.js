var beers = [];

function addBeer (name, category, rating) {
	var newBeer = {
		name : name,
		category : category,
		rating : rating
	}
beers.push(newBeer);
// le but d'envoyer newBeer dans l'array cest pour les mettre ds un tableu
// pcq on a pas de base de données et les appeler/loop plus facilement
// on prend les parametre on cree un object (avec les parametres) et on les envoi
// dans un tableau
}


$('.post-beer').click(function(e) {
	e.preventDefault();
	addBeer($('.beer-input').val(), $('.category-input').val(), $('#rating').val());
	renderBeer();
// pour appeler les valeur dans les inputs
// $('.beer-input').val();
// $('.category-input').val();
// on place les valeurs ('.beer-input').val(), $('.category-input').val()) à la place
// des parametre de la fonction addBeer()
})

function renderBeer () {
	$('.beers').children('.uls').children('.ils').remove(); // on remove parce
// pour eviter que lordi affiche ce quil a garde en memoire inititalement
for (var i = 0; i < beers.length; i++) {
	$('.beers').children(".uls").append("<li class= 'ils'> Names: " + 
		capitalize(beers[i].name) + "</li>" + "<li class= 'ils'> Category: " + 
		capitalize(beers[i].category) + "</li>" + "<li class= 'ils'> Rating: " +
		beers[i].rating +"</li>");
	// on ajoute la fonction capitalize au names et category
var image = addImage(beers[i].name);
}
}

function capitalize (str) {
	var reg = str.replace(/^[a-z]/,function(premiereLettre) { 
		return premiereLettre.toUpperCase(); // on cree une fonction car il y
// a une action sur le mot a faire
	});
	return reg; //on retourne reg parce qu'on veut retourner le mot

}

var typeBeers = [
	"stella",
	"corona",
	"heinkein",
	"tuborg",
	"chang"
];


function addImage (nameBe) {
	for (var i = 0; i < typeBeers.length; i++) {
		var match = nameBe.match('\\b'+typeBeers[i]+'\\b');
	if (match != null) {
//		$(".uls").append("<img src='" + nameBe + ".jpg'>");
		break;
	}
//	else { 
//	 $(".uls").append("<img src='coming_soon.png'>");}
}
if (i < typeBeers.length) {
		$('.beers').children(".uls").children(".ils:last").append("<img src='" + nameBe + ".jpg'>");
	}
else {
 $('.beers').children(".uls").children(".ils:last").append("<img src='coming_soon.png'>");}

}

/* pour la function addImage, on utilise un loop for pour rentrer dans le 
tableau typeBeers.
- on creer une variable match pour rentrer le regex (avec une variable dedans d'ou 
les \\b)
- ensuite on utilise if different de null pour savoir si le nom de la bierre qu'on
va taper dans le input va correspondre a un des nom du tableau typeBeers
- on utilise un break pour pas que la loop continue si ca match.

- on refait un if pour append les images. 
- si on est encore dans le tableau, on append l'image d'une des bierres
- si on est or du tableau, on append l'image coming soon
*/
