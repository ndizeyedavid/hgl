<?php 

include "connect.php";
session_start();

if ($_SESSION['id']){
    if (isset($_GET['id'])){
        $id = $_GET['id'];

        $delete = mysqli_query($con, "DELETE FROM users WHERE user_id='{$id}'");
        if ($delete){
            header("location: ../team.php?succ");
        }else{
            header("location: ../team.php?err");
        }
    }
}