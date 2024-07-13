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
                            <li class="breadcrumb-item"><a href="javascript:void(0)">Success stories</a></li>
                        </ol>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="card-header m-0 p-0 pb-3">
                                        <h4 class="card-title"></h4>

                                        <a href="new_story.php" class="btn btn-primary">+ New Story</a>
                                    </div>
                                    <div class="profile-news mt-2">
                                        <h5 class="text-primary d-inline">Our latest achievements</h5>
                                        <?php
                                        $fetch = mysqli_query($con, "SELECT * FROM story");
                                        while ($row = mysqli_fetch_assoc($fetch)) {
                                        ?>
                                            <div class="media pt-3 pb-3">
                                                <img src="images/storys/<?php echo $row['story_image'] ?>" alt="image" class="me-3 rounded" width="145" style="height: 120px;">
                                                <div class="media-body">
                                                    <h5 class="m-b-5"><a href="javascript:void(0)" class="text-black"><?php echo $row['story_title'];  ?></a></h5>
                                                    <p class="mb-0" style="width: 100%;"><?php echo substr($row['story_content'], 0, 250); ?>...</p>
                                                </div>
                                            </div>
                                            <div class="controls float-end" style="float: right;">
                                                <a href="story_upd.php?id=<?php echo $row['id']; ?>" class="btn btn-success btn-sm"><i class="bi bi-pencil-square" style="font-size: 22px;"></i></a>
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <a href="php/story_del.php?id=<?php echo $row['id']; ?>" class="btn btn-danger btn-sm"><i class="bi bi-trash" style="font-size: 22px;"></i></a>
                                            </div>
                                            <hr>
                                        <?php } ?>

                                    </div>
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