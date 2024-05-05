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
    <?php include 'include/style.php'; ?>
</head>

<body>
    <!-- ******************** Header Starts Here ******************* -->
    <?php include "include/head.php"; ?>


    <!--  ************************* Page Title Starts Here ************************** -->
    <div class="page-nav no-margin row">
        <div class="container">
            <div class="row">
                <h2>About Our Charity</h2>
                <ul>
                    <li> <a href="#"><i class="fas fa-home"></i> Home</a></li>
                    <li><i class="fas fa-angle-double-right"></i> About Us</li>
                </ul>
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






    <!-- ******************** Footer Starts Here ******************* -->
    <?php include "include/footer.php"; ?>

</body>

<?php include 'include/script.php'; ?>

</html>