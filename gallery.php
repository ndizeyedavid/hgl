<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js"> <!--<![endif]-->

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Gallery &mdash; Hope for a good life</title>
    <?php include "php/style.php"; ?>
</head>


<body>
    <div id="fh5co-wrapper">
        <div id="fh5co-page">
            <?php include "php/head.php"; ?>

            <div class="fh5co-hero">
                <div class="fh5co-overlay"></div>
                <div class="fh5co-cover text-center" data-stellar-background-ratio="0.5" style="background-image: linear-gradient(180deg, rgb(0, 0, 0, 0.5), rgb(255, 87, 34, 0.4)), url(admin/images/content/slide2.jpg);">

                    <div class="desc animate-box">
                        <h2><strong>Gallery</strong></h2>
                    </div>
                </div>

            </div>

            <div id="fh5co-portfolio">
                <div class="container">

                    <div class="row">
                        <div class="col-md-6 col-md-offset-3 text-center heading-section animate-box">
                            <h3>Our Insights</h3>
                            <p>Take a look at more of what we have and still do</p>
                        </div>
                    </div>


                    <div class="row row-bottom-padded-md">
                        <div class="col-md-12">
                            <ul id="fh5co-portfolio-list">
                                <?php
                                // Gallery formating
                                $fetch = mysqli_query($con, "SELECT * FROM gallery ORDER BY added_date DESC");

                                while ($row = mysqli_fetch_assoc($fetch)) {
                                    $date_posted = $row['added_date'];
                                    $date_posted = explode(" ", $date_posted);
                                    $date_posted = $date_posted[0];
                                ?>
                                    <li class="one-third animate-box" data-animate-effect="fadeIn" style="background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0.07)), url(admin/images/gallery/<?php echo $row['image']; ?>); ">
                                        <a href="#" class="color-3">
                                            <div class="case-studies-summary">
                                                <span><?php echo $date_posted ?></span>
                                                <h2><?php echo $row['image_description']; ?></h2>
                                            </div>
                                        </a>
                                    </li>
                                <?php } ?>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <?php include "php/footer.php"; ?>


        </div>
        <!-- END fh5co-page -->

    </div>
    <!-- END fh5co-wrapper -->

    <?php include "php/scripts.php"; ?>
</body>

</html>