<?php 
    
    
    $nom="";$prenom="";$email="";$message="";
    $errorNom=""; $errorPrenom=""; $errorEmail=""; $errorMessage="";
    $checkNom=""; $checkPrenom="";$checkEmail="";$checkMessage="";
    if(isset($_POST['envoie'])){
    
        // on initie un tableau qui va contenir toute erreur potentielle.
        $errors = array();
        // 1. Sanitisation
        $genre = $_POST['genre'];
        // echo $genre."<br>";
        $nom = filter_var($_POST['nom'],FILTER_SANITIZE_STRING);
        // echo $nom."<br>";
        $checkNom = "value='". $nom."'";

        $prenom = filter_var($_POST['prenom'],FILTER_SANITIZE_STRING);
        // echo $prenom."<br>";
        $checkPrenom = "value='". $prenom."'";

        $email = filter_var($_POST['adresse'], FILTER_SANITIZE_EMAIL);
        // echo $email."<br>";
        $checkEmail = "value='". $email."'";

        $objet = $_POST['objet'];
        // echo $objet."<br>";
        $message = filter_var($_POST['message'],FILTER_SANITIZE_STRING);
         echo $message."<br>";
        $checkMessage = $message;

        $type = $_POST['type'];
        // echo $type;
        // 2. Validation
        if ((false === filter_var($nom, FILTER_VALIDATE_STRING)) OR (isset($_POST['nom'])==false)) {
            $errors['nom'] =  "Ce nom est invalide.";
            $errorNom="<span class='erreur'>Ce nom est invalide.</span>";
            }

        if ((false === filter_var($prenom, FILTER_VALIDATE_STRING)) OR (isset($_POST['prenom'])==false)) {
            $errors['prenom'] =  "Ce prénom est invalide.";
            $errorPrenom="<span class='erreur'>Ce prénom est invalide.</span>";
        }

        if ((false === filter_var($email, FILTER_VALIDATE_EMAIL)) OR (isset($_POST['adresse'])==false)) {
            $errors['email'] =  "Cette adresse est invalide.";
            $errorEmail="<span class='erreur'>Cette adresse est invalide.</span>";
        }

        if ((false === filter_var($message, FILTER_VALIDATE_STRING)) OR (isset($_POST['message'])==false)) {
        $errors['message'] =  "Ce message est invalide.";
        $errorMessage="<span class='erreur'>Ce message est invalide.</span>";
        }

        // 3. Exécution
        if (count($errors)=== 0){
            include("./assets/vue/logActiviter.php");
            include("./assets/vue/mail.php");
        }
        
    
    }