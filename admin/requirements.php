<?php
include "php/connect.php";
session_start();
if ($_SESSION['id']) {
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
                    <div class="row page-titles">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item active"><a href="more.php">More</a></li>
                            <li class="breadcrumb-item"><a href="javascript:void(0)">requirements</a></li>
                        </ol>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title"></h4>
                                    <form action="php/requirements.php" method="POST" enctype="multipart/form-data" onsubmit="return confirm('You are going to update the current requirements for the volunteer applications.\nAre you sure?');">
                                        <a href="javascript:void(0)" class="btn btn-primary float-end p-3" onclick="document.querySelector('#file').click();">Update</a>
                                        <input type="file" name="req" id="file" onchange="document.querySelector('#toSubmit').click();" accept=".pdf" hidden>
                                        <input type="submit" id="toSubmit" hidden>
                                    </form>
                                </div>
                                <div class="card-body">
                                    <h4 style="font-weight: bold;">Current requirements</h4>
                                    <iframe style="width: 100%; height: 600px" src="docs/requirements.pdf"></iframe>
                                </div>
                            </div>
                            <!-- /# card -->
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
        <script>
            document.querySelector('#more').classList.add('mm-active');
            document.querySelector('#more').parentElement.classList.add('mm-active');
        </script>
    </body>

    </html>
<?php
} else {
    header("location: login.php");
}

?>