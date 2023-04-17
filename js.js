// ================================================================================================================= //
//                                                                                                                   //
//                                                   Train Guy 53                                                    //
//                                                                                                                   //
// ================================================================================================================= //

var theme = "Clair";

// function changerDeTheme(pageActuelle) {

// 	// "theme" vaut "Clair" ou "Sombre" (majuscules importantes)
// 	// "pageActuelle" vaut "index", "locomotives", "voitures" ou "wagons"

// 	"use strict";

// 	if (theme == 'Sombre') {

// 		theme = 'Clair';
// 		document.getElementById("boutonClair").style.display = "none";
// 		document.getElementById("boutonSombre").style.display = "block";

// 	} else {

// 		theme = 'Sombre';
// 		document.getElementById("boutonClair").style.display = "block";
// 		document.getElementById("boutonSombre").style.display = "none";

// 	}

// 	switch (pageActuelle) {

// 		case 'index':

// 			document.getElementById("tgv").src = "fichiers/tgv" + theme + ".gif";
// 			break;

// 		case 'locomotives':

// 			document.getElementById("temps").src = "fichiers/temps" + theme + ".png";
// 			break;

// 	}

// 	document.getElementById("sectionGauche").src = "fichiers/icones/locomotives" + theme + ".png";
// 	document.getElementById("sectionMilieu").src = "fichiers/icones/voitures" + theme + ".png";
// 	document.getElementById("sectionDroite").src = "fichiers/icones/wagons" + theme + ".png";

// }

function changerDeTheme() {

	"use strict";

	console.log(window.parent.document.title);

	if (theme == 'Sombre') {

		theme = 'Clair';
		document.getElementById("boutonClair").style.display = "none";
		document.getElementById("boutonSombre").style.display = "block";

	} else {

		theme = 'Sombre';
		document.getElementById("boutonClair").style.display = "block";
		document.getElementById("boutonSombre").style.display = "none";

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