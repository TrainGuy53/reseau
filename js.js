// ================================================================================================================= //
//                                                                                                                   //
//                                                   Train Guy 53                                                    //
//                                                                                                                   //
// ================================================================================================================= //

var themeDeLaPage = "clair";
var titreDeLaPageParent = window.parent.document.title;
var url = "https://validator.w3.org/nu/?doc=https%3A%2F%2Ftrainguy53.github.io%2Freseau%2F";
var pages = {
	"Accueil": "index.html",
	"Locomotives": "locomotives.html",
	"Voitures": "voitures.html",
	"Wagons": "wagons.html",
	"Maquettes": "maquettes.html"
};
const pause = 1500; // milisecondes

function changerDeThemeDeLaPage() {

	"use strict";
	if (themeDeLaPage === "sombre") {
		themeDeLaPage = "clair";
		document.getElementById("clair").style.display = "none";
		document.getElementById("sombre").style.display = "block";
	} else {
		themeDeLaPage = "sombre";
		document.getElementById("clair").style.display = "block";
		document.getElementById("sombre").style.display = "none";
	}
	switch (titreDeLaPageParent) {
		case "Accueil":
			window.parent.document.getElementById("tgv").src = "index/tgv/" + themeDeLaPage + ".gif";
			break;
		case "Locomotives":
			window.parent.document.getElementById("temps").src = "locomotives/temps/" + themeDeLaPage + ".png";
			break;
	}
	for (var i = document.getElementsByClassName("imgFond").length - 1; i >= 0; i--) {
		document.getElementsByClassName("imgFond")[i].src = "nav/" + themeDeLaPage + "/" + i + ".png";
	}

}

function validation(langage) {

	"use strict";
	switch (langage) {
		case "html":
			if (titreDeLaPageParent in pages) {window.parent.location.href = url + pages[titreDeLaPageParent];}
			break;
		case "css":
			window.parent.location.href = "https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ftrainguy53.github.io%2Freseau%2Fcss.css";
			break;
		// case "js":
		//  window.parent.location.href = "";
		//  break;
	}

}

function basculerImages() { // ne marche pas :(

	"use strict";
	const imagesReseau = document.getElementsByClassName("imagesResau"); // apparement, cela ne selectionne pas les images...
	const imagesInternet = document.getElementsByClassName("imagesInternet"); // idem
	for (var i = imagesReseau.length - 1; i >= 0; i--) {
		imagesReseau[i].style.display = "block";
		imagesInternet[i].style.display = "none";
	}
	setInterval(
		function() {
			console.log(imagesReseau);
			if (imagesReseau[0].style.display === "none") {
				for (var i = imagesReseau.length - 1; i >= 0; i--) {
					imagesReseau[i].style.display = "block";
					imagesInternet.style.display = "none";
				}
			} else {
				for (var i = imagesReseau.length - 1; i >= 0; i--) {
					imagesReseau[i].style.display = "block";
					imagesInternet[i].style.display = "none";
				}
			}
		},
		pause
	);

}

// ================================================================================================================= //
//                                                                                                                   //
//                                                   Train Guy 53                                                    //
//                                                                                                                   //
// ================================================================================================================= //