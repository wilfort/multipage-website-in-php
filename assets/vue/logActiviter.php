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

$handle = @fopen("log.txt", "r");
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
    $contenu .="Upload : ".$genre.'
';
    $contenu .="Message : ".$message.'
';
    $contenu .="Format : ".$type.'

';


// echo $contenu;

  $handle = @fopen("./log.txt", "w");

  fwrite($handle, $contenu);

  fclose($handle);
