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
                            <li class="breadcrumb-item"><a href="javascript:void(0)">Announcements</a></li>
                        </ol>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Reports</h4>
                                    <a href="new_announcement.php" class="btn btn-primary btn-sm"> + New Announcement</a>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-responsive-md">
                                            <thead>
                                                <tr>
                                                    <th style="width:80px;"><strong>#</strong></th>
                                                    <th><strong>Title</strong></th>
                                                    <th><strong>Description</strong></th>
                                                    <th><strong>Date</strong></th>
                                                    <th><strong>Preview</strong></th>
                                                    <th><strong>Action</strong></th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <?php
                                                $fetch = mysqli_query($con, "SELECT * FROM announcement");
                                                $count = 0;
                                                while ($row = mysqli_fetch_array($fetch)) {
                                                ?>
                                                    <tr>
                                                        <td><?php echo ++$count; ?></td>
                                                        <td><?php echo $row['title']; ?></td>
                                                        <td><?php echo $row['description'] ?></td>
                                                        <td><?php echo $row['posted_date']; ?></td>
                                                        <td><a href="docs/<?php echo $row['file'];  ?>" target="_blank" class="text-success"><u>View</u></a></td>
                                                        <td><a href="php/announcement_del.php?id=<?php echo $row['id'];  ?>" class="btn btn-danger btn-sm"><i class="bi bi-trash h3 text-light"></i></a></td>
                                                    </tr>
                                                <?php } ?>
                                            </tbody>
                                        </table>
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