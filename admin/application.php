<?php
include "php/connect.php";
session_start();
if ($_SESSION['id']) {
    $user_id = $_SESSION['id'];
?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <?php include "include/style.php"; ?>
    </head>

    <body>

        <!--*******************
        Preloader start
    ********************-->
        <div id="preloader">
            <div class="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
        <!--*******************
        Preloader end
    ********************-->

        <!--**********************************
        Main wrapper start
    ***********************************-->
        <div id="main-wrapper">

            <!--**********************************
            Nav header start
        ***********************************-->
            <?php include "include/top.php"; ?>

            <?php include "include/side.php"; ?>

            <div class="content-body">
                <div class="container-fluid">

                    <div class="row">

                        <div class="col-xl-12">
                            <div class="row">
                                <div class="col"><a href="volunteer.php"><button class="btn btn-primary" style="width: 100%; height: 300px;"><i class="bi bi-person-bounding-box" style="font-size: 80px;"></i><br><span style="font-size: 30px;">Volunteers</span></button></a></div>
                                <div class="col"><a href="intern.php"><button class="btn btn-info" style="width: 100%; height: 300px;"><i class="bi bi-person-badge" style="font-size: 80px;"></i><br><span style="font-size: 30px;">Internship</span></button></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer">
                <div class="copyright">
                    <p>Copyright © Designed &amp; Developed by <a href="javascript:void(0)" target="_blank">ARSENE</a> 2024</p>
                </div>
            </div>
            <!--**********************************
            Footer end
        ***********************************-->



        </div>
        <!-- Required vendors -->
        <?php include "include/scripts.php" ?>

    </body>

    </html>
<?php
} else {
    header("location: login.php");
}

?>