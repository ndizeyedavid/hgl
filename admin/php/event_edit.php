<?php 
include "connect.php";
session_start();

if ($_SESSION['id']){

    if (isset($_POST['event_id'])){
        $event_id = $_POST['event_id'];
        $event_name = mysqli_real_escape_string($con, $_POST['name']);
        $event_desc = mysqli_real_escape_string($con, $_POST['desc']);
        $primary = mysqli_real_escape_string($con, $_POST['primary']);
        echo $primary."<br>";
        $secondary = mysqli_real_escape_string($con, $_POST['secondary']);
        $start_date = $_POST['start'];
        $deadline = $_POST['deadline'];
        $status = $_POST['status'];
        $thumbnail = $_FILES['thumb']['name'];
        $budget = mysqli_real_escape_string($con, $_POST['budget']);

        $existing_fetch = mysqli_query($con, "SELECT * FROM events WHERE event_id='{$event_id}'");
        $existing = mysqli_fetch_assoc($existing_fetch);

        $existing_img = $existing['event_thumbnail'];
        if (empty($primary)){
            $primary = $existing['primary_operator'];
        }
        if (empty($secondary)){
            $secondary = $existing['secondary_operator'];
        }
        if (empty($status)){
            $status = $existing['status'];
        }
        if(empty($thumbnail)){
            $sql = "UPDATE events SET status='{$status}', event_name='{$event_name}', event_desc='{$event_desc}', start_date='{$start_date}', primary_operator='{$primary}', secondary_operator='{$secondary}', deadline='{$deadline}', budget='{$budget}' WHERE event_id='{$event_id}'";
        }else{
            $ext = explode(".", $thumbnail);
            $ext = end($ext);
            $new_thumb = $event_id.'.'.$ext;            
            unlink("../images/events/$existing_img");

            $upload = move_uploaded_file($_FILES['thumb']['tmp_name'], "../images/events/$new_thumb");
            if ($upload){
                $sql = "UPDATE events SET status='{$status}', event_name='{$event_name}', event_desc='{$event_desc}', start_date='{$start_date}', primary_operator='{$primary}', secondary_operator='{$secondary}', deadline='{$deadline}', budget='{$budget}', event_thumbnail='{$new_thumb}' WHERE event_id='{$event_id}'";

            }
        }

        $update = mysqli_query($con, $sql);
        if ($update){
            header("location: ../events.php?succ");
            echo "succ";
        }else{
            header("location: ../events.php?err");
            echo "err";
        }
    }

}else{
    header("location: ../login.php");
}