<?php

include "connect.php";
session_start();

if ($_SESSION['id']) {
    if (isset($_GET['id'])) {
        $id = $_GET['id'];
        $fetch = mysqli_query($con, "SELECT * FROM announcement WHERE id='{$id}'");
        $data = mysqli_fetch_assoc($fetch);
        $prev_img = $data['image'];
        $prev_file = $data['file'];
        $del = unlink("../docs/$prev_file");
        if ($del) {
            $del_announcement = mysqli_query($con, "DELETE FROM announcement WHERE id='{$id}'");
            if ($del_announcement) {
                header("location: ../anouncements.php?succ");
            } else {
                header("location: ../anouncements.php?err");
            }
        }
    }
}
