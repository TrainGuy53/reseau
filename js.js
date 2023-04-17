// ================================================================================================================= //
//                                                                                                                   //
//                                                   Train Guy 53                                                    //
//                                                                                                                   //
// ================================================================================================================= //

var theme = "Clair"; // "theme" vaut "Clair" ou "Sombre" (majuscules importantes)

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
			document.getElementById("tgv").src = "fichiers/tgv" + theme + ".gif";
			break;
		case 'Locomotives':
			document.getElementById("temps").src = "fichiers/temps" + theme + ".png";
			break;
	}
	document.getElementById("sectionGauche").src = "fichiers/icones/locomotives" + theme + ".png";
	document.getElementById("sectionMilieu").src = "fichiers/icones/voitures" + theme + ".png";
	document.getElementById("sectionDroite").src = "fichiers/icones/wagons" + theme + ".png";

}

// ================================================================================================================= //
//                                                                                                                   //
//                                                   Train Guy 53                                                    //
//                                                                                                                   //
// ================================================================================================================= //