<?php

include "connect.php";

session_start();

if (isset($_GET['id'])){
    $user_id = mysqli_real_escape_string($con, $_GET['id']);

    $fetch = mysqli_query($con, "SELECT * FROM users WHERE user_id='{$user_id}'");

    $data = mysqli_fetch_assoc($fetch);

    // Sessions
    $_SESSION['id'] = $data['user_id'];
    $_SESSION['name'] = $data['user_name'];
    $_SESSION['email'] = $data['email'];
    $_SESSION['role'] = $data['role'];
    $_SESSION['profile'] = $data['profileImg'];

    if ($_SESSION['id']){
        header("location: ../index.php");
    }else{
        header("location: ../login.php?err=2");
    }
    
}else{
    header("location: ../login.php?err=2");
}