<?php

include "../include/connect.php";

if (isset($_POST['send'])) {
    $msg_id = rand();
    $name = mysqli_real_escape_string($con, $_POST['name']);
    $email = mysqli_real_escape_string($con, $_POST['email']);
    $mobile = mysqli_real_escape_string($con, $_POST['number']);
    $title = mysqli_real_escape_string($con, $_POST['title']);
    $message = mysqli_real_escape_string($con, $_POST['message']);

    $send = mysqli_query($con, "INSERT INTO message(msg_id, msg_name, msg_email, msg_number, title, message) VALUES ('{$msg_id}', '{$name}', '{$email}', '{$mobile}', '{$title}', '{$message}')");

    if ($send) {
        $notif = mysqli_query($con, "INSERT INTO notif(user_id, category, content) VALUES ('0910', 'info', '<b>$name</b> sent a message.')");
        echo "<script>
        alert('Message sent successfully');
        window.location.assign('../forum?id=$msg_id');
        </script>";
    } else {
        echo "<script>
        alert('An error occurred');
        window.location.assign('../contact.php');
        </script>";
    }
}
