// ================================================================================================================= //
//                                                                                                                   //
//                                                   Train Guy 53                                                    //
//                                                                                                                   //
// ================================================================================================================= //

var theme = "clair";

function changerDeTheme() {

	"use strict";
	if (theme == "sombre") {
		theme = "clair";
		document.getElementById("clair").style.display = "none";
		document.getElementById("sombre").style.display = "block";
	} else {
		theme = "sombre";
		document.getElementById("clair").style.display = "block";
		document.getElementById("sombre").style.display = "none";
	}
	switch (window.parent.document.title) {
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

	switch (langage) {
		case "html":
			switch (window.parent.document.title) {
				case "Accueil":
					window.parent.location.href = "https://validator.w3.org/nu/?doc=https%3A%2F%2Ftrainguy53.github.io%2Freseau%2index.html";
					break;
				case "Locomotives":
					window.parent.location.href = "https://validator.w3.org/nu/?doc=https%3A%2F%2Ftrainguy53.github.io%2Freseau%2locomotives.html";
					break;
				case "Voitures":
					window.parent.location.href = "https://validator.w3.org/nu/?doc=https%3A%2F%2Ftrainguy53.github.io%2Freseau%2voitures.html";
					break;
				case "Wagons":
					window.parent.location.href = "https://validator.w3.org/nu/?doc=https%3A%2F%2Ftrainguy53.github.io%2Freseau%2wagons.html";
					break;
				case "Gares":
					window.parent.location.href = "https://validator.w3.org/nu/?doc=https%3A%2F%2Ftrainguy53.github.io%2Freseau%2gares.html";
					break;
			}
			break;
		case "css":
			window.parent.location.href = "https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ftrainguy53.github.io%2Freseau%2Fcss.css";
			break;
		// case "js":
		// 	window.parent.location.href = "";
		// 	break;
	}

}


// ================================================================================================================= //
//                                                                                                                   //
//                                                   Train Guy 53                                                    //
//                                                                                                                   //
// ================================================================================================================= //