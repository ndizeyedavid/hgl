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
                                <div class="col-sm-4 mt-3"><a href="requirements.php"><button class="btn btn-primary" style="width: 100%; height: 300px;"><i class="bi bi-lightbulb" style="font-size: 80px;"></i><br><span style="font-size: 30px;">Requirements</span></button></a></div>
                                <div class="col-sm-4 mt-3"><a href="about.php"><button class="btn btn-primary" style="width: 100%; height: 300px;"><i class="bi bi-file-person" style="font-size: 80px;"></i><br><span style="font-size: 30px;">About us</span></button></a></div>
                                <div class="col-sm-4 mt-3"><a href="success.php"><button class="btn btn-primary" style="width: 100%; height: 300px;"><i class="bi bi-person-check-fill" style="font-size: 80px;"></i><br><span style="font-size: 30px;">Success Stories</span></button></a></div>
                                <div class="col-sm mt-3"><a href="reports.php"><button class="btn btn-primary" style="width: 100%; height: 300px;"><i class="bi bi-file-bar-graph" style="font-size: 80px;"></i><br><span style="font-size: 30px;">Reports</span></button></a></div>
                                <div class="col-sm mt-3"><a href="anouncements.php"><button class="btn btn-primary" style="width: 100%; height: 300px;"><i class="bi bi-megaphone" style="font-size: 80px;"></i><br><span style="font-size: 30px;">Announcements</span></button></a></div>
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