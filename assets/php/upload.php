<?php

// require __DIR__.'/../../vendor/verot/class.upload.php/src/class.upload.php';
require './vendor/verot/class.upload.php/src/class.upload.php';
$logUpload="";
function uploader (){
    
    $today= date('d/m/Y H:i:s');
    $handle = new upload($_FILES['upload']);
    if ($handle->uploaded){
    //pour tester
    $formatUpload = explode('/', $handle->file_src_mime);
       echo ("'".$formatUpload[0]."'<br>");
        if ($handle->file_src_name_ext!='bmp'){//&& $handle->file_is_image =='true'
            $handle->process('./assets/uploads/');
           
            if ($handle->processed){
                echo 'image uploaded';
                file_put_contents('./assets/logUploads.txt',$today.' upload de '.$handle->file_src_name.' vers '.$handle->file_dst_name."\n",FILE_APPEND);
                $logUpload=$today.' upload de '.$handle->file_src_name.' vers '.$handle->file_dst_name;
                global $attachment;
                $attachment = $handle->file_dst_name;
            }
            else{
                echo 'error'.$handle->error;
            }
        }
        else{
            global $errorUpload;
            $errorUpload= "<span class='erreur'>Type de fichier non supporté.</span>";
            file_put_contents('./assets/logUploads.txt',$today.' upload de '.$handle->file_src_name.':fichier non-supporté '."\n",FILE_APPEND);
            $logUpload=$today.' upload de '.$handle->file_src_name.':fichier non-supporté.';
        }
    }
}
uploader();

//phpinfo();
?>
