<?php
	include_once 'header.php';
	include 'includes/dbh.inc.php';
?>
<style>
a{
	font-size: 27.5px;
}
</style>
<section class="account-main-container">
	<div class="account-main-wrapper">
		<a href="newEssayTree.php">+ Create a new Essay Tree! </a><br /><br />
		<?php
			$u_id = $_SESSION['u_id'];
			$sql = "SELECT * FROM useressays WHERE user_id = '$u_id';";
			$result = mysqli_query($conn, $sql);
			
			while($row = mysqli_fetch_assoc($result)){
				$essayName = $row['essay_name'];

				echo "<br /><br /><a href='loadedEssayTree.php' style='margin-left: 360px;'>{$essayName}</a><br /><br />";
			}
		?>
	</div>
</section>

<?php
	include_once 'footer.php';
?>