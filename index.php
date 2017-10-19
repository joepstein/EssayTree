<?php
	include_once 'header.php';
?>

<style>
.activation{
	color: red;
	font-size: 25px;
	text-align:center;
	font-style: bold;
}
</style>

<section class="main-container">
	<div class="main-wrapper">
		<?php
			if(isset($_SESSION['active']) && $_SESSION['active'] == 0 AND !empty($_SESSION['u_id'])){
				echo "<div class='activation'>Please activate your account before logging in!</div>";
			} elseif(isset($_SESSION['active']) && $_SESSION['active'] == 1 AND !empty($_SESSION['u_id'])){
				header("Location: account.php");
			}
		?>
		<h2>Home</h2>
	</div>
	<img src="essayTree.png" width="100%" height="478">
</section>

<?php
	include_once 'footer.php';
?>