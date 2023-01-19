function sombre(page) { // change la source des images pour le thème sombre

	"use strict"; // il faut le mettre

	if (page === 1) { // index.html contient des images différentes

		document.getElementById("tgv").src = "fichiers/tgvSombre.gif";
		document.getElementById("circuit").src = "fichiers/circuits/circuitSombre.png";
		document.getElementById("details").src = "fichiers/circuits/detailsSombres.png";

	} else if (page === 2) { // locomotives.html aussi

		document.getElementById("temps").src = "fichiers/tempsSombre.png";

	}

	document.getElementById("sectionGauche").src = "fichiers/icones/locomotivesSombre.png";
	document.getElementById("sectionMilieu").src = "fichiers/icones/voituresSombre.png";
	document.getElementById("sectionDroite").src = "fichiers/icones/wagonsSombre.png";

}

function clair(page) { // change la source des images pour le thème clair

	"use strict"; // il faut le mettre

	if (page === 1) { // index.html contient des images différentes

		document.getElementById("tgv").src = "fichiers/tgvClair.gif";
		document.getElementById("circuit").src = "fichiers/circuits/circuitClair.png";
		document.getElementById("details").src = "fichiers/circuits/detailsClairs.png";

	} else if (page === 2) { // locomotives.html aussi

		document.getElementById("temps").src = "fichiers/tempsClair.png";

	}

	document.getElementById("sectionGauche").src = "fichiers/icones/locomotivesClair.png";
	document.getElementById("sectionMilieu").src = "fichiers/icones/voituresClair.png";
	document.getElementById("sectionDroite").src = "fichiers/icones/wagonsClair.png";


}