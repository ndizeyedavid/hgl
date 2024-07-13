<?php
session_start();

include "connect.php";
if ($_SESSION['id']) {
    if (isset($_POST['submit'])) {
        $mission = mysqli_real_escape_string($con, $_POST['mission']);
        $vision = mysqli_real_escape_string($con, $_POST['vision']);
        $goal = mysqli_real_escape_string($con, $_POST['goal']);

        $insert = mysqli_query($con, "UPDATE about SET mission='{$mission}', vision='{$vision}', goal='{$goal}'");
        if ($insert) {
            $out = "
            <script>
            alert('Data Updated Successfully');
            window.location.assign('../about.php');
            </script>
            ";
        } else {
            $out = "
            <script>
            alert('Operation Failed');
            window.location.assign('../about.php');
            </script>
            ";
        }

        echo $out;
    }
} else {
    header("location: ../");
}
