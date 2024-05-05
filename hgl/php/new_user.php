<?php
include "connect.php";
session_start();

if ($_SESSION['id']){
    
    if (isset($_POST['add'])){
        $user_id = rand();
        $name = mysqli_real_escape_string($con, $_POST['name']);
        $email = mysqli_real_escape_string($con, $_POST['email']);
        $role = mysqli_real_escape_string($con, $_POST['role']);
        $gender = mysqli_real_escape_string($con, $_POST['gender']);
        $pswd = substr($user_id, 2, 4).substr($role, 0, 3)."@".substr($user_id, 4, 2).strtoupper(substr($name, 0, 1));

        $verify = mysqli_query($con, "SELECT * FROM users WHERE email='{$email}'");
        if (mysqli_num_rows($verify)==0){    
            $img_name = $_FILES['profile']['name'];

            $ext = explode(".", $img_name);
            $ext = end($ext);

            $profile = "$user_id.$ext";

            $upload_img = move_uploaded_file($_FILES['profile']['tmp_name'], "../images/team/$profile");
            if ($upload_img){
                $add = mysqli_query($con, "INSERT INTO users(user_id, user_name, email, password, gender, role, profileImg) VALUES('{$user_id}', '{$name}', '{$email}', '{$pswd}', '{$gender}', '{$role}', '{$profile}')");
                if ($add){
                    header("location: ../new_user.php?succ");
                }else{
                    header("location: ../new_user.php?err");
                }
            }else{
                header("location: ../new_user.php?err");
            }
        }else{
            echo "
            <script>
                alert('User already exists in the database.');
                window.location.assign('../new_user.php');
            </script>
            ";
        }
    }else{
        header("location: ../index.php");
    }

}else{
    header("location: ../login.php");
}