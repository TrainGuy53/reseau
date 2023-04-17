// ================================================================================================================= //
//                                                                                                                   //
//                                                   Train Guy 53                                                    //
//                                                                                                                   //
// ================================================================================================================= //

var theme = "Clair";

function changerDeTheme(pageActuelle) {

	"use strict";
	if (theme == 'Sombre') {
		theme = 'Clair';
		document.getElementById("boutonClair").style.display = "none";
		document.getElementById("boutonSombre").style.display = "block";
	} else {
		theme = 'Sombre';
		document.getElementById("boutonClair").style.display = "block";
		document.getElementById("boutonSombre").style.display = "none";
	}
	switch (window.parent.document.title) { // récupère le nom de la page parent
		case 'Accueil':
			window.parent.document.getElementById("tgv").src = "fichiers/tgv" + theme + ".gif";
			break;
		case 'Locomotives':
			window.parent.document.getElementById("temps").src = "fichiers/temps" + theme + ".png";
			break;
	}
	document.getElementsByClassName("section")[0].src = "fichiers/nav/locomotives" + theme + ".png";
	document.getElementsByClassName("section")[1].src = "fichiers/nav/voitures" + theme + ".png";
	document.getElementsByClassName("section")[2].src = "fichiers/nav/wagons" + theme + ".png";
	document.getElementsByClassName("section")[3].src = "fichiers/nav/gares" + theme + ".png";

}

// ================================================================================================================= //
//                                                                                                                   //
//                                                   Train Guy 53                                                    //
//                                                                                                                   //
// ================================================================================================================= //