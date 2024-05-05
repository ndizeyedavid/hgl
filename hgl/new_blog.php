<?php
include "php/connect.php";
session_start();
if ($_SESSION['id']) {
    $user_id = $_SESSION['id'];
?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <?php include "include/style.php"; ?>
        <link href="vendor/summernote/summernote.css" rel="stylesheet">

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
                    <?php if (isset($_GET['succ'])) { ?>
                        <div class="alert alert-success">
                            <div class="alert-body" style="font-size: 20px; text-align: center;">Blog Posted successfully</div>
                        </div>
                    <?php } else if (isset($_GET['err'])) { ?>
                        <div class="alert alert-danger">
                            <div class="alert-body" style="font-size: 20px; text-align: center;">An error occured!<br><span style="font-size: 12px;">Please try again</span></div>
                        </div>
                    <?php } ?>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">New Blog</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form action="php/new_blog.php" method="POST" enctype="multipart/form-data">
                                    <div class="mb-3 row text-center">
                                        <label class="">Blog Image</label>
                                        <center>
                                            <img src="images/event.png" id="profilePreview" alt="profile-img" style="width: 100%;height: 480px;" class="rounded">
                                        </center>
                                        <center>
                                            <button type="button" style="width: 400px;" class="mt-3 p-0 btn btn-info" onclick="document.querySelector('#fileUp').click();">Upload</button>
                                            <input type="file" name="thumb" id='fileUp' accept="image/*" required hidden>
                                        </center>
                                    </div>
                                    <hr>

                                    <div class="mb-4 mt-3">
                                        <label class="form-label">Blog Title</label>
                                        <input type="text" name="title" class="form-control" placeholder="What is the heading of your blog..." required>
                                    </div>

                                    <div class="mb-3 mt-5">
                                        <label class="form-label">What's on your mind</label>
                                        <textarea name="blog_content" required hidden></textarea>
                                        <div class="summernote"></div>
                                    </div>

                                    <div class="mb-4 mt-3">
                                        <label class="form-label">Tags</label>
                                        <input type="text" name="tags" class="form-control" placeholder="ex: #hope #donations" required>
                                    </div>

                                    <div class="mb-3 row">
                                        <center>
                                            <button type="button" onclick="readyTosubmit()" style="width: 60%;" class="btn btn-primary">Post Blog</button>
                                            <button type="submit" class="submit" name="add" name="add" hidden>Post</button>
                                        </center>
                                    </div>
                                </form>
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
        <script>
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
                let text_area = document.querySelector('.note-editable');
                document.querySelector('textarea').innerHTML = text_area.innerHTML;
                // document.forms[0].submit();
                document.querySelector('.submit').click();
            }
        </script>
        <?php include "include/scripts.php" ?>
        <script src="vendor/summernote/js/summernote.min.js"></script>

        <!-- Summernote init -->

        <script src="js/plugins-init/summernote-init.js"></script>


    </body>

    </html>
<?php
} else {
    header("location: login.php");
}

?>