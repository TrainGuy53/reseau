// ================================================================================================================= //
//                                                                                                                   //
//                                                   Train Guy 53                                                    //
//                                                                                                                   //
// ================================================================================================================= //

var themeDeLaPage = "clair";
const titreDeLaPageParent = window.parent.document.title;
const url = "https://validator.w3.org/nu/?doc=https%3A%2F%2Ftrainguy53.github.io%2Freseau%2F";
const pages = {
	"Accueil": "index.html",
	"Locomotives": "locomotives.html",
	"Voitures": "voitures.html",
	"Wagons": "wagons.html",
	"Maquettes": "maquettes.html"
};
const pause = 1500; // milisecondes

function changerLeThemeDeLaPage() {

	"use strict";
	if (themeDeLaPage === "sombre") {
		themeDeLaPage = "clair";
		clair.style.display = "none";
		sombre.style.display = "block";
	} else {
		themeDeLaPage = "sombre";
		clair.style.display = "block";
		sombre.style.display = "none";
	}
	switch (titreDeLaPageParent) {
		case "Accueil":
			window.parent.tgv.src = "index/tgv/" + themeDeLaPage + ".gif";
			break;
		case "Locomotives":
			window.parent.temps.src = "locomotives/temps/" + themeDeLaPage + ".png";
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
		case "js":
			window.parent.location.href = "";
			break;
	}

}

function basculerImages() {

	const imagesReseau = document.querySelectorAll('.imagesReseau');
	const imagesInternet = document.querySelectorAll('.imagesInternet');
	
	imagesReseau.forEach(img => img.style.display = 'block');
	imagesInternet.forEach(img => img.style.display = 'none');
	
	setInterval(
		() => {
			imagesReseau.forEach(img => img.style.display = img.style.display === 'none' ? 'block' : 'none');
			imagesInternet.forEach(img => img.style.display = img.style.display === 'none' ? 'block' : 'none');
		},
		pause
	);

}

// ================================================================================================================= //
//                                                                                                                   //
//                                                   Train Guy 53                                                    //
//                                                                                                                   //
// ================================================================================================================= //