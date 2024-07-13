<?php

include "connect.php";
session_start();

if ($_SESSION['id']) {
    if (isset($_GET['id'])) {
        $id = $_GET['id'];
        $fetch = mysqli_query($con, "SELECT * FROM story WHERE id='{$id}'");
        $data = mysqli_fetch_assoc($fetch);
        $prev_img = $data['story_image'];
        $del = unlink("../images/storys/$prev_img");
        if ($del) {
            $del_story = mysqli_query($con, "DELETE FROM story WHERE id='{$id}'");
            if ($del_story) {
                header("location: ../success.php?succ");
            } else {
                header("location: ../success.php?err");
            }
        }
    }
}
