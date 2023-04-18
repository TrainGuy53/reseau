// ================================================================================================================= //
//                                                                                                                   //
//                                                   Train Guy 53                                                    //
//                                                                                                                   //
// ================================================================================================================= //

var theme = "clair";

function changerDeTheme() {

	"use strict";
	if (theme == 'sombre') {
		theme = 'clair';
		document.getElementById("boutonClair").style.display = "none";
		document.getElementById("boutonSombre").style.display = "block";
	} else {
		theme = 'sombre';
		document.getElementById("boutonClair").style.display = "block";
		document.getElementById("boutonSombre").style.display = "none";
	}
	switch (window.parent.document.title) {
		case 'Accueil':
			window.parent.document.getElementById("tgv").src = "fichiers/tgv" + theme + ".gif";
			break;
		case 'Locomotives':
			window.parent.document.getElementById("temps").src = "fichiers/temps" + theme + ".png";
			break;
	}
	for (var i = document.getElementsByClassName("fond").length - 1; i >= 0; i--) {
		document.getElementsByClassName("fond")[i].src = "fichiers/nav/" + theme + "/" + i + ".png";
	}

}

// ================================================================================================================= //
//                                                                                                                   //
//                                                   Train Guy 53                                                    //
//                                                                                                                   //
// ================================================================================================================= //