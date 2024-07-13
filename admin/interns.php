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
                                <h4 class="card-title">Interns</h4>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-responsive-md">
                                        <thead>
                                            <tr>
                                                <th style="width:80px;"><strong>#</strong></th>
                                                <th><strong>Image</strong></th>
                                                <th><strong>Name</strong></th>
                                                <th><strong>E-mail</strong></th>
                                                <th><strong>Phone</strong></th>
                                                <th><strong>Apply DATE</strong></th>
                                                <th><strong>Status</strong></th>
                                                <th><strong>Action</strong></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php
                                            $fetch = mysqli_query($con, "SELECT * FROM users WHERE role='intern' AND status='approved'");

                                            if (mysqli_num_rows($fetch)) {
                                                $i = 0;
                                                while ($row = mysqli_fetch_assoc($fetch)) {
                                            ?>
                                                    <tr>
                                                        <td><strong><?php echo ++$i; ?></strong></td>
                                                        <td><a href="images/team/<?php echo $row['profileImg']; ?>" target="_blank"><img src="images/team/<?php echo $row['profileImg']; ?>" class="rounded" width="60" height="60"></a></td>
                                                        <td><?php echo $row['user_name']; ?></td>
                                                        <td><?php echo $row['email']; ?></td>
                                                        <td><?php echo $row['phone']; ?></td>
                                                        <td><?php echo $row['added_date']; ?></td>
                                                        <td>
                                                            <?php
                                                            if ($row['status'] == "") {
                                                                echo "<span class='badge bgl-warning text-warning font-w700'>Pending..</span>";
                                                            } else {
                                                                echo "<span class='badge bgl-success text-success font-w700'>Approved</span>";
                                                            }
                                                            ?>
                                                        </td>
                                                        <td align="center">
                                                            <a href="?id=<?php echo $row['id']; ?>&action=upgrade" class="btn text-success p-0" title="Add to volunteers"><i class="bi bi-person-plus" style="font-size: 30px;"></i></a>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                                            <a href="?id=<?php echo $row['id']; ?>&action=delete" class="btn text-danger p-0" onclick="return confirm('Do you want to delete this user?');" title="Delete"><i class="bi bi-trash" style="font-size: 30px;"></i></a>
                                                        </td>
                                                    </tr>
                                            <?php }
                                            } else {
                                                echo "
                                                <tr><td colspan='8' align='center'>No interns yet...</td></tr>
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

if (isset($_GET["action"])) {
    $id = $_GET["id"];
    $action = $_GET["action"];

    if ($action == "upgrade") {
        $action = "UPDATE users SET role='volunteer' WHERE id='$id'";
    } else if ($action == "delete") {
        $action = "DELETE FROM users WHERE id='$id'";
    }

    $apply = mysqli_query($con, $action);

    if ($apply) {
        // header("location: interns.php?succ");
    } else {
        header("location: interns.php?err");
    }
}
?>