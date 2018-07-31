<?php 
    
    
    $nom="";$prenom="";$email="";$prenom="";
    if(isset($_POST['envoie'])){
    
        // on initie un tableau qui va contenir toute erreur potentielle.
        $errors = array();
        // 1. Sanitisation
        $genre = $_POST['genre'];
        echo $genre."<br>";
        $nom = filter_var($_POST['nom'],FILTER_SANITIZE_STRING);
        echo $nom."<br>";
        $prenom = filter_var($_POST['prenom'],FILTER_SANITIZE_STRING);
        echo $prenom."<br>";
        $email = filter_var($_POST['adresse'], FILTER_SANITIZE_EMAIL);
        echo $email."<br>";
        $objet = $_POST['objet'];
        echo $objet."<br>";
        $message = filter_var($_POST['message'],FILTER_SANITIZE_STRING);
        echo $message."<br>";
        $type = $_POST['type'];
        echo $type;
        // 2. Validation
        if (false === filter_var($nom, FILTER_VALIDATE_STRING)) {
            $errors['nom'] =  "Cette adresse est invalide.";
            }

        if (false === filter_var($prenom, FILTER_VALIDATE_STRING)) {
            $errors['prenom'] =  "Cette adresse est invalide.";
        }

        if (false === filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errors['email'] =  "Cette adresse est invalide.";
        }

        if (false === filter_var($message, FILTER_VALIDATE_STRING)) {
        $errors['message'] =  "Cette adresse est invalide.";
        }

        // 3. Exécution
        if (count($errors)> 0){
            echo 'Il y a des erreurs!<br>';
            echo $email;
            print_r($errors);
            exit;
        }
        include("./assets/vue/mail.php");
    
    }