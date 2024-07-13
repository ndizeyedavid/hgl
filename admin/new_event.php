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
                    <div class="alert-body" style="font-size: 20px; text-align: center;">Event added successfully</div>
                </div>
                <?php }else if (isset($_GET['err'])){ ?>
                <div class="alert alert-danger">
                    <div class="alert-body" style="font-size: 20px; text-align: center;">An error occured!<br><span style="font-size: 12px;">Please try again</span></div>
                </div>
                <?php } ?>
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">New Event</h4>
                    </div>
                    <div class="card-body">
                        <div class="basic-form">
                            <form action="php/new_event.php" method="POST" enctype="multipart/form-data">
                                <div class="mb-3 row text-center">
                                    <label class="">Project's Thumbnail</label>
                                    <center>
                                        <img src="images/event.png" id="profilePreview" alt="profile-img" style="width: 780px;height: 380px;" class="rounded">
                                    </center>
                                    <center>
                                        <button type="button" style="width: 400px;" class="mt-3 p-0 btn btn-info" onclick="document.querySelector('#fileUp').click();">Upload</button>
                                        <input type="file" name="thumb" id='fileUp' accept="image/*" hidden>
                                    </center>
                                </div>
                                <hr>
                                <div class="mb-3 row">
                                    <label class="col-sm-3 col-form-label">Event title</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" placeholder="Event Title" name="name" required>
                                    </div>
                                </div>

                                <div class="mb-3 row">
                                    <label class="col-sm-3 col-form-label">Event Description</label>
                                    <div class="col-sm-9">
                                        <textarea name="desc" class="form-control" style="height: 100px;" placeholder="What is the event all about..."></textarea>
                                    </div>
                                </div>
                                
                                <div class="mb-3 row">
                                    <label class="col-sm-3 col-form-label">Primary Operator</label>
                                    <div class="col-sm-9">
                                        <select name="primary" class="default-select form-control wide" required>
                                            <option value="#" disabled>Choose member's role</option>
                                            <option value="">Choose primary operator</option>
                                            <?php
                                            $fetch_primary = mysqli_query($con, "SELECT * FROM users WHERE user_id!='{$user_id}'");
                                            while ($primary = mysqli_fetch_assoc($fetch_primary)){
                                            ?>
                                            <option value="<?php echo $primary['user_id'] ?>"><?php echo $primary['user_name']; ?></option>
                                            <?php } ?>
                                        </select>
                                    </div>
                                </div>

                                <div class="mb-3 row">
                                    <label class="col-sm-3 col-form-label">Secondary Operator</label>
                                    <div class="col-sm-9">
                                        <select name="secondary" class="default-select form-control wide" required>
                                            <option value="#" disabled>Choose member's role</option>
                                            <option value="">Choose secondary operator</option>
                                            <?php
                                            $fetch_secondary = mysqli_query($con, "SELECT * FROM users WHERE user_id!='{$user_id}'");
                                            while ($secondary = mysqli_fetch_assoc($fetch_secondary)){
                                            ?>
                                            <option value="<?php echo $secondary['user_id'] ?>"><?php echo $secondary['user_name']; ?></option>
                                            <?php } ?>
                                        </select>
                                    </div>
                                </div>

                                <div class="mb-3 row">
                                    <label class="col-sm-3 col-form-label">Start Date</label>
                                    <div class="col-sm-9">
                                        <input type="date" class="form-control" name="start" required>
                                    </div>
                                </div>

                                <div class="mb-3 row">
                                    <label class="col-sm-3 col-form-label">Deadline</label>
                                    <div class="col-sm-9">
                                        <input type="date" class="form-control" name="deadline" required>
                                    </div>
                                </div>

                                <div class="mb-3 row">
                                    <label class="col-sm-3 col-form-label">Budget</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" name="budget" placeholder="Amount planned for this project..." required>
                                    </div>
                                </div>
                                
                                <div class="mb-3 row">
                                    <button type="submit" name="add" class="btn btn-primary">Add Event</button>
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