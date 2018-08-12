<?php 
/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  $                                                                     $            
  $                    LIRE le contenue d'un fichier                    $
  $                                                                     $
  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/ 
//  $lines = file("test.txt");
  $contenu="";
//  foreach($lines as $n => $line){
//     $contenu.= $line . "\n";
// }

$handle = @fopen("./assets/logMail.txt", "r");
if ($handle) {
    while (($buffer = fgets($handle, 4096)) !== false) {
        $contenu .= $buffer;
    }
    if (!feof($handle)) {
        echo "Error: unexpected fgets() fail\n";
    }
    fclose($handle);
}
/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  $                                                                     $            
  $                  Ecrire le contenue d'un fichier                    $
  $                                                                     $
  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/ 
    $contenu .="Date : ".date('d/m/Y H:i:s').'
';
    $contenu .="Genre : ".$genre.'
';
    $contenu .="Nom : ".$nom.'
';
    $contenu .="Prenom : ".$prenom.'
';
    $contenu .="Mail : ".$email.'
';
    $contenu .="Objet : ".$objet.'
';
    $contenu .="Upload : ".$photo.'
';
    $contenu .="Log Upload : ".$logUpload.'
';
    $contenu .="Message : ".$message.'
';
    $contenu .="Format : ".$type.'

';


// echo $contenu;

  $handle = @fopen("./assets/logMail.txt", "w");

  fwrite($handle, $contenu);

  fclose($handle);



  
?>