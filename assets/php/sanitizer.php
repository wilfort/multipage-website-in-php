<?

$adminUser; $adminPWD;
$adminUSerRaw = $_POST["adminUser"];
$adminPWDRaw = $_POST["adminPWD"];
$san_adminUSer = filter_var($adminUSerRaw, FILTER_SANITIZE_EMAIL);
$adminPWD = filter_var($adminPWDrRaw, FILTER_SANITIZE_STRING);
$val_adminUSer = filter_var($san_adminUSer, FILTER_VALIDATE_EMAIL);
if ($val_adminUser!= false){
    $adminUser=$val_adminUser;
}
else{
    echo "adresse email invalide";
}




?>