<?php
include "php/connect.php";
session_start();
if ($_SESSION['id']) {
?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <?php include "include/style.php"; ?>
        <link href="vendor/datatables/css/jquery.dataTables.min.css" rel="stylesheet">
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
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Blogs | Table view</h4>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-responsive-md">
                                        <thead>
                                            <tr>
                                                <th style="width:80px;"><strong>#</strong></th>
                                                <th><strong>Title</strong></th>
                                                <th><strong>Thumbnail</strong></th>
                                                <th><strong>Tags</strong></th>
                                                <th><strong>Views</strong></th>
                                                <th><strong>Delete</strong></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php
                                            $fetch = mysqli_query($con, "SELECT * FROM blog ORDER BY posted_date desc");

                                            if (mysqli_num_rows($fetch)) {
                                                $i = 0;
                                                while ($row = mysqli_fetch_assoc($fetch)) {
                                            ?>
                                                    <tr>
                                                        <td><strong><?php echo ++$i; ?></strong></td>
                                                        <td><?php echo $row['blog_title']; ?></td>
                                                        <td><img src='images/blogs/<?php echo $row['blog_image']; ?>' alt="blog-image" style="width: 60px; height: 60px;" class="rounded-circle"></td>
                                                        <td><?php echo $row['tags']; ?></td>
                                                        <td><?php echo $row['views']; ?></td>
                                                        <td><a href='php/blog_del.php?id=<?php echo $row['blog_id']; ?>' class="btn"><i class="bi bi-trash text-danger h3"></i></a></td>

                                                    </tr>
                                            <?php }
                                            } else {
                                                echo "
                                                <tr><td colspan='7' align='center'>No blogs created...</td></tr>
                                                ";
                                            } ?>
                                        </tbody>
                                    </table>
                                </div>
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
        <script src="vendor/datatables/js/jquery.dataTables.min.js"></script>
    </body>

    </html>
<?php
} else {
    header("location: login.php");
}

?>