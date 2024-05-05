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
                                <h4 class="card-title">Donators</h4>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-responsive-md">
                                        <thead>
                                            <tr>
                                                <th style="width:80px;"><strong>#</strong></th>
                                                <th><strong>Name</strong></th>
                                                <th><strong>E-mail</strong></th>
                                                <th><strong>location</strong></th>
                                                <th><strong>DATE</strong></th>
                                                <th><strong>Amount</strong></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php
                                            $fetch = mysqli_query($con, "SELECT * FROM donators ORDER BY amount desc");

                                            if (mysqli_num_rows($fetch)) {
                                                $i = 0;
                                                while ($row = mysqli_fetch_assoc($fetch)) {
                                            ?>
                                                    <tr>
                                                        <td><strong><?php echo ++$i; ?></strong></td>
                                                        <td><?php echo $row['donator_name']; ?></td>
                                                        <td><?php echo $row['donator_email']; ?></td>
                                                        <td><?php echo $row['donator_location']; ?></td>
                                                        <td><?php echo $row['donated_date']; ?></td>
                                                        <td><?php echo $row['amount']; ?></td>
                                                        <td>
                                                            <div class="dropdown">
                                                                <button type="button" class="btn light sharp" data-bs-toggle="dropdown">
                                                                    <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
                                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                            <rect x="0" y="0" width="24" height="24"></rect>
                                                                            <circle fill="#000000" cx="5" cy="12" r="2"></circle>
                                                                            <circle fill="#000000" cx="12" cy="12" r="2"></circle>
                                                                            <circle fill="#000000" cx="19" cy="12" r="2"></circle>
                                                                        </g>
                                                                    </svg>
                                                                </button>
                                                                <div class="dropdown-menu">
                                                                    <a class="dropdown-item" href="#">Spotlight</a>
                                                                    <a class="dropdown-item" href="#">Delete</a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                            <?php }
                                            } else {
                                                echo "
                                                <tr><td colspan='7' align='center'>No donations yet...</td></tr>
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