<?php
$contenu="";
$tab;
//  foreach($lines as $n => $line){
//     $contenu.= $line . "\n";
// }

$handle = @fopen("./assets/logMail.txt", "r");
if ($handle) {
    while (($buffer = fgets($handle, 4096)) !== false) {
        $tab= explode(' ', $buffer);
        if (($tab['0'] != "Nom") and ($tab['0'] != "Mail")){
        $contenu .= $buffer."<br>";}
    }
    if (!feof($handle)) {
        echo "Error: unexpected fgets() fail\n";
    }
    fclose($handle);
}
echo $contenu;