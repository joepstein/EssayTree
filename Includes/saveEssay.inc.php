<?php

session_start();

include 'dbh.inc.php';

$all = mysqli_real_escape_string($conn, $_POST['all']);
$name = mysqli_real_escape_string($conn, $_POST['name']);
$u_id = mysqli_real_escape_string($conn, $_SESSION['u_id']);

$sql = "INSERT INTO useressays (essay_name, essay_text, user_id) VALUES ('$name', '$all', '$u_id');";
mysqli_query($conn, $sql);

exit();


