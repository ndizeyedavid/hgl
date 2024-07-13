<?php
include "connect.php";
session_start();

if ($_SESSION['id']){
    
    if (isset($_POST['add'])){
        $event_id = rand();
        $event_name = mysqli_real_escape_string($con, $_POST['name']);
        $event_desc = mysqli_real_escape_string($con, $_POST['desc']);
        $primary = mysqli_real_escape_string($con, $_POST['primary']);
        $secondary = mysqli_real_escape_string($con, $_POST['secondary']);
        $start = mysqli_real_escape_string($con, $_POST['start']);
        $deadline = mysqli_real_escape_string($con, $_POST['deadline']);
        $budget = mysqli_real_escape_string($con, $_POST['budget']);
        
        $img_name = $_FILES['thumb']['name'];

        $ext = explode(".", $img_name);
        $ext = end($ext);

        $thumbnail = "$event_id.$ext";

        $upload_img = move_uploaded_file($_FILES['thumb']['tmp_name'], "../images/events/$thumbnail");
        if ($upload_img){
            $add = mysqli_query($con, "INSERT INTO events(event_id, event_name, event_desc, start_date, primary_operator, secondary_operator, deadline, status, budget, event_thumbnail) VALUE('{$event_id}', '{$event_name}', '{$event_desc}', '{$start}', '{$primary}', '{$secondary}', '{$deadline}', 'ON GOING','{$budget}', '{$thumbnail}')");
            if ($add){
                header("location: ../new_event.php?succ");
            }else{
                header("location: ../new_event.php?err");
            }
        }else{
            header("location: ../new_event.php?err");
        }
    }else{
        header("location: ../index.php");
    }

}else{
    header("location: ../login.php");
}