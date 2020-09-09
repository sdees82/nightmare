<?php
if(!isset($_POST['submit']))
{
    //this page should not be accessed directly. Need to submit the form.
    echo "error; you need to submit the form!";
}
//get information
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$company = $_POST['company'];
$msg = $_POST['message'];

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);
 
 $email_from = "seantedees1982e@gmail.com";
 $email_subject = "New Form Submission";
 $email_body = "You received a new message from $name \n".
    "email address: $email_from\n".
    "Here is the message:\n $msg".

$to = "seantedees1982@gmail.com";
$headers = "From: $email_from \r\n";

// send email
mail($to,$email_subject,$email_body,$headers);
?>