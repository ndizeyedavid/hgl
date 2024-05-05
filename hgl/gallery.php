<?php
include "php/connect.php";
session_start();
if ($_SESSION['id']){
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<?php include "include/style.php"; ?>
	<link href="vendor/lightgallery/css/lightgallery.min.css" rel="stylesheet">
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
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
							<div class="card-header">
								<h4 class="card-title"></h4>
                                <a href="new_gallery.php" class="btn btn-primary float-end p-3">Add Image</a>
							</div>
							<div class="card-body pb-1">
								<div id="lightgallery" class="row">
									<?php 
									$fetch = mysqli_query($con, "SELECT * FROM gallery");

									if (mysqli_num_rows($fetch)>0){
										while ($row = mysqli_fetch_assoc($fetch)){
									?>
									<a title="<?php echo $row['image_description']; ?>" href="images/gallery/<?php echo $row['image']; ?>" data-exthumbimage="images/gallery/<?php echo $row['image']; ?>" data-src="images/gallery/<?php echo $row['image']; ?>" class="col-lg-3 col-md-6 mb-4">
										<img src="images/gallery/<?php echo $row['image']; ?>" alt="Gallery image" title="Added on: <?php echo $row['added_date']; ?>" style="width:100%;">
									</a>
									<?php }}else{
										echo "
											<p style='text-align: center;' class='mt-3 p-5 mb-5 h3 text-muted'>Empty message inbox</p>
										";
									} ?>

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
	<script src="vendor/lightgallery/js/lightgallery-all.min.js"></script>

</body>
</html>
<?php
}else{
	header("location: login.php");
}

?>