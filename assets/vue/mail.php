<?php
/**
     * This example shows settings to use when sending via Google's Gmail servers.
     * This uses traditional id & password authentication - look at the gmail_xoauth.phps
     * example to see how to use XOAUTH2.
     * The IMAP section shows how to save this message to the 'Sent Mail' folder using IMAP commands.
     */
    //Import PHPMailer classes into the global namespace
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    
    // require 'path/to/PHPMailer/src/Exception.php';
    // require 'path/to/PHPMailer/src/PHPMailer.php';
    // require 'path/to/PHPMailer/src/SMTP.php';
    require './vendor/autoload.php';
    $mail = new PHPMailer;
        
        $mail->SMTPDebug = 2;
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;
        //Username to use for SMTP authentication - use full email address for gmail
        $mail->Username = getenv("user_mail");//$adminUser;
        //Password to use for SMTP authentication
        $mail->Password = getenv("user_password");//$adminPWD;
        $mail->setFrom('dev.test.becode@gmail.com', 'Tilt asbl');

        $mail->addAddress($email, $nom." ".$prenom);
        $mail->addAddress('wilfort.stephane@gmail.com', 'Wilfort Stephane');
        $mail->addCC('dev.test.becode@gmail.com','Tilt asbl');         
        $mail->Subject = $objet;
        if($fichierTXT=="oui"){
            $mail->addAttachment('./assets/message.txt');  
        }
        $mail->addAttachment('./assets/uploads/'.$photo, $photo);

        $mail->isHTML(true);
        $mail->Body = $donnerMessage;
        
        if (!$mail->send()) {
            echo 'Message was not sent.';
            echo "Mailer Error: " . $mail->ErrorInfo;
        } else {
            // echo "Message sent!";
        }
        
        
        //...later

    function save_mail($mail)
    {
        //You can change 'Sent Mail' to any other folder or tag
        $path = "{imap.gmail.com:993/imap/ssl}[Gmail]/Sent Mail";
        //Tell your server to open an IMAP connection using the same username and password as you used for SMTP
        $imapStream = imap_open($path, $mail->Username, $mail->Password);
        $result = imap_append($imapStream, $path, $mail->getSentMIMEMessage());
        imap_close($imapStream);
        return $result;
    }
    