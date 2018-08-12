<?php


/**
 * This example shows settings to use when sending via Google's Gmail servers.
 * This uses traditional id & password authentication - look at the gmail_xoauth.phps
 * example to see how to use XOAUTH2.
 * The IMAP section shows how to save this message to the 'Sent Mail' folder using IMAP commands.
 */
//Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
require __DIR__.'/../../vendor/autoload.php';
//Create a new PHPMailer instance
$mail = new PHPMailer;
//Tell PHPMailer to use SMTP
$mail->isSMTP();
//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 2;
$mail->Debugoutput = 'html';
$mail->Host = 'smtp.gmail.com';
$mail->Port = 587;
$mail->SMTPSecure = 'tls';
$mail->SMTPAuth = true;

//Username to use for SMTP authentication - use full email address for gmail
$mail->Username = getenv("user_mail");//$adminUser;
//Password to use for SMTP authentication
$mail->Password = getenv("user_password");//$adminPWD;


$mail->setFrom('dev.test.becode@gmail.com', 'Tilt asbl');
$mail->addAddress($email, $san_prenom.' '.$san_nom);
$mail->addCC('dev.test.becode@gmail.com','Tilt asbl');
$mail->Subject = $object;
// text or html
if ($format="HTML"){
    $mail->isHTML(true);
}else{
    $mail->isHTML(false);
};

//message body
$mail->Body=$feedback."\n".$san_message.'</br>';

//Attach an image file
if (empty($attachment)==false){
$mail->addAttachment('/assets/uploads/'.$attachment);
}
//send the message, check for errors
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
}

// function save_mail($mail)
// {
//     //You can change 'Sent Mail' to any other folder or tag
//     $path = "{imap.gmail.com:993/imap/ssl}[Gmail]/Sent Mail";
//     //Tell your server to open an IMAP connection using the same username and password as you used for SMTP
//     $imapStream = imap_open($path, $mail->Username, $mail->Password);
//     $result = imap_append($imapStream, $path, $mail->getSentMIMEMessage());
//     imap_close($imapStream);
//     return $result;
// }

