<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js"> <!--<![endif]-->

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Hope for a good life</title>
    <?php
    include "php/style.php";
    ?>
    <style>
        .dates {
            display: flex;
            justify-content: space-between;
            margin-top: 30px;
            height: 100%;
            align-items: flex-end;
        }
    </style>
</head>

<body>
    <div id="fh5co-wrapper">
        <div id="fh5co-page">
            <?php
            include "php/head.php";
            ?>


            <div id="fh5co-services-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                            <h3>Latest Announcements</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <td>#</td>
                                <td>Title</td>
                                <td style="width: 700px;">Description</td>
                                <td>Date</td>
                                <td>Download</td>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                            $fetch = mysqli_query($con, "SELECT * FROM announcement ORDER BY posted_date DESC");
                            if (mysqli_num_rows($fetch) > 0) {
                                $count = 0;
                                while ($row = mysqli_fetch_assoc($fetch)) {
                            ?>
                                    <tr>
                                        <td><?php echo ++$count; ?></td>
                                        <td><?php echo $row['title']; ?></td>
                                        <td><?php echo $row['description']; ?></td>
                                        <td>
                                            <?php
                                            $date = $row['posted_date'];
                                            $date = explode(" ", $date);
                                            $date = $date[0];
                                            echo $date;
                                            ?>
                                        </td>
                                        <td><a href="admin/docs/<?php echo $row['file'] ?>" target="_blank" class="btn btn-primary">Download</a></td>
                                    </tr>
                            <?php
                                }
                            } else {
                                echo "<tr><td colspan='5' align='center'>No announcements. At the moment!</td></tr>";
                            }
                            ?>
                        </tbody>
                    </table>
                </div>
            </div>

            <?php include "php/footer.php"; ?>
        </div>
        <!-- END fh5co-page -->

    </div>
    <!-- END fh5co-wrapper -->
    <?php include "php/scripts.php"; ?>
    <?php include "include/whatsapp.php" ?>

</body>

</html>