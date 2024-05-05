<?php
include "include/connect.php";
$fetch_about = mysqli_query($con, "SELECT * FROM content");
$about = mysqli_fetch_assoc($fetch_about);

?>
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <?php include "include/style.php"; ?>
</head>

<body>
    <!-- ******************** Header Starts Here ******************* -->
    <?php include 'include/head.php'; ?>
    <!-- ******************** Slider Starts Here ******************* -->



    <div class="slider">
        <!-- Set up your HTML -->
        <div class="owl-carousel ">

            <!-- slide 1 -->
            <div class="item">
                <div class="slider-img"><img src="hgl/images/content/<?php echo $about['slide1_img']; ?>" alt="slide 1" style="width: 100%; height: 900px;"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                            <div class="slider-captions ">
                                <h1 class="slider-title"><?php echo $about['slide1_title']; ?></h1>
                                <p class="slider-text hidden-xs"><?php echo $about['slide1_subtitle']; ?></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- slide 2 -->
            <div class="item">
                <div class="slider-img"><img src="hgl/images/content/<?php echo $about['slide2_img']; ?>" alt="slide 1" style="width: 100%; height: 900px;"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                            <div class="slider-captions ">
                                <h1 class="slider-title"><?php echo $about['slide2_title']; ?></h1>
                                <p class="slider-text hidden-xs"><?php echo $about['slide2_subtitle']; ?></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- slide 3 -->
            <div class="item">
                <div class="slider-img"><img src="hgl/images/content/<?php echo $about['slide3_img']; ?>" alt="slide 1" style="width: 100%; height: 900px;"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                            <div class="slider-captions ">
                                <h1 class="slider-title"><?php echo $about['slide3_title']; ?></h1>
                                <p class="slider-text hidden-xs"><?php echo $about['slide3_subtitle']; ?></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <!-- ******************** About US Starts Here ******************* -->

    <div class="about-us">
        <div class="container">
            <div class="session-title">
                <p>Help us to Achieve our Goal</p>
                <h2>About Our Charity</h2>
            </div>
            <div class="about-row row">
                <div class="col-md-8">
                    <div class="abut-detail">
                        <h4><?php echo $about['about_title']; ?></h4>
                        <p><?php echo $about['about']; ?></p>
                    </div>


                    <div class="row diag-ro">
                        <div class="about-diag">
                            <div class="icon"><i class="fas fa-arrow-right"></i></div>
                            <div class="tex">
                                <h5>$
                                    <?php
                                    $amount_fetch = mysqli_query($con, "SELECT SUM(amount) FROM donators");
                                    $amount = mysqli_fetch_assoc($amount_fetch);

                                    if (empty($amount['SUM(amount)'])) {
                                        echo "0";
                                    } else {
                                        echo $amount['SUM(amount)'];
                                    }
                                    ?>
                                </h5>
                                <p>Raised by your help</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <img src="hgl/images/content/<?php echo $about['about_image'] ?>" alt="about_image">
                </div>
            </div>
        </div>
    </div>

    <!-- ******************** Services Starts Here ******************* -->

    <section class="services container-fluid">
        <div class="container">
            <div class="session-title">
                <p>Help us to Achieve our Goal</p>
                <h2>URGENT CAUSES</h2>
            </div>
            <div class="service-row row">
                <div class="col-md-4">

                </div>
                <div class="col-md-4">
                    <div class="servic-col">
                        <div class="servic-round">
                            <p>Donate</p>
                        </div>
                        <h4>BECOME A Donator</h4>
                        <!-- <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking </p> -->
                    </div>
                </div>

            </div>
        </div>
        </div>
    </section>



    <!-- ******************** Services Starts Here ******************* -->


    <section class="container-fluid causes">
        <div class="container">
            <div class="session-title row">
                <p>Learn more about our</p>
                <h2>RECENT CAUSES</h2>
            </div>
            <div class="cuses-row row">

                <?php
                $fetch_events = mysqli_query($con, "SELECT * FROM events WHERE status='ON GOING' ORDER BY start_date DESC LIMIT 3");

                if (mysqli_num_rows($fetch_events) > 0) {
                    while ($event = mysqli_fetch_assoc($fetch_events)) {
                ?>
                        <div class="col-md-4">
                            <div class="causen-ccover" style="height: 100%;">

                                <div class="caus-img">
                                    <img src="hgl/images/events/<?php echo $event['event_thumbnail']; ?>" alt="Event-thumb" height="120">
                                </div>
                                <div class="caus-info row no-margin">
                                    <span class="left-info col-6">
                                        Progress: <?php echo $event['progress']; ?>%
                                    </span>
                                    <span class="rit-info text-right col-6">
                                        Budget: <?php echo $event['budget']; ?>$
                                    </span>
                                </div>
                                <div class="caus-detail">
                                    <h4><?php echo $event['event_name'] ?></h4>
                                    <p><?php echo $event['event_desc'] ?></p>
                                </div>

                                <div class="donat-btn">
                                    <button class="btn btn-danger"><i class="fas fa-hand-holding-usd"></i> Donate</button>
                                </div>

                            </div>

                        </div>
                <?php }
                } else {
                    echo "<h3>No Events in this semester</h3>";
                } ?>

            </div>
        </div>
    </section>

    <!--  ************************* Blog Starts Here ************************** -->
    <div class="blog">

        <div class="container">
            <div class="row session-title">
                <h2>Our Blog</h2>
                <p>Hear and know more about what we be doing.</p>
            </div>
            <div class="row blog-row">
                <?php
                $blog_fetch = mysqli_query($con, "SELECT * FROM blog ORDER BY posted_date DESC limit 2");

                if (mysqli_num_rows($blog_fetch)) {
                    while ($blog = mysqli_fetch_array($blog_fetch)) {
                ?>
                        <div class="col-md-6 col-sm-12">
                            <div class="blog-singe no-margin row">
                                <div class="col-sm-5 blog-img-tab">
                                    <img src="hgl/images/blogs/<?php echo $blog['blog_image'] ?>" alt="Blog_thumbnail" height="200">
                                </div>
                                <div class="col-sm-7 blog-content-tab">
                                    <h2><?php echo $blog['blog_title']; ?></h2>
                                    <p><i class="fas fa-user"><small><?php echo $blog['poster'] ?></small></i> <i class="fas fa-eye"><small>(<?php echo $blog['views']; ?>)</small></i> <i class="fas fa-comments"><small>(
                                                <?php
                                                $blog_id = $blog['blog_id'];
                                                $comments_fetch = mysqli_query($con, "SELECT * FROM blog_comments WHERE blog_id='{$blog_id}'");
                                                echo mysqli_num_rows($comments_fetch);
                                                ?>
                                                )</small></i></p>
                                    <p class="blog-desic"><?php echo substr($blog['blog_content'], 0, 100) ?>....</p>
                                    <a href="read_blog.php?id=<?php echo $blog_id; ?>">Read More <i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                <?php }
                } else {
                    echo "<h3>No Blogs available</h3>";
                } ?>
            </div>
        </div>
    </div>

    <!-- ******************** Footer Starts Here ******************* -->
    <?php include 'include/footer.php'; ?>
</body>
<?php include "include/script.php" ?>

</html>