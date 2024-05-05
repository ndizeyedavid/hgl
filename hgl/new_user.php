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
                            <div class="alert-body" style="font-size: 20px; text-align: center;">Member added successfully</div>
                        </div>
                    <?php } else if (isset($_GET['err'])) { ?>
                        <div class="alert alert-danger">
                            <div class="alert-body" style="font-size: 20px; text-align: center;">An error occured!<br><span style="font-size: 12px;">Please try again</span></div>
                        </div>
                    <?php } ?>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">New member</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form action="php/new_user.php" method="POST" enctype="multipart/form-data">
                                    <div class="mb-3 row text-center">
                                        <label class="">Member's Image</label>
                                        <center>
                                            <img src="images/user.png" id="profilePreview" alt="profile-img" style="width: 180px;height: 180px;" class="rounded-circle">
                                        </center>
                                        <center>
                                            <button type="button" style="width: 400px;" class="mt-3 p-0 btn btn-info" onclick="document.querySelector('#fileUp').click();">Upload</button>
                                            <input type="file" name="profile" id='fileUp' accept="image/*" hidden>
                                        </center>
                                    </div>
                                    <hr>
                                    <div class="mb-3 row">
                                        <label class="col-sm-3 col-form-label">Names</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" placeholder="member's names" name="name" required>
                                        </div>
                                    </div>

                                    <div class="mb-3 row">
                                        <label class="col-sm-3 col-form-label">E-mail</label>
                                        <div class="col-sm-9">
                                            <input type="email" class="form-control" placeholder="member's email" name="email" required>
                                        </div>
                                    </div>

                                    <div class="mb-3 row">
                                        <label class="col-sm-3 col-form-label">Role</label>
                                        <div class="col-sm-9">
                                            <select name="role" class="default-select form-control wide" required>
                                                <option value="#" disabled>Choose member's role</option>
                                                <option value=""></option>
                                                <option value="volunteer">Volunteer</option>
                                                <option value="supporter">Supporter</option>
                                            </select>
                                        </div>
                                    </div>
                                    <fieldset class="mb-3">
                                        <div class="row">
                                            <label class="col-form-label col-sm-3 pt-0">Gender</label>
                                            <div class="col-sm-9">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="gender" value="male">
                                                    <label class="form-check-label">
                                                        Male
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="gender" value="female">
                                                    <label class="form-check-label">
                                                        Female
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <div class="mb-3 row">
                                        <button type="submit" name="add" class="btn btn-primary">Add member</button>
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
        </script>
        <?php include "include/scripts.php" ?>
    </body>

    </html>
<?php
} else {
    header("location: login.php");
}

?>