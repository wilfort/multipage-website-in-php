<?php

require ('./vendor/verot/class.upload.php/src/class.upload.php');

function uploader (){
    $handle = new upload($_FILES['upload']);
    if ($handle->uploaded){
        if ($handle->file_src_name_ext!='bmp' && $handle->file_is_image=='true'){
            $handle->process('./assets/uploads/');
            if ($handle->processed){
                echo 'image uploaded';
                file_put_contents('./log.txt','uploaded image'.$handle->file_src_name.'to '.$handle->file_dst_name,FILE_APPEND);
            }
            else{
                echo 'error'.$handle->error;
            }
        }
        else{
            echo 'type de fichier non supporté';
        }
    }
}
uploader();



?>
