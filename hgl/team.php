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
							<div class="alert-body" style="font-size: 20px; text-align: center;">Member affected successfully</div>
						</div>
					<?php } else if (isset($_GET['err'])) { ?>
						<div class="alert alert-danger">
							<div class="alert-body" style="font-size: 20px; text-align: center;">An error occured!<br><span style="font-size: 12px;">Please try again</span></div>
						</div>
					<?php } ?>

					<div class="d-flex justify-content-between align-items-center flex-wrap">

						<form action="#" onsubmit="return false;">
							<div class="input-group contacts-search mb-4">
								<input type="text" class="form-control" placeholder="Search here...">
								<span class="input-group-text"><a href="javascript:void(0)"><i class="flaticon-381-search-2"></i></a></span>
							</div>
						</form>
						<div class="mb-4">
							<a href="new_user.php" class="btn btn-primary btn-rounded fs-18">+ New Member</a>
						</div>
					</div>
					<div class="row">

						<div class="col-xl-12">
							<div class="row">
								<?php
								$fetch = mysqli_query($con, "SELECT * FROM users WHERE user_id!='{$user_id}'");
								if (mysqli_num_rows($fetch) > 0) {
									while ($row = mysqli_fetch_assoc($fetch)) {
								?>

										<div class="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items">
											<div class="card contact-bx item-content">
												<div class="card-header border-0">
													<div class="action-dropdown">
														<div class="dropdown ">
															<div class="btn-link" data-bs-toggle="dropdown">
																<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<circle cx="12.4999" cy="3.5" r="2.5" fill="#A5A5A5"></circle>
																	<circle cx="12.4999" cy="11.5" r="2.5" fill="#A5A5A5"></circle>
																	<circle cx="12.4999" cy="19.5" r="2.5" fill="#A5A5A5"></circle>
																</svg>
															</div>
															<div class="dropdown-menu dropdown-menu-right">
																<a class="dropdown-item" href="javascript:void(0);">Download CV</a>
																<a class="dropdown-item" href="javascript:void(0);" onclick="alert(`The password of <?php echo $row['user_name'] ?> is \n<?php echo $row['password'] ?>`)">Recover password</a>
															</div>
														</div>
													</div>
												</div>
												<div class="card-body user-profile">
													<div class="image-bx">
														<img src="images/team/<?php echo $row['profileImg']; ?>" alt="user-image" class="rounded-circle">
													</div>
													<div class="media-body user-meta-info">
														<h6 class="fs-18 font-w600 my-1"><a href="javascript:void(0);" class="text-black user-name"><?php echo $row['user_name']; ?></a></h6>
														<p class="fs-14 mb-3 user-work" data-occupation="UI Designer"><?php echo $row['email']; ?></p>
														<ul>
															<li><a href="user_edit.php?id=<?php echo $row['user_id']; ?>"><i class="bi bi-pencil-square"></i></a></li>
															<li><a href="php/user_delete.php?id=<?php echo $row['user_id']; ?>"><i class="bi bi-trash"></i></a></li>
														</ul>
													</div>
												</div>
											</div>
										</div>
								<?php }
								} ?>

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
		<?php include "include/scripts.php" ?>

	</body>

	</html>
<?php
} else {
	header("location: login.php");
}

?>