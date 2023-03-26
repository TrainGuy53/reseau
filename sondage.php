<?php
// Récupération des données soumises
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $locomotive = $_POST["locomotive"];

  // Lecture des résultats actuels du fichier JSON
  $resultats = json_decode(file_get_contents("sondage.json"), true);

  // Mise à jour du nombre de votes pour la locomotive sélectionné
  $resultats[$locomotive]++;

  // Écriture des résultats mis à jour dans le fichier JSON
  file_put_contents("sondage.json", json_encode($resultats));
}

// Affichage des résultats du sondage
$resultats = json_decode(file_get_contents("sondage.json"), true);
echo "<h2>Résultats du sondage :</h2>";
echo "<ul>";
foreach ($resultats as $locomotive => $votes) {
  echo "<li>" . $locomotive . " : " . $votes . " votes</li>";
}
echo "</ul>";
?>
