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
                    <?php if (isset($_GET['succ'])) { ?>
                        <div class="alert alert-success">
                            <div class="alert-body" style="font-size: 20px; text-align: center;">Content updated successfully</div>
                        </div>
                    <?php } else if (isset($_GET['err'])) { ?>
                        <div class="alert alert-danger">
                            <div class="alert-body" style="font-size: 20px; text-align: center;">An error occured!<br><span style="font-size: 12px;">Please try again</span></div>
                        </div>
                    <?php } ?>
                    <div class="row page-titles">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item active"><a href="javascript:void(0)">Content</a></li>
                            <li class="breadcrumb-item"><a href="javascript:void(0)">Update Page content</a></li>
                        </ol>
                    </div>
                    <form method="POST" action="php/content.php" enctype="multipart/form-data">
                        <?php
                        $fetch = mysqli_query($con, "SELECT * FROM content");
                        $data = mysqli_fetch_assoc($fetch);
                        ?>
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">About us section</h4>
                            </div>
                            <div class="card-body">
                                <div class="basic-form">
                                    <!-- <form> -->
                                    <div class="row">
                                        <div class="mb-3 col-md-6">
                                            <label class="form-label">About Header</label>
                                            <input type="text" class="form-control" value="<?php echo $data['about_title']; ?>" placeholder="The about us title" name="about_title" required>
                                        </div>
                                        <div class="mb-3 col-md-6">
                                            <label class="form-label">Main Goal</label>
                                            <input type="text" class="form-control" value="<?php echo $data['goal']; ?>" placeholder="Our main goal" name="goal" required>
                                        </div>
                                        <div class="mb-3 col-xl-12">
                                            <label class="form-label">About us</label>
                                            <textarea name="about" class="form-control" style="height: 200px;" required><?php echo $data['about']; ?></textarea>
                                        </div>
                                        <div class="mb-3 col-xl-12">
                                            <label class="">About us Image</label>
                                            <center>
                                                <img src="images/content/<?php echo $data['about_image']; ?>" id="profilePreview" alt="profile-img" style="width: 100%;height: 480px;" class="rounded">
                                            </center>
                                            <center>
                                                <button type="button" style="width: 400px;" class="mt-3 p-0 btn btn-info" onclick="document.querySelector('#fileUp').click();">Upload</button>
                                                <input type="file" name="about_img" id='fileUp' accept="image/*" required hidden>
                                            </center>
                                        </div>
                                    </div>

                                    <!-- </form> -->
                                </div>
                            </div>
                        </div>

                        <!-- Social links -->
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Social links</h4>
                            </div>
                            <div class="card-body">
                                <div class="basic-form">
                                    <!-- <form> -->
                                    <div class="row">
                                        <div class="mb-3 col-md-6">
                                            <label class="form-label">Facebook</label>
                                            <input type="text" class="form-control" placeholder="https://facebook.com/page_name" value="<?php echo $data['facebook']; ?>" name="facebook">
                                        </div>
                                        <div class="mb-3 col-md-6">
                                            <label class="form-label">Instagram</label>
                                            <input type="text" class="form-control" placeholder="https://instagram.com/page_name" value="<?php echo $data['instagram']; ?>" name="instagram">
                                        </div>
                                        <div class="mb-3 col-md-6">
                                            <label class="form-label">Youtube</label>
                                            <input type="text" class="form-control" placeholder="https://youtube.com/channel" value="<?php echo $data['youtube']; ?>" name="youtube">
                                        </div>
                                        <div class="mb-3 col-md-6">
                                            <label class="form-label">Twitter</label>
                                            <input type="text" class="form-control" placeholder="https://twitter.com/name" value="<?php echo $data['twitter']; ?>" name="twitter">
                                        </div>
                                    </div>

                                    <!-- </form> -->
                                </div>
                            </div>
                        </div>

                        <!-- Motto -->
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Motto</h4>
                            </div>
                            <div class="card-body">
                                <div class="basic-form">
                                    <!-- <form> -->
                                    <div class="row">
                                        <div class="mb-3 col">
                                            <label class="form-label">Motto</label>
                                            <input type="text" class="form-control" placeholder="Our motto" value="<?php echo $data['motto']; ?>" name="motto" required>
                                        </div>
                                    </div>

                                    <!-- </form> -->
                                </div>
                            </div>
                        </div>

                        <!-- Slideshow -->
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Slideshow</h4>
                            </div>
                            <div class="card-body">
                                <div class="basic-form">

                                    <div class="card">
                                        <div class="card-header">
                                            <h4 class="card-title">Slide 1</h4>
                                        </div>

                                        <div class="card-body row">
                                            <div class="mb-3 col-md-6">
                                                <label class="form-label">Slideshow Header</label>
                                                <input type="text" class="form-control" placeholder="The slideshow title" value="<?php echo $data['slide1_title']; ?>" name="slide_title_1" required>
                                            </div>
                                            <div class="mb-3 col-md-6">
                                                <label class="form-label">Slideshow Subtitle</label>
                                                <input type="text" class="form-control" placeholder="The slideshow subtitle" value="<?php echo $data['slide1_subtitle']; ?>" name="slide_subtitle_1" required>
                                            </div>
                                            <div class="mb-3 col-xl-12">
                                                <label class="form-label">Slideshow</label>
                                                <input type="file" name="slide_img_1">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <div class="card-header">
                                            <h4 class="card-title">Slide 2</h4>
                                        </div>

                                        <div class="card-body row">
                                            <div class="mb-3 col-md-6">
                                                <label class="form-label">Slideshow Header</label>
                                                <input type="text" class="form-control" placeholder="The slideshow title" value="<?php echo $data['slide2_title']; ?>" name="slide_title_2" required>
                                            </div>
                                            <div class="mb-3 col-md-6">
                                                <label class="form-label">Slideshow Subtitle</label>
                                                <input type="text" class="form-control" placeholder="The slideshow subtitle" value="<?php echo $data['slide2_subtitle']; ?>" name="slide_subtitle_2" required>
                                            </div>
                                            <div class="mb-3 col-xl-12">
                                                <label class="form-label">Slideshow</label>
                                                <input type="file" name="slide_img_2">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <div class="card-header">
                                            <h4 class="card-title">Slide 3</h4>
                                        </div>

                                        <div class="card-body row">
                                            <div class="mb-3 col-md-6">
                                                <label class="form-label">Slideshow Header</label>
                                                <input type="text" class="form-control" placeholder="The slideshow title" value="<?php echo $data['slide3_title']; ?>" name="slide_title_3" required>
                                            </div>
                                            <div class="mb-3 col-md-6">
                                                <label class="form-label">Slideshow Subtitle</label>
                                                <input type="text" class="form-control" placeholder="The slideshow subtitle" value="<?php echo $data['slide3_subtitle']; ?>" name="slide_subtitle_3" required>
                                            </div>
                                            <div class="mb-3 col-xl-12">
                                                <label class="form-label">Slideshow</label>
                                                <input type="file" name="slide_img_3">
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Contact info</h4>
                            </div>
                            <div class="card-body">
                                <div class="basic-form">
                                    <!-- <form> -->
                                    <div class="row">
                                        <div class="mb-3 col-sm-6">
                                            <label class="form-label">Address</label>
                                            <input type="text" class="form-control" placeholder="Our address" value="<?php echo $data['address']; ?>" name="address" required>
                                        </div>

                                        <div class="mb-3 col-sm-6">
                                            <label class="form-label">Phone number: </label>
                                            <input type="text" class="form-control" placeholder="+250 7** *** *** / +250 7** *** ***" value="<?php echo $data['phone']; ?>" name="phone" required>
                                        </div>
                                        <div class="mb-3 col">
                                            <label class="form-label">E-mail address: </label>
                                            <input type="text" class="form-control" placeholder="info@example.com" value="<?php echo $data['email'] ?>" name="email" required>
                                        </div>
                                    </div>

                                    <!-- </form> -->
                                </div>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary">Update content</button>
                    </form>
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
        </script>
        <?php include "include/scripts.php" ?>
    </body>

    </html>
<?php
} else {
    header("location: login.php");
}

?>