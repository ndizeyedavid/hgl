<?php
include "connect.php";
if (isset($_GET['value'])){
    $event_id = $_GET['id'];
    $value = $_GET['value'];

    $update = mysqli_query($con, "UPDATE events SET progress='{$value}' WHERE event_id='{$event_id}'");
    if ($update){
        echo "succ";
    }else{
        echo "err";
    }
}