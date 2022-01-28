<?php
 
if($_POST) {
    $email = "";
    $email_body = "<div>";

    if(isset($_POST['email'])) {
        $email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']);
        $email = filter_var($email, FILTER_VALIDATE_EMAIL);
        $email_body .= "<div>
                           <label><b>Visitor Email:</b></label>&nbsp;<span>".$email."</span>
                        </div>";
    }   
   
    $recipient = "info@lotusecoculture.com";
    
    $email_body .= "</div>";

    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $email . "\r\n";

    $email_title = "News Letter Signup For Lotus";
     
    if(mail($recipient, $email_title, $email_body, $headers)) {
        $status = "success";
        $response = "Thank you for signing up for our newsletter.";
    } else {
        $status = "failed";
        $response = "Something is wrong: <br><br>" . $mail->ErrorInfo;
    }
    
    exit(json_encode(array("status" => $status, "response" => $response)));
     
} else {
    $status = "failed";
    $response = "Something is wrong: ";
    exit(json_encode(array("status" => $status, "response" => $response)));
}
?>