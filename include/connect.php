<?php

$hostname = "localhost";
$username = "root";
$password = "";
$db = "hgl";

$con = mysqli_connect($hostname, $username, $password, $db);
if (!$con) {
    die("connection failed");
}
