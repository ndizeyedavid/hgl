<?php
include "../admin/php/connect.php";

if (isset($_POST['intern'])) {
    $role = "internship";
    $intern_id = uniqid();

    $fname = mysqli_real_escape_string($con, $_POST["fname"]);
    $lname = mysqli_real_escape_string($con, $_POST["lname"]);
    $full_name = $fname . ' ' . $lname;
    $email = mysqli_real_escape_string($con, $_POST["email"]);
    $phone = mysqli_real_escape_string($con, $_POST["phone"]);

    $cv = $_FILES["cv"]['name'];
    $ext = explode(".", $cv);
    $ext = end($ext);

    $cv_name = $intern_id . "." . $ext;

    $upload = move_uploaded_file($_FILES['cv']['tmp_name'], "../admin/images/team/$cv_name");
    $add = mysqli_query($con, "INSERT INTO  users(user_id, user_name, email, password, phone, role, profileImg) VALUES ('{$intern_id}', '{$full_name}', '{$email}', '{$intern_id}', '{$phone}', 'intern', '{$cv_name}')");
}
if (isset($_POST['volunteer'])) {
    $role = "volunteer";
    $apply_id = uniqid();

    $fname = mysqli_real_escape_string($con, $_POST["fname"]);
    $lname = mysqli_real_escape_string($con, $_POST["lname"]);
    $full_name = $fname . ' ' . $lname;
    $email = mysqli_real_escape_string($con, $_POST["email"]);
    $phone = mysqli_real_escape_string($con, $_POST["phone"]);

    $cv = $_FILES["cv"]['name'];
    $ext = explode(".", $cv);
    $ext = end($ext);

    $cv_name = $apply_id . "." . $ext;

    $upload = move_uploaded_file($_FILES['cv']['tmp_name'], "../admin/images/team/$cv_name");
    $add = mysqli_query($con, "INSERT INTO  users(user_id, user_name, email, password, phone, role, profileImg) VALUES ('{$apply_id}', '{$full_name}', '{$email}', '{$apply_id}', '{$phone}', 'apply', '{$cv_name}')");
}
if (isset($_POST['donate'])) {
    $names = mysqli_real_escape_string($con, $_POST['name']);
    $email = mysqli_real_escape_string($con, $_POST['email']);
    $amount = mysqli_real_escape_string($con, $_POST['amount']);

    if (count($m = explode("$", $amount)) > 1) {
        $amount = $m[1];
    }

    header("location: donate.php?name=$names&email=$email&amount=$amount");
}

if ($add) {
    $msg = "$full_name sent an application on <b>$role</b>";
    $notif = mysqli_query($con, "INSERT INTO notif(user_id, category, content) VALUES('0910', 'info', '{$msg}')");
    echo "<script>
    alert('Application Sent Successfully. You will be notified shortly after!');
    window.location.assign('../');
    </script>";
} else {
    echo "<script>
    alert('Internship application rejected. Please try again later!');
    // window.location.assign('../');
    </script>";
}
