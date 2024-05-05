Authenticating....
<?php

include "connect.php";

if (isset($_POST['email'])){
    $email = mysqli_real_escape_string($con, $_POST['email']);
    $pswd = mysqli_real_escape_string($con, $_POST['pswd']);

    $verify = mysqli_query($con, "SELECT * FROM users WHERE email='{$email}'");

    if (mysqli_num_rows($verify)>0){
        $verify_pswd = mysqli_fetch_assoc($verify);

        if($pswd == $verify_pswd['password']){
            $id = $verify_pswd['user_id'];
            header("location: session.php?id=$id");
        }else{
            header("location: ../login.php?err=1");
        }
    }else{
        header("location: ../login.php?err=2");
    }
}