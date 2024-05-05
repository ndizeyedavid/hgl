<?php
session_start();

include "connect.php";
if ($_SESSION['id']){
    $user_id = $_SESSION['id'];

    if (isset($_POST['add'])){
        $img_id = rand();
        $img_desc = mysqli_real_escape_string($con, $_POST['desc']);
        $img = $_FILES['thumb']['name'];

        $ext = explode(".", $img);
        $ext = end($ext);

        $img_name = $img_id.'.'.$ext;
        $upload = move_uploaded_file($_FILES['thumb']['tmp_name'], "../images/gallery/$img_name");
        if ($upload){
            $insert = mysqli_query($con, "INSERT INTO gallery(img_id, image, image_description) VALUES('{$img_id}', '{$img_name}', '{$img_desc}')");
            if ($insert){
                echo "succ";
                header("location: ../new_gallery.php?succ");
            }else{
                echo "err";
                header("location: ../new_gallery.php?err");
            }
        }else{
            echo "error....";
        }
    }
}else{
    header("location: ../");
}

?>