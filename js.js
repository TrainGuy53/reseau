// ================================================================================================================== //
//                                                                                                                    //
//                                            Site créé par Train Guy 53                                              //
//                                                                                                                    //
//                                                       js.js                                                        //
//                                                                                                                    //
//                                                   Janvier 2023                                                     //
//                                                                                                                    //
// ================================================================================================================== //

var theme; // enregistre le thème actuel

function changerDeTheme(page) { // change la source des images pour les thèmes

	// "theme" vaut "Clair" ou "Sombre" (majuscules importantes)
	// "page" vaut "index", "locomotives", "voitures" ou "wagons"

	"use strict"; // il faut le mettre

	if (theme == 'Sombre') {

		theme = 'Clair';

	} else {

		theme = 'Sombre';

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
