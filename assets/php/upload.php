<?php

require ('./vendor/verot/class.upload.php/src/class.upload.php');

function uploader (){
    $today= date('d/m/Y H:i:s');
    $handle = new upload($_FILES['upload']);
    if ($handle->uploaded){
        
        if ($handle->file_src_name_ext!='bmp' && $handle->file_is_image=='true'){
            $handle->process('./assets/uploads/');
           
            if ($handle->processed){
                echo 'image uploaded';
                file_put_contents('./assets/log.txt',$today.' upload de '.$handle->file_src_name.' vers '.$handle->file_dst_name."\n",FILE_APPEND);
            }
            else{
                echo 'error'.$handle->error;
            }
        }
        else{
            echo 'type de fichier non supporté';
            file_put_contents('./assets/log.txt',$today.' upload de '.$handle->file_src_name.':fichier non-supporté '."\n",FILE_APPEND);
        }
    }
}
print_r($_FILES['upload']);
uploader();

//phpinfo();

?>
