<?php
session_start();
include "connect.php";

if ($_SESSION['id']) {
    if (isset($_GET['id'])) {
        $user_id = rand();
        $id = $_GET['id'];
        $role = $_GET['role'];
        $upd = mysqli_query($con, "UPDATE users SET user_id = '{$user_id}', role = '{$role}', status = 'approved' WHERE id = '{$id}'");

        if ($upd) {
            header("location: ../team.php?succ");
        } else {
            header("location: ../team.php?err");
        }
    }
}
