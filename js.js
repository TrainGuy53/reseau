// ================================================================================================================== //
//                                                                                                                    //
//                                                    Train Guy 53                                                    //
//                                                                                                                    //
// ================================================================================================================== //

var theme = "Clair"; // enregistre le thème actuel

function changerDeTheme(page) { // change la source des images pour les thèmes, en fonction de la page

	// "theme" vaut "Clair" ou "Sombre" (majuscules importantes)
	// "page" vaut "index", "locomotives", "voitures" ou "wagons"

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

	switch (page) {

		case 'index': // index.html contient une image particulière

			document.getElementById("tgv").src = "fichiers/tgv" + theme + ".gif";
			break;

		case 'locomotives': // locomotives.html aussi

			document.getElementById("temps").src = "fichiers/temps" + theme + ".png";
			break;

	}

	// ce qui suit est à executer pour toutes les pages
	document.getElementById("sectionGauche").src = "fichiers/icones/locomotives" + theme + ".png";
	document.getElementById("sectionMilieu").src = "fichiers/icones/voitures" + theme + ".png";
	document.getElementById("sectionDroite").src = "fichiers/icones/wagons" + theme + ".png";

}

// ================================================================================================================== //
//                                                                                                                    //
//                                                    Train Guy 53                                                    //
//                                                                                                                    //
// ================================================================================================================== //