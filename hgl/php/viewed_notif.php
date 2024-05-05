<?php

include "connect.php";
session_start();
if ($_SESSION['id']) {
    $upd = mysqli_query($con, "UPDATE notif SET opened = '1'");
    if ($upd) {
        header("location: ../index.php");
    } else {
        echo "Error";
    }
}
