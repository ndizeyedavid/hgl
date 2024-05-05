<?php
include "connect.php";
session_start();

if ($_SESSION['id']){
    
    if (isset($_POST['user_id'])){
        $user_id = $_POST['user_id'];
        $name = mysqli_real_escape_string($con, $_POST['name']);
        $email = mysqli_real_escape_string($con, $_POST['email']);
        $role = mysqli_real_escape_string($con, $_POST['role']);
        $gender = mysqli_real_escape_string($con, $_POST['gender']);
        $profile = $_FILES['profile']['name'];

        $existing_data = mysqli_query($con, "SELECT * FROM users WHERE user_id='{$user_id}'");
        $existing_data = mysqli_fetch_assoc($existing_data);
        $existing_img = $existing_data['profileImg'];
        if (empty($gender)){
            $gender = $existing_data['gender'];
        }
        if (empty($role)){
            $role = $existing_data['role'];
        }
        if (empty($profile)){
            $profile = $existing_data['profileImg'];
            $update = mysqli_query($con, "UPDATE users SET user_name='{$name}', email='{$email}', role='{$role}', gender='{$gender}' WHERE user_id='{$user_id}'");
        }else{
            unlink("../images/team/$existing_img");
            $img_name = $_FILES['profile']['name'];
            
            $ext = explode(".", $img_name);
            $ext = end($ext);
            
            $profile = "$user_id.$ext";
            
            $upload_img = move_uploaded_file($_FILES['profile']['tmp_name'], "../images/team/$profile");
            if ($upload_img){
                $update = mysqli_query($con, "UPDATE users SET user_name='{$name}', email='{$email}', role='{$role}', gender='{$gender}', profileImg='{$profile}' WHERE user_id='{$user_id}'");
            }else{
                header("location: ../new_user.php?err");
            }
        }
        if ($update){
            header("location: ../team.php?succ");
        }else{
            header("location: ../team.php?err");
        }
    }
}
