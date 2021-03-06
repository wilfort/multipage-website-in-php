<?php
require __DIR__.'/upload.php';

//get data from form
$genre=$_POST["genre"];
$nom_raw = $_POST["nom"];
$prenom_raw =$_POST["prenom"];
$email_raw =$_POST["adresse"];
$message_raw=$_POST["message"];
$object=$_POST["objet"];
$format=$_POST["type"];
$date_jour=date('d/m/Y');
$date_heure=date('H:i:s');

//variables to insert error messages into html
$errorNom=""; $errorPrenom=""; $errorEmail=""; $errorMessage="";$errorUpload="";

//stock attachment name from upload.php
//global $attachment;

//Feedback to client
$feedback="<p>Bonjour, <br>".' Vous nous avez contactés ce '.$date_jour.' à '.$date_heure."<br> Veuillez trouver ci-dessous votre message ainsi que les éventuelles pièces jointes.<br> Bien à vous,<br> L'équipe du TILT <br></p>";

//Sanitize
$san_nom=filter_var($nom_raw,FILTER_SANITIZE_STRING);
$san_prenom=filter_var($prenom_raw,FILTER_SANITIZE_STRING);
$san_email= filter_var($email_raw,FILTER_SANITIZE_EMAIL);
$san_message= filter_var($message_raw,FILTER_SANITIZE_STRING);

//Validate name and first name

// Regex to test for numbers and special char
$to_exclude = '/[!@#$%^&*(),.?":{}|<>] | [0-9]/';


// Validation nom
if (preg_match($to_exclude,$san_nom)!=false){
    $errorNom="<span class='erreur'>Ce nom est invalide.</span>";
}
else if (isset ($nom_raw) && empty($san_nom)==true){
    $errorNom="<span class='erreur'>Champ obligatoire.</span>";
}

//Validation prénom
if (preg_match($to_exclude,$san_prenom)!=false){
    $errorPrenom="<span class='erreur'>Ce prénom est invalide.</span>";
}
else if (isset ($prenom_raw) && empty($san_prenom)==true){
    $errorPrenom="<span class='erreur'>Champ obligatoire.</span>";
}

//Validation email
$email=filter_var($san_email,FILTER_VALIDATE_EMAIL);
if (isset ($email_raw) && $email==false){
    $errorEmail="<span class='erreur'>Cette adresse est invalide.</span>";
}
else if (isset ($email_raw) && empty($email)==true){
    $errorEmail="<span class='erreur'>Champ obligatoire.</span>";
}

//Validation message
if (isset ($message_raw) && empty($san_message)){
    $errorMessage="<span class='erreur'>Champ obligatoire.</span>";
}


// Exécution
if (isset ($nom_raw) && isset ($prenom_raw) && isset ($email_raw) && isset ($message_raw) && empty($errorEmail) && empty ($errorMessage) && empty($errorNom) && empty($errorPrenom) && empty($errorUpload)){
    // include("./assets/vue/phpmailer.php");
    include('phpmailer.php');
};



// CREER FILTRE POUR CARACTERES FRANCAIS (NOM, PRENOM)
// METTRE UPLOAD EN PIECE JOINTE
// SECURISER LOGIN ET PWD ADMIN 




?>