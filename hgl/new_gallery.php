<?php
include "php/connect.php";
session_start();
if ($_SESSION['id']){
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
                <?php if (isset($_GET['succ'])){ ?>
                <div class="alert alert-success">
                    <div class="alert-body" style="font-size: 20px; text-align: center;">Image added successfully</div>
                </div>
                <?php }else if (isset($_GET['err'])){ ?>
                <div class="alert alert-danger">
                    <div class="alert-body" style="font-size: 20px; text-align: center;">An error occured!<br><span style="font-size: 12px;">Please try again</span></div>
                </div>
                <?php } ?>
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">New Photo Gallery</h4>
                    </div>
                    <div class="card-body">
                        <div class="basic-form">
                            <form action="php/new_gallery.php" method="POST" enctype="multipart/form-data">
                                <div class="mb-3 row text-center">
                                    <label class="">Gallery Image</label>
                                    <center>
                                        <img src="images/event.png" id="profilePreview" alt="profile-img" style="width: 100%;height: 480px;" class="rounded">
                                    </center>
                                    <center>
                                        <button type="button" style="width: 400px;" class="mt-3 p-0 btn btn-info" onclick="document.querySelector('#fileUp').click();">Upload</button>
                                        <input type="file" name="thumb" id='fileUp' accept="image/*" hidden>
                                    </center>
                                </div>
                                <hr>

                                <div class="mb-3 row">
                                    <label class="col-sm-3 col-form-label">Image Description</label>
                                    <div class="col-sm-9">
                                        <textarea name="desc" class="form-control" style="height: 100px;" placeholder="What is the Image all about..."></textarea>
                                    </div>
                                </div>
                                                                
                                <div class="mb-3 row">
                                    <button type="submit" name="add" class="btn btn-primary">Add Image</button>
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
    document.getElementById("fileUp").addEventListener("change", function(event){
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
}else{
	header("location: login.php");
}

?>