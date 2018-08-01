<? 

//get data from form
$genre=$_POST["genre"];
$nom_raw = $_POST["nom"];
$prenom_raw =$_POST["prenom"];
$email_raw =$_POST["adresse"];
$message_raw=$_POST["message"];



//Sanitize
$san_nom=filter_var($nom_raw,FILTER_SANITIZE_STRING);
$san_prenom=filter_var($prenom_raw,FILTER_SANITIZE_STRING);
$san_email= filter_var($email_raw,FILTER_SANITIZE_EMAIL);
$san_message= filter_var($message_raw,FILTER_SANITIZE_STRING);

//Validate name and first name
function validate_name ($name){
    //regex to test for numbers and special char
    $to_exclude = '/[!@#$%^&*(),.?":{}|<>] | [0-9]/';
    if (preg_match($to_exclude,$name)!=false){
        echo 'input invalide';
    }
    else{
        
    }

}




//validate email
$email=filter_var($san_email,FILTER_VALIDATE_EMAIL);


?>