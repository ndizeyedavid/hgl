<?php

include "connect.php";
session_start();

if (isset($_POST['add'])) {
    $report_id = rand();
    $title = mysqli_real_escape_string($con, $_POST['title']);
    $desc = mysqli_real_escape_string($con, $_POST['desc']);
    $category = mysqli_real_escape_string($con, $_POST['category']);

    $img_name = $_FILES['thumb']['name'];

    $ext = explode(".", $img_name);
    $ext = end($ext);

    $thumbnail = "$report_id.$ext";

    $file_name = $_FILES['rep']['name'];
    $ext = explode(".", $file_name);
    $ext = end($ext);

    $file = "$report_id.$ext";

    $upload_img = move_uploaded_file($_FILES['thumb']['tmp_name'], "../images/reports/$thumbnail");
    $upload_file = move_uploaded_file($_FILES['rep']['tmp_name'], "../docs/$file");

    if ($upload_file) {
        $insert = mysqli_query($con, "INSERT INTO report(report_id, title, description, category, image, file) VALUES('{$report_id}', '{$title}', '{$desc}', '{$category}', '{$thumbnail}', '{$file}')");
        if ($insert) {
            header("location: ../reports.php?succ");
        } else {
            echo "Failed to insert data into database";
        }
    }
}
