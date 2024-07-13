<?php

$hostname = "sql205.infinityfree.com";
$username = "if0_35730005";
$password = "0s41EI3InAjyrc";
$database = "if0_35730005_hgl";

$con = mysqli_connect($hostname, $username, $password, $database);

if (!$con) {
    die("connection failed");
}
