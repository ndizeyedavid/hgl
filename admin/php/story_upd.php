<?php

include "connect.php";
session_start();

if (isset($_POST['add'])) {
    $id = $_POST['id'];
    $story_id = rand();
    $story_title = mysqli_real_escape_string($con, $_POST['title']);
    $story_content = mysqli_real_escape_string($con, $_POST['story_content']);
    $img_name = $_FILES['thumb']['name'];

    if (!empty($img_name)) {

        $ext = explode(".", $img_name);
        $ext = end($ext);

        $thumbnail = "$story_id.$ext";

        $upload_img = move_uploaded_file($_FILES['thumb']['tmp_name'], "../images/storys/$thumbnail");
        $query = "UPDATE story SET story_title='{$story_title}', story_content='{$story_content}', story_image='{$thumbnail}' WHERE id='{$id}'";
        echo "upload";
    } else {
        echo "not upload";
        $query = "UPDATE story SET story_title='{$story_title}', story_content='{$story_content}' WHERE id='{$id}'";
    }

    $insert = mysqli_query($con, $query);
    if ($insert) {
        echo "\nsucc";
        header("location: ../success.php?succ");
    } else {
        echo "error";
    }
}
