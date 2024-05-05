<?php

include "connect.php";
session_start();

if (isset($_POST['add'])) {
    $blog_id = rand();
    $blog_title = mysqli_real_escape_string($con, $_POST['title']);
    $blog_content = mysqli_real_escape_string($con, $_POST['blog_content']);
    $tags = mysqli_real_escape_string($con, $_POST['tags']);

    $img_name = $_FILES['thumb']['name'];

    $ext = explode(".", $img_name);
    $ext = end($ext);

    $thumbnail = "$blog_id.$ext";

    $upload_img = move_uploaded_file($_FILES['thumb']['tmp_name'], "../images/blogs/$thumbnail");
    if ($upload_img) {
        $insert = mysqli_query($con, "INSERT INTO blog(blog_id, blog_title, blog_content, blog_image, poster, tags) VALUES('{$blog_id}', '{$blog_title}', '{$blog_content}', '{$thumbnail}', 'admin', '{$tags}')");
        if ($insert) {
            echo "succ";
            header("location: ../new_blog.php?succ");
        } else {
            echo "error";
        }
    } else {
        echo "error";
    }
}
