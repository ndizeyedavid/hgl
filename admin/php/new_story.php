<?php

include "connect.php";
session_start();

if (isset($_POST['add'])) {
    $story_id = rand();
    $story_title = mysqli_real_escape_string($con, $_POST['title']);
    $story_content = mysqli_real_escape_string($con, $_POST['story_content']);

    $img_name = $_FILES['thumb']['name'];

    $ext = explode(".", $img_name);
    $ext = end($ext);

    $thumbnail = "$story_id.$ext";

    $upload_img = move_uploaded_file($_FILES['thumb']['tmp_name'], "../images/storys/$thumbnail");
    if ($upload_img) {
        $insert = mysqli_query($con, "INSERT INTO story(story_id, story_title, story_content, story_image, poster) VALUES('{$story_id}', '{$story_title}', '{$story_content}', '{$thumbnail}', 'admin')");
        if ($insert) {
            echo "succ";
            header("location: ../success.php?succ");
        } else {
            echo "error";
        }
    } else {
        echo "error";
    }
}
