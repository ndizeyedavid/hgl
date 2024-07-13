<?php
include "connect.php"; 
session_start();
if ($_SESSION['id']){
    if ($_GET['id']){
        $id = $_GET['id'];

        $del = mysqli_query($con, "DELETE FROM events WHERE event_id='{$id}'");

        if($del){
            echo "succ";
            header("location: ../events.php?succ");
        }else{
            echo "err";
            header("location: ../events.php?err");
        }
    }
}

?>