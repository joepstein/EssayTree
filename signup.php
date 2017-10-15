<?php
	include_once 'header.php';
?>

<style>
.wrong{
	color: red;
	font-size: 25px;
	text-align:center;
	font-style: bold;
	padding: 50px 0px 0px 0px;
}

.right{
	color: green;
	font-size: 25px;
	text-align:center;
	font-style: bold;
	padding: 50px 0px 0px 0px;
}
</style>

<?php
	if(empty($_SESSION['message'])){
		$_SESSION['email'] = -1;
	}elseif(isset($_SESSION['message']) && !empty($_SESSION['message']) AND $_SESSION['email'] == 0){
		echo "<div class='wrong'>" .$_SESSION['message']. "</div>";
		$_SESSION['message'] = "";
	} elseif($_SESSION['email'] == 1){
		echo "<div class='right'>" .$_SESSION['message']. "</div>";
		$_SESSION['email'] = 0;
		$_SESSION['message'] = "";
	}
?>

<section class="main-container">
	<div class="main-wrapper">
		<h2>Sign up</h2>
		<form class="signup-form" action="includes/signup.inc.php" method="post">
			<input type="text" name="uid" placeholder="Username">
			<input type="text" name="email" placeholder="E-mail">
			<input type="text" name="cemail" placeholder="Confirm your e-mail">
			<input type="password" name="pwd" placeholder="Password">
			<input type="password" name="cpwd" placeholder="Confirm your password">
			<button type="submit" name="submit">Sign up</button>
			<h1>Passwords must include one symbol, one number, and be at least 7 characters long.</h1>
		</form>
	</div>
</section>

<?php
	include_once 'footer.php';
?>