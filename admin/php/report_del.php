<?php

include "connect.php";
session_start();

if ($_SESSION['id']) {
    if (isset($_GET['id'])) {
        $id = $_GET['id'];
        $fetch = mysqli_query($con, "SELECT * FROM report WHERE id='{$id}'");
        $data = mysqli_fetch_assoc($fetch);
        $prev_img = $data['image'];
        $prev_file = $data['file'];
        $del = unlink("../images/reports/$prev_img");
        $del = unlink("../docs/$prev_file");
        if ($del) {
            $del_report = mysqli_query($con, "DELETE FROM report WHERE id='{$id}'");
            if ($del_report) {
                header("location: ../reports.php?succ");
            } else {
                header("location: ../reports.php?err");
            }
        }
    }
}
