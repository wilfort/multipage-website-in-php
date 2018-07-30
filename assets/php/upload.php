<?php
include ("./vendor/verot/class.upload.php/src/class.upload.php");

$handle = new upload($_FILES['upload']);
if ($handle->uploaded){
    $handle->process('./assets/uploads/');
    if ($handle->processed){
        echo 'image uploaded';
    }
    else{
        echo 'error'.$handle->error;
    }
}
echo $handle->log;
?>
