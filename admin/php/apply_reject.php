<?php
session_start();
include "connect.php";

if ($_SESSION['id']) {
    if (isset($_GET['id'])) {
        $id = $_GET['id'];
        $del = mysqli_query($con, "DELETE FROM users WHERE id='{$id}'");

        if ($del) {
            header("location: ../team.php?succ");
        } else {
            header("location: ../team.php?err");
        }
    }
}
