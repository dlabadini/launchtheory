<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="Contact Form\n\nFrom: $name \nMessage: $message";
$recipient = "devin@launchtheory.io";
$subject = "LaunchTheory Contact Form Submission";
$mailheader = "From: $email \r\n";

mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You! Email Sent.";

?>
