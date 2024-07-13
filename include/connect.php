<?php

$hostname = "sql205.infinityfree.com";
$username = "if0_35730005";
$password = "0s41EI3InAjyrc";
$db = "if0_35730005_hgl";

$con = mysqli_connect($hostname, $username, $password, $db);
if (!$con) {
    die("connection failed");
}
