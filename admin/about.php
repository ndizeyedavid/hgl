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
                            <li class="breadcrumb-item"><a href="javascript:void(0)">About us</a></li>
                        </ol>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card">
                                <?php
                                $fetch = mysqli_query($con, "SELECT * FROM about");
                                $data = mysqli_fetch_assoc($fetch);
                                ?>
                                <form action="php/about.php" method="POST">
                                    <div class="card-body">

                                        <div class="mb-3 col-xl-12">
                                            <label class="form-label" style="font-size: 20px;">Our Mission:</label>
                                            <textarea name="mission" class="form-control" style="height: 200px;" required><?php echo $data['mission']; ?></textarea>
                                        </div>

                                        <div class="mb-3 col-xl-12">
                                            <label class="form-label" style="font-size: 20px;">Our Vision:</label>
                                            <textarea name="vision" class="form-control" style="height: 200px;" required><?php echo $data['vision']; ?></textarea>
                                        </div>

                                        <div class="mb-3 col-xl-12">
                                            <label class="form-label" style="font-size: 20px;">Our Goal:</label>
                                            <textarea name="goal" class="form-control" style="height: 200px;" required><?php echo $data['goal']; ?></textarea>
                                        </div>

                                    </div>
                                    <div class="card-footer">
                                        <button class="btn btn-primary" type="submit" name="submit">Update</button>
                                    </div>
                                </form>

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