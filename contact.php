<!--
===================================================
  PHP Scripts for Chinese Notebook 
  Contact Form Processing  
  2016, Stacy Bridges
===================================================
-->

<?php
	$myemail = 'stacy@stacybridges.com';

	if (isset($_POST['name'])) {

		$name = strip_tags($_POST['name']);
		$email = strip_tags($_POST['email']);
		$message = strip_tags($_POST['message']);

		echo "<br>";
		echo "<div style=\"text-align:center;\">";
		echo "<div class=\"alert alert-success\">Thank you! Your message was sent with the following details:</div>";
		echo "</div>";
		echo "<hr>";
		echo "<b>Name</b>: ".$name."<br>";   
		echo "<b>Email</b>: ".$email."<br>"; 
		echo "<b>Message</b>: ".$message."<br>";
		echo "<br>";
		 
		$to = $myemail;
		$email_subject = "Chinese Notebook Contact Form: $name";
		$email_body = " Message details:\n Name: $name \n ".
		"Email: $email\n Message:\n $message";
		$headers = "From: $myemail\n";
		$headers = "Reply-To: $email";
		mail($to,$email_subject,$email_body,$headers);
	}
?>
