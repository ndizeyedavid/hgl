<?php
include "include/connect.php";
$id = $_GET['id'];

?>
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
</head>

<body>
    <div id="fh5co-wrapper">
        <div id="fh5co-page">
            <?php
            include "php/head.php";

            $fetch = mysqli_query($con, "SELECT * FROM events WHERE id = '$id'");
            $data = mysqli_fetch_assoc($fetch);
            ?>

            <div class="" style="height: 800px;">
                <div class="fh5co-overlay"></div>
                <div class="fh5co-cover" style="height: 100%;background-image: linear-gradient(180deg, rgb(0, 0, 0, 0.3), rgb(0, 0, 0, 0.5)), url(admin/images/events/<?php echo $data['event_thumbnail']; ?>);">

                    <div class="desc animate-box" style="padding: 0px 40px; margin: 0;position: relative; top: 240px;">
                        <h2 style="font-size: 50px; font-weight: 700;"><?php echo $data['event_name']; ?></h2>
                        <br><br>
                        <span style="font-size: 18px;"><?php echo $data['event_desc']; ?></span>
                        <div class="progress-cont">
                            progress
                            <progress id="progress" style="width: 100%;" value="<?php echo $data['progress']; ?>" max="100"> <?php echo $data['progress']; ?>% </progress><?php echo $data['progress']; ?>%
                        </div>
                        <div class="dates" style="margin-top: 20px; display: flex;justify-content: space-between;">
                            <p class="start" style="color: #fff;">Start: <?php echo $data['start_date']; ?></p>
                            <p class="end" style="color: #fff;">End: <?php echo $data['deadline']; ?></p>
                        </div>
                        <!-- <span><a class="btn btn-primary btn-lg" id="donate" href="javascript:void(0)" onclick="display_modal('donate');">Donate Now</a></span> -->
                    </div>
                </div>

            </div>

            <!-- fh5co-blog-section -->
            <?php include "php/footer.php"; ?>
        </div>
        <!-- END fh5co-page -->

    </div>
    <!-- END fh5co-wrapper -->
    <?php include "php/scripts.php"; ?>

</body>

</html>