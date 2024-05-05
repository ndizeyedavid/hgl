<?php

include "connect.php";
session_start();
if ($_SESSION['id']) {

    // about us section
    $about_title = mysqli_real_escape_string($con, $_POST['about_title']);
    $goal = mysqli_real_escape_string($con, $_POST['goal']);
    $about = mysqli_real_escape_string($con, $_POST['about']);
    $about_image = $_FILES['about_img']['name'];

    // social links
    $facebook = mysqli_real_escape_string($con, $_POST['facebook']);
    $instagram = mysqli_real_escape_string($con, $_POST['instagram']);
    $youtube = mysqli_real_escape_string($con, $_POST['youtube']);
    $twitter = mysqli_real_escape_string($con, $_POST['twitter']);

    // motto
    $motto = mysqli_real_escape_string($con, $_POST['motto']);

    // slideshow

    // === slide 1 ===
    $slide1_title = mysqli_real_escape_string($con, $_POST['slide_title_1']);
    $slide1_subtitle = mysqli_real_escape_string($con, $_POST['slide_subtitle_1']);
    $slide1_image = $_FILES['slide_img_1']['name'];

    // === slide 2 ===
    $slide2_title = mysqli_real_escape_string($con, $_POST['slide_title_2']);
    $slide2_subtitle = mysqli_real_escape_string($con, $_POST['slide_subtitle_2']);
    $slide2_image = $_FILES['slide_img_2']['name'];

    // === slide 3 ===
    $slide3_title = mysqli_real_escape_string($con, $_POST['slide_title_3']);
    $slide3_subtitle = mysqli_real_escape_string($con, $_POST['slide_subtitle_3']);
    $slide3_image = $_FILES['slide_img_3']['name'];

    // CONTACT INFO
    $address = mysqli_real_escape_string($con, $_POST['address']);
    $phone = mysqli_real_escape_string($con, $_POST['phone']);
    $email = mysqli_real_escape_string($con, $_POST['email']);

    // ===== uploading files =====

    // upload about img
    $ext = explode(".", $about_image);
    $ext = end($ext);
    $about_img_name = "about." . $ext;
    $upload_about_img = move_uploaded_file($_FILES['about_img']['name'], "../images/content/$about_img_name");

    // upload slide 1 img
    $ext = explode(".", $slide1_image);
    $ext = end($ext);
    $slide1_name = "slide1." . $ext;
    $upload_slide1 = move_uploaded_file($_FILES['slide_img_1']['name'], "../images/content/$slide1_name");

    // upload slide 2 img
    $ext = explode(".", $slide2_image);
    $ext = end($ext);
    $slide2_name = "slide2." . $ext;
    $upload_slide2 = move_uploaded_file($_FILES['slide_img_2']['name'], "../images/content/$slide2_name");

    // upload slide 3 img
    $ext = explode(".", $slide3_image);
    $ext = end($ext);
    $slide3_name = "slide3." . $ext;
    $upload_slide3 = move_uploaded_file($_FILES['slide_img_3']['name'], "../images/content/$slide3_name");



    $sql = "UPDATE content SET about_title = '{$about_title}', goal = '{$goal}', about = '{$about}', facebook = '{$facebook}', instagram = '{$instagram}',youtube = '{$youtube}', twitter = '{$twitter}', motto = '{$motto}', slide1_title = '{$slide1_title}', slide1_subtitle = '{$slide1_subtitle}', slide2_title = '{$slide2_title}', slide2_subtitle = '{$slide2_subtitle}', slide3_title = '{$slide3_title}', slide3_subtitle = '{$slide3_subtitle}', address = '{$address}', phone = '{$phone}', email = '{$email}', about_image = '{$about_img_name}', slide1_img = '{$slide1_name}', slide2_img = '{$slide2_name}', slide3_img='{$slide3_name}'";

    $update = mysqli_query($con, $sql);
    if ($update) {
        echo "
        succ
        <script>
        window.location.assign('../content.php?succ');
        </script>
        ";
    } else {
        echo "
        err
        <script>
        window.location.assign('../content.php?err');
        </script>
        ";
    }
}
