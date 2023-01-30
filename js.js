/*
========================================================================================================================
=                                                                                                                      =
=                                             Site créé par Train Guy 53                                               =
=                                                                                                                      =
=                                                        js.js                                                         =
=                                                                                                                      =
=                                                    Janvier 2023                                                      =
=                                                                                                                      =
========================================================================================================================
*/

function theme(etat, page) { // change la source des images pour les thèmes

	// "etat" vaut "Clair" ou "Sombre" (majuscules importantes)
	// "page" vaut "index", "locomotives", "voitures" ou "wagons"

	"use strict"; // il faut le mettre

	switch (page) {

		case 'index': // index.html contient des images différentes

			document.getElementById("tgv").src = "fichiers/tgv" + etat + ".gif";
			document.getElementById("details").src = "fichiers/circuits/details" + etat + ".png";
			break;

		case 'locomotives': // locomotives.html aussi

			document.getElementById("temps").src = "fichiers/temps" + etat + ".png";
			break;

	}

	// ce qui suit est à executer pour toutes les pages

	document.getElementById("sectionGauche").src = "fichiers/icones/locomotives" + etat + ".png";
	document.getElementById("sectionMilieu").src = "fichiers/icones/voitures" + etat + ".png";
	document.getElementById("sectionDroite").src = "fichiers/icones/wagons" + etat + ".png";

}