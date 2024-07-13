<?php

include "../admin/php/connect.php";

if (isset($_POST['submit'])) {
    $msg_id = rand();
    $name = mysqli_real_escape_string($con, $_POST['name']);
    $email = mysqli_real_escape_string($con, $_POST['email']);
    $msg = mysqli_real_escape_string($con, $_POST['message']);

    $send = mysqli_query($con, "INSERT INTO message (msg_id, msg_name, msg_email, message) VALUES('{$msg_id}', '{$name}', '{$email}', '{$msg}')");

    if ($send) {
        $notif = mysqli_query($con, "INSERT INTO notif (user_id, category, content) VALUES('0910', 'info', '<b>$name</b> Sent a message')");
        echo "
        <script>
        alert('Message sent successfully, Thank you❤️');
        window.location.assign('../index.php');
        </script>
        ";
    } else {
        echo "
        <script>
        alert('An error occurred');
        window.location.assign('../contact.php');
        </script>
        ";
    }
}
