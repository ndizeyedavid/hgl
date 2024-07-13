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
                            <h3>Our Projects. Support Us</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row text-center">
                        <?php
                        $fetch = mysqli_query($con, "SELECT * FROM events ORDER BY created_date LIMIT 3");
                        while ($row = mysqli_fetch_assoc($fetch)) {
                        ?>
                            <div class="col-md-4 col-sm-4" style="height: 650px;">
                                <div class="services animate-box" style="height: 100%;">
                                    <span><a href="program.php?id=<?php echo $row['id']; ?>"><img src="admin/images/events/<?php echo $row['event_thumbnail']; ?>" style="width: 100%; height: 200px; object-fit: cover; cursor: pointer; border-radius: 10px;"></a></span>
                                    <h3><a href="program.php?id=<?php echo $row['id']; ?>"><?php echo $row['event_name']; ?></a></h3>
                                    <p><?php echo $row['event_desc']; ?></p>
                                    <hr>
                                    <div class="more-info" style="text-align: left;">
                                        <p>Progress: </p>
                                        <progress id="progress" style="width: 100%;" value="<?php echo $row['progress']; ?>" max="100"> <?php echo $row['progress']; ?>% </progress><?php echo $row['progress']; ?>%
                                        <div class="dates">
                                            <p class="start">Start: <?php echo $row['start_date']; ?></p>
                                            <p class="end">End: <?php echo $row['deadline']; ?></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <?php } ?>
                    </div>
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