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
$attachment;

//Feedback to client
$feedback="Bonjour, \n".' Vous nous avez contactés ce '.$date_jour.' à '.$date_heure."\n Veuillez trouver ci-dessous votre message ainsi que les éventuelles pièces jointes.\n Bien à vous,\n L'équipe du TILT\n";

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
else if (empty($san_nom)==true){
    $errorNom="<span class='erreur'>Champ obligatoire.</span>";
}

//Validation prénom
if (preg_match($to_exclude,$san_prenom)!=false){
    $errorPrenom="<span class='erreur'>Ce prénom est invalide.</span>";
}
else if (empty($san_prenom)==true){
    $errorPrenom="<span class='erreur'>Champ obligatoire.</span>";
}

//Validation email
$email=filter_var($san_email,FILTER_VALIDATE_EMAIL);
if ($email==false){
    $errorEmail="<span class='erreur'>Cette adresse est invalide.</span>";
}
else if (empty($email)==true){
    $errorEmail="<span class='erreur'>Champ obligatoire.</span>";
}

//Validation message
if (empty($san_message)){
    $errorMessage="<span class='erreur'>Champ obligatoire.</span>";
}


// Exécution
if (empty($errorEmail) && empty ($errorMessage) && empty($errorNom) && empty($errorPrenom) && empty($errorUpload)){
    include('phpmailer.php');
};



// CREER FILTRE POUR CARACTERES FRANCAIS (NOM, PRENOM)
// METTRE UPLOAD EN PIECE JOINTE
// SECURISER LOGIN ET PWD ADMIN 




?>