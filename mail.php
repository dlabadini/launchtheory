<?php

$name = $_POST['contact-name'];
$email = $_POST['contact-email'];
$message = $_POST['contact-message'];
$formcontent="Contact Form\n\nFrom: $name \nMessage: $message";
$recipient = "devin@launchtheory.co";
$subject = "LaunchTheory Contact Form Submission";
$mailheader = "From: $email \r\n";

mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You! Email Sent.";

?>
