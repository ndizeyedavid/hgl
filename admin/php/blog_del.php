<?php

include "connect.php";
session_start();

if ($_SESSION['id']) {
    if (isset($_GET['id'])) {
        $id = $_GET['id'];
        $fetch = mysqli_query($con, "SELECT * FROM blog WHERE blog_id='{$id}'");
        $data = mysqli_fetch_assoc($fetch);
        $prev_img = $data['blog_image'];
        $del = unlink("../images/blogs/$prev_img");
        if ($del) {
            $del_blog = mysqli_query($con, "DELETE FROM blog WHERE blog_id='{$id}'");
            $del_blog_comment = mysqli_query($con, "DELETE FROM blog_comments WHERE blog_id='{$id}'");
            if ($del_blog_comment && $del_blog) {
                header("location: ../blog.php?succ");
            } else {
                header("location: ../blog.php?err");
            }
        }
    }
}
