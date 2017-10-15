<?php 
/* Verifies registered user email, the link to this page
   is included in the register.php email message 
*/
include_once 'includes/dbh.inc.php';
session_start();

// Make sure email and hash variables aren't empty
if(isset($_GET['email']) && !empty($_GET['email']) AND isset($_GET['hash']) && !empty($_GET['hash']))
{
    $email = mysqli_real_escape_string($conn, $_GET['email']); 
    $hash = mysqli_real_escape_string($conn, $_GET['hash']); 
    
    // Select user with matching email and hash, who hasn't verified their account yet (active = 0)
    $result = $conn->query("SELECT * FROM users WHERE user_email='$email' AND hash='$hash' AND active='0'");

    if ( $result->num_rows == 0 )
    { 
        echo "Account has already been activated or the URL is invalid!";
    }
    else {
        echo "Your account has been activated!";
        
        // Set the user status to active (active = 1)
        $conn->query("UPDATE users SET active='1' WHERE user_email='$email'") or die($conn->error);
        $_SESSION['active'] = 1;
        
    }
}
else {
    echo "Invalid parameters provided for account verification!";
}     
?>
