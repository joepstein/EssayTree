<?php

session_start();
$_SESSION['email'] = 0;

if(isset($_POST['submit'])){

	include_once 'dbh.inc.php';

	$email = mysqli_real_escape_string($conn, $_POST['email']);
	$uid = mysqli_real_escape_string($conn, $_POST['uid']);
	$pwd = mysqli_real_escape_string($conn, $_POST['pwd']);
	$cpwd = mysqli_real_escape_string($conn, $_POST['cpwd']);
	$cemail = mysqli_real_escape_string($conn, $_POST['cemail']);
	$hash = $conn->escape_string(md5(rand(0,1000)));

	//Error Handlers
	//Check For Empty Fields
	if(empty($uid) || empty($email) || empty($cemail) || empty($pwd) || empty($cpwd)){

		$_SESSION['message'] = 'You have left some fields empty!';
		header("Location: ../signup.php?signup=empty");
		exit();

	} else {

		//Check If Username Is Unique
		$sql = "SELECT * FROM users WHERE user_uid='$uid'";
		$result = mysqli_query($conn, $sql);
		$resultCheck = mysqli_num_rows($result);

		if($resultCheck > 0){

			$_SESSION['message'] = 'This username has already been taken!';
			header("Location: ../signup.php?signup=usertaken");
			exit();

		} else {

			if(!filter_var($email, FILTER_VALIDATE_EMAIL)){

				$_SESSION['message'] = 'You must enter a proper email!';
				header("Location: ../signup.php?signup=email");
				exit();

			} else {

				$sql = "SELECT * FROM users WHERE user_email='$email'";
				$result = mysqli_query($conn, $sql);
				$resultCheck = mysqli_num_rows($result);

				if($resultCheck > 0){

					$_SESSION['message'] = 'This email has already been taken!';
					header("Location: ../signup.php?signup=emailtaken");
					exit();

				} else {

					if($cemail != $email){

						$_SESSION['message'] = 'Please try to confirm your email again!';
						header("Location: ../signup.php?signup=noemailmatch");
						exit();

					} else{

						$regex = '/^.*(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{7,}).*$/';


						if(!preg_match($regex, $pwd)){

							$_SESSION['message'] = 'Please include one symbol, one number, and at least 7 characters in your password!';
							header("Location: ../signup.php?signup=invalidpassword");
							exit();

						}else {
							if($cpwd != $pwd){

								$_SESSION['message'] = 'Please try to confirm your password again!';
								header("Location: ../signup.php?signup=nopasswordmatch");
								exit();

							}else{
								
								//Hashing The Password
								$hashedPwd = password_hash($pwd, PASSWORD_DEFAULT);
								//Insert The User Into The Database
								$sql = "INSERT INTO users (user_email, user_uid, user_pwd, hash) VALUES ('$email', '$uid', '$hashedPwd', '$hash');";
								mysqli_query($conn, $sql);

								$_SESSION['active'] = 0;
								$_SESSION['email'] = 1;

								$to = $email;
								$subject = 'Account Verification (Essay Tree)';

$message_body = 'Hello '.$uid.', 

Thank you for signing up!

Please click this link to activate your account:

http://localhost/EssayTree/verify.php?email='.$email.'&hash='.$hash;

								mail($to, $subject, $message_body);

								header("Location: ../signup.php?signup=success");

								$_SESSION['message'] = "Thank you for signing up, an activation email has been sent to you. Please, verify your account to be able to login.";
								exit();

							}
						}
					}	
				}
			}
		}
	}

} else {
	header("Location: ../signup.php");
	exit();
}