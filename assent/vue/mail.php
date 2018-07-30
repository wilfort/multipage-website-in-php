<?php

    $mail = new PHPMailer;

    try{
        $mail->isSMTP();

        $mail->SMTPDebug = 2;

        $mail->Host = 'smtp.gmail.com';

        $mail->Port = 587;

        $mail->SMTPSecure = 'tls';

        $mail->SMTPAuth = true;

        $mail->Username = "wilfort.stephane@gmail.com";

        $mail->Password = "PRli1992";

        $mail->setFrom('wilfort.stephane@gmail.com', 'Wilfort Stéphane');

        $mail->addAddress($email, $nom." ".$prenom);

        $mail->Subject = $objet;
        $mail->addAttachment('./assent/img/logo.png', 'logo.jpg');

        $mail->isHTML(true);
        $mail->Body = 'This is a plain-text message body';

        if (!$mail->send()) {
            echo 'Message was not sent.';
            echo "Mailer Error: " . $mail->ErrorInfo;
        } else {
            echo "Message sent!";

        }
    } catch (Exception $e) {
        echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
    }
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