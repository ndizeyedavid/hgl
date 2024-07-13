<?php

include "connect.php";
session_start();

if (isset($_POST['add'])) {
    $report_id = rand();
    $title = mysqli_real_escape_string($con, $_POST['title']);
    $desc = mysqli_real_escape_string($con, $_POST['desc']);

    $file_name = $_FILES['rep']['name'];
    $ext = explode(".", $file_name);
    $ext = end($ext);

    $file = "$report_id.$ext";

    $upload_file = move_uploaded_file($_FILES['rep']['tmp_name'], "../docs/$file");

    if ($upload_file) {
        $insert = mysqli_query($con, "INSERT INTO announcement(ann_id, title, description, file) VALUES('{$report_id}', '{$title}', '{$desc}', '{$file}')");
        if ($insert) {
            header("location: ../anouncements.php?succ");
        } else {
            echo "Failed to insert data into database";
        }
    }
}
