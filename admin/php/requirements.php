<?php
session_start();

include "connect.php";
if ($_SESSION['id']) {
    $user_id = $_SESSION['id'];

    if (isset($_FILES['req'])) {
        $tmp_name = $_FILES['req']['tmp_name'];
        $verif = unlink("../docs/requirements.pdf");
        $upload = move_uploaded_file($tmp_name, "../docs/requirements.pdf");
        if ($upload) {
            $out = "
                <script>
                alert('File uploaded successfully');
                window.location.assign('../requirements.php');
                </script>
                ";
        } else {
            $out = "
                <script>
                alert('An error occurred!');
                window.location.assign('../requirements.php');
                </script>
                ";
        }

        echo $out;
    }
} else {
    header("location: ../");
}
