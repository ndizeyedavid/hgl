<?php

include "../include/connect.php";

if (isset($_POST['submit'])) {
    $comment_id = rand();
    $blog_id = $_POST['blog_id'];
    $name = mysqli_real_escape_string($con, $_POST['name']);
    $email = mysqli_real_escape_string($con, $_POST['email']);
    $comment = mysqli_real_escape_string($con, $_POST['comment']);

    $insert = mysqli_query($con, "INSERT INTO blog_comments (comment_id, commenter_id, blog_id, comment) VALUES('{$comment_id}', '{$name}', '{$blog_id}', '{$comment}') ");
    if ($insert) {
        $email_insert = mysqli_query($con, "REPLACE INTO comment_email(email) VALUES('{$email}')");
        echo "<script>
        alert('comment posted successfully');
        window.location.assign('./?id=$blog_id');
        </script>";
        // header("Location: ");
    } else {
        echo "<script>
        alert('An error occurred');
        window.location.assign('./?id=$blog_id');
        </script>";
    }
}
