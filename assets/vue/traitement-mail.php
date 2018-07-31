<?php 
    
    
    $nom="";$prenom="";$email="";$message="";
    $errorNom=""; $errorPrenom=""; $errorEmail=""; $errorMessage="";$errorUpload="";
    $checkNom=""; $checkPrenom="";$checkEmail="";$checkMessage="";
    if(isset($_POST['envoie'])){
        $formatUpload = explode('/', $_FILES['upload']['type']);
        // print_r($_FILES['upload']);
        // on initie un tableau qui va contenir toute erreur potentielle.
        $errors = array();
        // 1. Sanitisation
        $genre = $_POST['genre'];
        // echo $genre."<br>";
        $nom = filter_var($_POST['nom'],FILTER_SANITIZE_STRING);
        $chifNom = "".filter_var($nom,FILTER_SANITIZE_NUMBER_INT)."";
        $checkNom = "value='". $nom."'";
// echo $chifNom;
        $prenom = filter_var($_POST['prenom'],FILTER_SANITIZE_STRING);
        $chifPrenom = "".filter_var($prenom,FILTER_SANITIZE_NUMBER_INT)."";
        $checkPrenom = "value='". $prenom."'";

        $email = filter_var($_POST['adresse'], FILTER_SANITIZE_EMAIL);
        // echo $email."<br>";
        $checkEmail = "value='". $email."'";

        $objet = $_POST['objet'];
        // echo $objet."<br>";
        $message = filter_var($_POST['message'],FILTER_SANITIZE_STRING);
        //  echo $message."<br>";
        $checkMessage = $message;
        $photo = $_FILES['upload']['name'];
        $type = $_POST['type'];
        // echo $type;
        // 2. Validation
        // Prints int(1).
        if (
            ((empty($chifNom)===false or $chifNom=='0'))
            
            OR (false === filter_var($nom, FILTER_VALIDATE_STRING)) OR (empty($nom)===true)) {
            $errors['nom'] =  "Ce nom est invalide.";
            $errorNom="<span class='erreur'>Ce nom est invalide.</span>";
            }

        if (
            (empty($chifPrenom)===false or $chifPrenom=='0')
        
         OR (false === filter_var($prenom, FILTER_VALIDATE_STRING)) OR (empty($prenom)===true)) {
            $errors['prenom'] =  "Ce prénom est invalide.";
            $errorPrenom="<span class='erreur'>Ce prénom est invalide.</span>";
        }

        if ((false === filter_var($email, FILTER_VALIDATE_EMAIL)) OR (empty($email)==true)) {
            $errors['email'] =  "Cette adresse est invalide.";
            $errorEmail="<span class='erreur'>Cette adresse est invalide.</span>";
        }

        if ((false === filter_var($message, FILTER_VALIDATE_STRING)) OR (empty($message)==true)) {
        $errors['message'] =  "Ce message est invalide.";
        $errorMessage="<span class='erreur'>Ce message est invalide.</span>";
        }
        if (($formatUpload[1]!="jpg")and($formatUpload[1]!="jpeg")and($formatUpload[1]!="png")and($formatUpload[1]!="gif")) {
            $errors['format'] =  "Ce format pour l'upload est invalide.";
            $errorUpload="<span class='erreur'>Ce format pour l'upload est invalide.</span>";
            }
        if($type=='HTML'){
            $fichierTXT="non";
            $donnerMessage="<p>".$genre." ".$nom." ".$prenom.",<br><br>je vous envoie à l'adresse suivant ".
            $email.",<br>le but de se message ".$objet.",<br>sur ".$message.",<br>et en piece jointe une photo.</p>";
        }else if($type=='Texte'){
            $fichierTXT="oui";
            $donnerMessage="".$genre." ".$nom." ".$prenom."

je vous envoie à l'adresse suivant ".
            $email.",
le but de se message ".$objet.",
sur ".$message.",
et en piece jointe une photo.";
$handle = @fopen("./assets/message.txt", "w");

  fwrite($handle, $donnerMessage);

  fclose($handle);
        }
        // 3. Exécution
        if (count($errors)=== 0){
            include("./assets/php/upload.php");
            include("./assets/vue/logActiviter.php");
            include("./assets/vue/mail.php");
        }
        

        
    
    }