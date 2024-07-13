<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js"> <!--<![endif]-->

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Blog &mdash; Hope for a good life</title>
    <?php include "php/style.php"; ?>
</head>

<body>
    <div id="fh5co-wrapper">
        <div id="fh5co-page">

            <?php include "php/head.php"; ?>

            <div id="fh5co-blog-section" class="fh5co-section-gray">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                            <h3>Success Stories</h3>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row row-bottom-padded-md">

                        <?php
                        $fetch = mysqli_query($con, "SELECT * FROM story ORDER BY posted_date DESC");
                        if (mysqli_num_rows($fetch) > 0) {
                            while ($row = mysqli_fetch_assoc($fetch)) {

                        ?>
                                <div class="clearfix visible-md-block"></div>
                                <div class="col-lg-4 col-md-4 col-sm-6">
                                    <div class="fh5co-blog animate-box">
                                        <a href="javascript:void(0)"><img class="img-responsive" src="admin/images/storys/<?php echo $row['story_image']; ?>" style="border-radius: 10px;" alt="Success-image"></a>
                                        <div class="blog-text">
                                            <div class="prod-title">
                                                <h3><a href="javascript:void(0)"><?php echo $row['story_title']; ?></a></h3>
                                                <span class="posted_by">
                                                    <?php
                                                    $date = $row['posted_date'];
                                                    $date = explode(" ", $date);
                                                    $date = $date[0];
                                                    echo $date;
                                                    ?>
                                                </span>
                                                <!-- <span class="comment"><a href="javascript:void(0)"><i class="icon-bubble2"></i></a></span> -->
                                                <p style="width: 90px;"><?php echo $row['story_content'] ?></p>
                                                <!-- <p><a href="">Learn More...</a></p> -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        <?php }
                        } else {
                            echo "<h3>No success stories available. Come back later!</h3>";
                        } ?>


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
    <?php include "include/whatsapp.php" ?>

</body>

</html>