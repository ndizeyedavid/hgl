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
    <?php include "include/head.php"; ?>

    <!--  ************************* Page Title Starts Here ************************** -->
    <div class="page-nav no-margin row">
        <div class="container">
            <div class="row">
                <h2>Contact US</h2>
                <ul>
                    <li> <a href="#"><i class="fas fa-home"></i> Home</a></li>
                    <li><i class="fas fa-angle-double-right"></i> Contact US</li>
                </ul>
            </div>
        </div>
    </div>


    <!--  ************************* Contact Us Starts Here ************************** -->


    <div style="margin-top:0px;" class="row no-margin">

    </div>

    <div class="row contact-rooo no-margin">
        <div class="container">
            <div class="row">


                <div style="padding:20px" class="col-sm-7">
                    <form method="POST" action="php/message.php">
                        <h2>Contact Form</h2> <br>
                        <div class="row cont-row">
                            <div class="col-sm-3"><label>Enter Name </label><span>:</span></div>
                            <div class="col-sm-8"><input type="text" placeholder="Enter Name" name="name" class="form-control input-sm"></div>
                        </div>
                        <div class="row cont-row">
                            <div class="col-sm-3"><label>Email Address </label><span>:</span></div>
                            <div class="col-sm-8"><input type="text" name="email" placeholder="Enter Email Address" class="form-control input-sm"></div>
                        </div>
                        <div class="row cont-row">
                            <div class="col-sm-3"><label>Mobile Number</label><span>:</span></div>
                            <div class="col-sm-8"><input type="text" name="number" placeholder="Enter Mobile Number" class="form-control input-sm"></div>
                        </div>
                        <div class="row cont-row">
                            <div class="col-sm-3"><label>Message Title</label><span>:</span></div>
                            <div class="col-sm-8"><input type="text" name="title" placeholder="Title for your message" class="form-control input-sm"></div>
                        </div>
                        <div class="row cont-row">
                            <div class="col-sm-3"><label>Enter Message</label><span>:</span></div>
                            <div class="col-sm-8">
                                <textarea rows="5" placeholder="Enter Your Message" name="message" class="form-control input-sm"></textarea>
                            </div>
                        </div>
                        <div style="margin-top:10px;" class="row">
                            <div style="padding-top:10px;" class="col-sm-3"><label></label></div>
                            <div class="col-sm-8">
                                <button type="submit" name="send" class="btn btn-success btn-sm">Send Message</button>
                            </div>
                        </div>
                </div>
                <div class="col-sm-5">

                    <div style="margin:50px" class="serv">
                        <h2 style="margin-top:10px;">Address</h2>

                        <br><br>
                        <?php echo $about['address']; ?><br><br>
                        Phone: <?php echo $about['phone']; ?><br><br>
                        Email: <?php echo $about['email']; ?><br>

                    </div>


                    </form>
                </div>
            </div>
        </div>

    </div>





    <!-- ******************** Footer Starts Here ******************* -->
    <?php include "include/footer.php"; ?>
</body>

<script src="assets/js/jquery-3.2.1.min.js"></script>
<script src="assets/js/popper.min.js"></script>
<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/plugins/scroll-fixed/jquery-scrolltofixed-min.js"></script>
<script src="assets/plugins/slider/js/owl.carousel.min.js"></script>
<script src="assets/js/script.js"></script>

</html>