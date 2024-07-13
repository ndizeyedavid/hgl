<?php
include "php/connect.php";
session_start();
if ($_SESSION['id']) {
    $id = $_GET['id'];
    $upd = mysqli_query($con, "SELECT * FROM story WHERE id = '{$id}'");
    $data = mysqli_fetch_assoc($upd);
    $img = $data['story_image'];
    $title = $data['story_title'];
    $cont = $data['story_content'];
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
                            <li class="breadcrumb-item"><a href="success.php">Success stories</a></li>
                            <li class="breadcrumb-item"><a href="javascript:void(0)">Update story</a></li>
                        </ol>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Update story</h4>
                                </div>
                                <div class="card-body">
                                    <div class="basic-form">
                                        <form action="php/story_upd.php" method="POST" enctype="multipart/form-data">
                                            <input type="text" name="id" value="<?php echo $id; ?>" hidden>
                                            <div class="mb-3 row text-center">
                                                <label class="">Story Image</label>
                                                <center>
                                                    <img src="images/storys/<?php echo $img; ?>" id="profilePreview" alt="profile-img" style="width: 100%;height: 480px;" class="rounded">
                                                </center>
                                                <center>
                                                    <button type="button" style="width: 400px;" class="mt-3 p-0 btn btn-info" onclick="document.querySelector('#fileUp').click();">Upload</button>
                                                    <input type="file" name="thumb" id="fileUp" accept="image/*" required="" hidden="">
                                                </center>
                                            </div>
                                            <hr>

                                            <div class="mb-4 mt-3">
                                                <label class="form-label">Story Title</label>
                                                <input type="text" name="title" value="<?php echo $title; ?>" class="form-control" placeholder="What is the heading of your story..." required="">
                                            </div>

                                            <div class="mb-3 mt-5">
                                                <label class="form-label">What's on your mind</label>
                                                <textarea name="story_content" id="txt" hidden required><?php echo $cont; ?></textarea>
                                                <div class="form-control" style="height: 400px;" onkeyup="document.querySelector('#txt').innerHTML=this.innerHTML;" contenteditable="true"><?php echo $cont; ?></div>
                                            </div>

                                            <div class="mb-3 row">
                                                <center>
                                                    <button type="button" onclick="readyTosubmit()" style="width: 60%;" class="btn btn-primary">Update story</button>
                                                    <button type="submit" class="submit" name="add" hidden="">Update</button>
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