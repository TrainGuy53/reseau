// ================================================================================================================= //
//                                                                                                                   //
//                                                   Train Guy 53                                                    //
//                                                                                                                   //
// ================================================================================================================= //

// ================================================================================================================= //
	// variables
// ================================================================================================================= //

const titrePageParent = window.parent.document.title;
const pages = {
	"Accueil — Train Guy 53": "index.html",
	"Locomotives — Train Guy 53": "locomotives.html",
	"Voitures — Train Guy 53": "voitures.html",
	"Wagons — Train Guy 53": "wagons.html",
	"Maquettes — Train Guy 53": "maquettes.html"
};

// ================================================================================================================= //
	// fonctions
// ================================================================================================================= //

var thème = "clair";

function basculerThème() {

	if (thème === "sombre") {
		thème = "clair";
		getElementById("span-clair").style.display = "none";
		getElementById("span-sombre").style.display = "block";
	} else {
		thème = "sombre";
		getElementById("span-clair").style.display = "block";
		getElementById("span-sombre").style.display = "none";
	}
	switch (titrePageParent) {
		case pages[0]:
			window.parent.fond.src = "index/tgv/" + thème + ".png";
			break;
		case pages[1]:
			window.parent.temps.src = "locomotives/temps/" + thème + ".png";
			break;
	}
	for (var i = document.getElementsByClassName("img-fond").length - 1; i >= 0; i--) {
		document.getElementsByClassName("img-fond")[i].src = "nav/" + thème + "/" + i + ".png";
	}

}

const urlHtml = "https://validator.w3.org/nu/?doc=https%3A%2F%2Ftrainguy53.github.io%2Freseau%2F";
const urlCss = "https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ftrainguy53.github.io%2Freseau";
// const urlJs = "https://";

function validation(langage) {

	switch (langage) {
		case "html":
			if (titrePageParent in pages) {window.open(urlHtml + pages[titrePageParent], "_blank")}
			break;
		case "css":
			window.open(urlCss, "_blank");
			break;
		// case "js":
		// 	window.open(urlJs, "_blank");
		// 	break;
	}

}

const pause = 3000; // milisecondes

function basculerImages() {

	const imgRéseau = document.querySelectorAll(".img-réseau");
	const imgWikipédia = document.querySelectorAll(".img-wikipédia");
	imgRéseau.forEach(img => img.style.display = "block");
	imgWikipédia.forEach(img => img.style.display = "none");
	setInterval(
		() => {
			imgRéseau.forEach(img => img.style.display = img.style.display === "none" ? "block" : "none");
			imgWikipédia.forEach(img => img.style.display = img.style.display === "none" ? "block" : "none");
		},
		pause
	);

}

// ================================================================================================================= //
//                                                                                                                   //
//                                                   Train Guy 53                                                    //
//                                                                                                                   //
// ================================================================================================================= //