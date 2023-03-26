<!-- =============================================================================================================== -->
<!--                                                                                                                 -->
<!--                                                  Train Guy 53                                                   -->
<!--                                                                                                                 -->
<!-- =============================================================================================================== -->

<!DOCTYPE html>
<html lang = "fr">
<head>
	<meta charset = "UTF-8">
	<link rel = "stylesheet" href = "css.css">
	<link rel = "shortcut icon" href = "fichiers/icones/accueil.png">
	<script src = "js.js"></script>
	<title>
		Accueil
	</title>
</head>
<body>

<nav>
<ul>

<li>
	<a href = "index.html">
		<img src = "fichiers/icones/trainGuy53.png" id = "logo" alt = "index.html">
	</a>
</li>
<li>
	<a href = "locomotives.html">
		<img src = "fichiers/icones/locomotivesClair.png" id = "sectionGauche" alt = "locomotives.html">
		Locomotives
	</a>
</li>
<li>
	<a href = "voitures.html">
		<img src = "fichiers/icones/voituresClair.png" id = "sectionMilieu" alt = "voitures.html">
		Voitures
	</a>
</li>
<li>
	<a href = "wagons.html">
		<img src = "fichiers/icones/wagonsClair.png" id = "sectionDroite" alt = "wagons.html">
		Wagons
	</a>
</li>
<li>
	<button id = "boutonClairSombre" onclick = "changerDeTheme('index')">
		<div id = "boutonClair">
			🌞
		</div>
		<div id = "boutonSombre">
			🌙
		</div>
	</button>
</li>

</ul>
</nav>

<h1>
	Accueil
</h1>

<p>
	Bienvenue sur la page d&apos;accueil de mon r&eacute;seau de train miniature.<br>
	Ce site &agrave; &eacute;t&eacute; cr&eacute;&eacute; par <a href = "https://www.instagram.com/train_guy_53/" target = "_blank">Train Guy 53</a>.
</p>

<img src = "fichiers/tgvClair.gif" id = "tgv" alt = "tgv.gif">

<p>
	Vous trouverez ici une pr&eacute;sentation et une description des locomotives, voitures et wagons du r&eacute;seau.
</p>

<div id = "colones">
	<p>
		Voil&agrave; un plan simplifi&eacute; de mon circuit : il y a deux boucles ind&eacute;pandantes, en bleu et en vert, un pont, en violet, deux croisements, en rouge, et quatre voies de garage, en jaune.<br>
	</p>
	<p>
		Les aiguillages B, I et P sont &eacute;l&eacute;ctrifi&eacute;s et permettent de changer de <strong>B</strong>oucle, d&apos;acc&eacute;der &agrave; l&apos;<strong>I</strong>nt&eacute;rieur, et d&apos;acc&eacute;der au <strong>P</strong>ont.
	</p>
	<div id = "circuits">
		<div id = "simple">
			<img src = "fichiers/circuits/circuit.png" class = "circuit" alt = "Circuit simplifié">
		</div>
		<div id = "detaile">
			<img src = "fichiers/circuits/details.png" class = "circuit" alt = "Circuit détaillé">
		</div>
	</div>
</div>

<p>La date d'aujourd'hui est <?php echo date('d/m/Y'); ?>. Il est <?php echo date('H:i:s'); ?> actuellement.</p>

<p>
	&darr; Suivez moi sur les r&eacute;seaux &darr;
</p>

<table id = "tableReseauxSociaux">
<tr>

<th class = "thSansBords">
	<a href = "https://www.instagram.com/train_guy_53/" target = "_blank">
		<img src = "fichiers/reseauxSociaux/instagram.png" class = "reseauxSociaux" alt = "Instagram">
		<br>
		&commat;train_guy_53
	</a>
</th>
<th class = "thSansBords">
	<a href = "https://www.youtube.com/@trainguy53" target = "_blank">
		<img src = "fichiers/reseauxSociaux/youtube.png" class = "reseauxSociaux" alt = "YouTube">
		<br>
		&commat;trainguy53
	</a>
</th>
<th class = "thSansBords">
	<a href = "https://www.facebook.com/trainguy53/" target = "_blank">
		<img src = "fichiers/reseauxSociaux/facebook.png" class = "reseauxSociaux" alt = "Facebook">
		<br>
		&commat;trainguy53
	</a>
</th>
<th class = "thSansBords">
	<a href = "https://www.pinterest.fr/trainguy53/" target = "_blank">
		<img src = "fichiers/reseauxSociaux/pinterest.png" class = "reseauxSociaux" alt = "Pinterest">
		<br>
		&commat;trainguy53
	</a>
</th>

</tr>
</table>

<a href = "https://validator.w3.org/nu/?doc=https%3A%2F%2Ftrainguy53.github.io%2Freseau%2Findex.html" target = "_blank">
	<img src = "fichiers/validation/html.png" class = "validation" alt = "HTML Valide !">
</a>
<a href = "https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ftrainguy53.github.io%2Freseau%2Fcss.css" target = "_blank">
	<img src = "fichiers/validation/css.png" class = "validation" alt = "CSS Valide !">
</a>

</body>
</html>

<!-- =============================================================================================================== -->
<!--                                                                                                                 -->
<!--                                                  Train Guy 53                                                   -->
<!--                                                                                                                 -->
<!-- =============================================================================================================== -->