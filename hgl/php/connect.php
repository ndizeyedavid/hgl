<?php

$hostname = "localhost";
$username = "root";
$password = "";
$database = "hgl";

$con = mysqli_connect($hostname, $username, $password, $database);

if (!$con){
    die("connection failed");
}