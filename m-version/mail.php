<?php

/* Configuration */
$subject = 'Anagha Deo Contact Details'; // Set email subject line here
$mailto  = 'godvasanskruti@anaghadeo.com'; // Email address to send the form to
/* END Configuration */

$name       = $_POST['name'];
$email          = $_POST['email'];
$mobile          = $_POST['mobile'];
$message       = $_POST['message'];
$timestamp  = date("F jS Y, h:iA.", time());

// HTML for email to send submission details
$body = "
<br>
<p>You have received a new inquiry from $name</p><br>
<p><b>Name</b>: $name <br><br>
<b>Email</b>: $email<br><br>
<b>Mobile No</b>: $mobile<br><br>
<b>Message</b>: $message<br><br>
<p>This form was submitted on <b>$timestamp</b></p>
";

// Success Message
$success = "
<div class=\"row\">
    <div class=\"thankyou\" style=\"text-align: center; margin-top: 100px\">
        <h3>Submission Successful !</h3><br><br>
        <a href=\"http://www.anaghadeo.com\">Back to Home Page</a>
    </div>
</div>
";

$headers = "From: $name <$email> \r\n";
$headers .= "Reply-To: $email \r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
$message = "<html><body>$body</body></html>";

if (mail($mailto, $subject, $message, $headers)) {
    echo "$success"; // success
} else {
    echo 'Something went wrong!'; // failure
}

?>