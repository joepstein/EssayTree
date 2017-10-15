<?php

session_start();

include 'dbh.inc.php';

$all = mysqli_real_escape_string($conn, $_POST['all']);

$sql = "SELECT * FROM users WHERE user_uid = '$uid'";
mysqli_query($conn, $sql);

//$sql = "INSERT INTO useressays (essay_name, essay_text, user_id) VALUES ();";
mysqli_query($conn, $sql);

header("location: account.php");


