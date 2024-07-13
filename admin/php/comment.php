<?php

include "connect.php";
session_start();

if (isset($_POST['submit'])) {
    $comment_id = rand();
    $blog_id = $_POST['blog_id'];
    $comment = mysqli_real_escape_string($con, $_POST['comment']);

    $insert = mysqli_query($con, "INSERT INTO blog_comments (comment_id, commenter_id, blog_id, comment) VALUES('{$comment_id}', 'Admin', '{$blog_id}', '{$comment}') ");
    if ($insert) {
        echo "<script>
        alert('comment posted successfully');
        window.location.assign('../blog.php?id=$blog_id#cm-$comment_id');
        </script>";
        // header("Location: ");
    } else {
        echo "<script>
        alert('An error occurred');
        window.location.assign('../blog.php?id=$blog_id');
        </script>";
    }
}
