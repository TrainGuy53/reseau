// ================================================================================================================= //
//                                                                                                                   //
//                                                   Train Guy 53                                                    //
//                                                                                                                   //
// ================================================================================================================= //

var theme = "clair";
var titreDeLaPageParent = window.parent.document.title;
var url = "https://validator.w3.org/nu/?doc=https%3A%2F%2Ftrainguy53.github.io%2Freseau%2F";
var pages = {
	"Accueil": "index.html",
	"Locomotives": "locomotives.html",
	"Voitures": "voitures.html",
	"Wagons": "wagons.html",
	"Gares": "gares.html"
};

function changerDeTheme() {

	"use strict";
	if (theme === "sombre") {
		theme = "clair";
		document.getElementById("clair").style.display = "none";
		document.getElementById("sombre").style.display = "block";
	} else {
		theme = "sombre";
		document.getElementById("clair").style.display = "block";
		document.getElementById("sombre").style.display = "none";
	}
	switch (titreDeLaPageParent) {
		case "Accueil":
			window.parent.document.getElementById("tgv").src = "images/tgv" + theme + ".gif";
			break;
		case "Locomotives":
			window.parent.document.getElementById("temps").src = "images/temps" + theme + ".png";
			break;
	}
	for (var i = document.getElementsByClassName("imgFond").length - 1; i >= 0; i--) {
		document.getElementsByClassName("imgFond")[i].src = "nav/" + theme + "/" + i + ".png";
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

// ================================================================================================================= //
//                                                                                                                   //
//                                                   Train Guy 53                                                    //
//                                                                                                                   //
// ================================================================================================================= //