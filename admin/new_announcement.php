<?php
include "php/connect.php";
session_start();
if ($_SESSION['id']) {
?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <?php include "include/style.php"; ?>
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
                    <div class="row page-titles">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item active"><a href="more.php">More</a></li>
                            <li class="breadcrumb-item"><a href="anouncements.php">Announcements</a></li>
                            <li class="breadcrumb-item"><a href="javascript:void(0)">New Announcement</a></li>
                        </ol>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">New Announcement</h4>
                                </div>
                                <div class="card-body">
                                    <div class="basic-form">
                                        <form action="php/new_announcement.php" method="POST" enctype="multipart/form-data">

                                            <div class="mb-4 mt-3">
                                                <label class="form-label">Announcement Title</label>
                                                <input type="text" name="title" class="form-control" placeholder="What is the heading of your announcement..." required>
                                            </div>

                                            <div class="mb-3 mt-5">
                                                <label class="form-label">Announcement description</label>
                                                <textarea class="form-control" style="height: 210px;" name="desc" id="txt" placeholder="The description of your announcement" required></textarea>
                                                <!-- <div class="form-control" style="height: 400px;" onkeyup="document.querySelector('#txt').innerHTML=this.innerHTML;" contenteditable="true"></div> -->
                                            </div>
                                            <div class="mb-4 mt-3">
                                                <label class="form-label">Upload announcement(.PDF)</label>
                                                <input type="file" name="rep" class="form-control" accept=".pdf" required>
                                            </div>
                                            <div class="mb-3 row">
                                                <center>
                                                    <button type="button" onclick="readyTosubmit()" style="width: 60%;" class="btn btn-primary">Submit</button>
                                                    <button type="submit" class="submit" name="add" hidden="">Post</button>
                                                </center>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <!-- /# card -->
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
        <script>
            document.querySelector('#more').classList.add('mm-active');
            document.querySelector('#more').parentElement.classList.add('mm-active');
            document.getElementById("fileUp").addEventListener("change", function(event) {
                var file = event.target.files[0];
                var reader = new FileReader();

                reader.onload = function(event) {
                    var src = event.target.result;
                    document.getElementById('profilePreview').src = src;
                }

                reader.readAsDataURL(file);
            });

            function readyTosubmit() {
                // document.forms[0].submit();
                document.querySelector('.submit').click();
            }
        </script>
    </body>

    </html>
<?php
} else {
    header("location: login.php");
}

?>