<?php

include "connect.php";
session_start();

if ($_SESSION['id']) {
    if (isset($_POST['submit'])) {
        $msg_id = rand();
        $title = mysqli_real_escape_string($con, $_POST['msg_title']);
        $msg = mysqli_real_escape_string($con, $_POST['msg']);

        $insert = mysqli_query($con, "INSERT INTO message (msg_id, msg_name, title, message) VALUES ('{$msg_id}', 'admin', '{$title}', '{$msg}')");
        if ($insert) {
            // header("location: ../message.php?succ");
            echo "
            <script>
                alert('Message posted successfully');
                window.location.assign('../message.php');
            </script>
            ";
        } else {
            echo "
            <script>
                alert('An Error Occured');
                window.location.assign('../message.php');
            </script>
            ";
            // header("location: ../message.php?err");
        }
    }
} else {
    header("location: ../");
}
