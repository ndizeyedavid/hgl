<?php
session_start();
include "connect.php";

if ($_SESSION['id']) {
    if (isset($_GET['id'])) {
        $user_id = rand();
        $id = $_GET['id'];
        $upd = mysqli_query($con, "UPDATE users SET user_id = '{$user_id}', status = 'approved' WHERE id = '{$id}'");

        if ($upd) {
            header("location: ../interns.php?succ");
        } else {
            header("location: ../team.php?err");
        }
    }
}
