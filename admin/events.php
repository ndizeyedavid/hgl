<?php
include "php/connect.php";
session_start();
if ($_SESSION['id']){
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
                    <div class="alert-body" style="font-size: 20px; text-align: center;">Event affected successfully</div>
                </div>
                <?php }else if (isset($_GET['err'])){ ?>
                <div class="alert alert-danger">
                    <div class="alert-body" style="font-size: 20px; text-align: center;">An error occured!<br><span style="font-size: 12px;">Please try again</span></div>
                </div>
                <?php } ?>

				<div class="project-page d-flex justify-content-between align-items-center flex-wrap">
					<div class="project mb-4"></div>
					<div class="mb-4">
						<a href="new_event.php" class="btn btn-primary btn-rounded fs-18">+ New Project</a>
						
					</div>
				</div>	
				<div class="row">
					<?php 
						$fetch = mysqli_query($con, "SELECT * FROM events");

						if (mysqli_num_rows($fetch)){
							while ($row = mysqli_fetch_assoc($fetch)){
								$event_id = $row['event_id'];
								$event_name = $row['event_name'];
								$primary = $row['primary_operator'];
								$secondary = $row['secondary_operator'];
								$start_date = $row['start_date'];
								$deadline = $row['deadline'];
								$status = $row['status'];
								$progress = $row['progress'];
					?>
					<div class="col-xl-12">
						<div class="tab-content">
							<div class="tab-pane fade active show" id="AllStatus">
								<div class="card">
									<div class="card-body">
										<div class="row align-items-center">
											<div class="col-xl-3  col-lg-6 col-sm-12 align-items-center customers">
												<div class="media-body">
													<span class="text-primary d-block fs-18 font-w500 mb-1"># <?php echo $event_id; ?></span>
													<h3 class="fs-18 text-black font-w600"><?php echo $event_name; ?></h3>
													<span class="d-block mb-lg-0 mb-0 fs-16"><i class="fas fa-calendar me-3"></i>Started on <?php echo $start_date; ?></span>
												</div>
											</div>
											<div class="col-xl-2  col-lg-3 col-sm-4  col-6 mb-3">
												<?php 
												if (!empty($primary)){
													$primary_data = mysqli_query($con, "SELECT * FROM users WHERE user_id='{$primary}'");
													$primary_data = mysqli_fetch_assoc($primary_data);
												?>
												<div class="d-flex project-image">
													<img src="images/team/<?php echo $primary_data['profileImg']; ?>" alt="primary-operatior">
													<div>
														<small class="d-block fs-16 font-w400"><?php echo $primary_data['user_name']; ?></small>
														<span class="fs-18 font-w500"><?php echo $primary_data['role']; ?></span>
													</div>
												</div>
												<?php } ?>
											</div>
											<div class="col-xl-2 col-lg-3 col-sm-4 col-6 mb-3 text-lg-center">
												<?php 
												if (!empty($secondary)){
													$secondary_data = mysqli_query($con, "SELECT * FROM users WHERE user_id='{$secondary}'");
													$secondary_data = mysqli_fetch_assoc($secondary_data);
												?>
												<div class="d-flex project-image">
													<img src="images/team/<?php echo $secondary_data['profileImg']; ?>" alt="sec$secondary-operatior">
													<div>
														<small class="d-block fs-16 font-w400"><?php echo $secondary_data['user_name']; ?></small>
														<span class="fs-18 font-w500"><?php echo $secondary_data['role']; ?></span>
													</div>
												</div>
												<?php } ?>
											</div>
											<div class="col-xl-3  col-lg-6 col-sm-6 mb-sm-4 mb-0">
												<div class="d-flex project-image">
													<svg class="me-3" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
														<circle cx="27.5" cy="27.5" r="27.5" fill="#886CC0"></circle>
														<g clip-path="url(#clip0)">
														<path d="M37.2961 23.6858C37.1797 23.4406 36.9325 23.2843 36.661 23.2843H29.6088L33.8773 16.0608C34.0057 15.8435 34.0077 15.5738 33.8826 15.3546C33.7574 15.1354 33.5244 14.9999 33.2719 15L27.2468 15.0007C26.9968 15.0008 26.7656 15.1335 26.6396 15.3495L18.7318 28.905C18.6049 29.1224 18.604 29.3911 18.7294 29.6094C18.8548 29.8277 19.0873 29.9624 19.3391 29.9624H26.3464L24.3054 38.1263C24.2255 38.4457 24.3781 38.7779 24.6725 38.9255C24.7729 38.9757 24.8806 39 24.9872 39C25.1933 39 25.3952 38.9094 25.5324 38.7413L37.2058 24.4319C37.3774 24.2215 37.4126 23.931 37.2961 23.6858Z" fill="white"></path>
														</g>
														<defs>
														<clipPath>
														<rect width="24" height="24" fill="white" transform="translate(16 15)"></rect>
														</clipPath>
														</defs>
													</svg>
													<div>
														<small class="d-block fs-16 font-w400">Deadline</small>
														<span class="fs-18 font-w500"><?php echo $deadline; ?></span>
													</div>
												</div>
											</div>
											<div class="col-xl-2  col-lg-6 col-sm-4 mb-sm-3 mb-3 text-end">
												<div class="d-flex justify-content-end project-btn">
													<a href="javascript:void(0);" class=" btn bg-progress text-warning fs-18 font-w600"><?php echo strtoupper($status); ?></a>
													<div class="dropdown ms-4  mt-auto mb-auto">
														<div class="btn-link" data-bs-toggle="dropdown">
															<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#737B8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																<path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#737B8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																<path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#737B8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
															</svg>
														</div>
														<div class="dropdown-menu dropdown-menu-right">
															<a class="dropdown-item" href="event_edit.php?id=<?php echo $event_id; ?>">Update</a>
															<a class="dropdown-item" href="php/event_del.php?id=<?php echo $event_id; ?>">Delete</a>
														</div>
													</div>
												</div>	
											</div>
											<div class="container-fluid">
												Progress:
												<input type="range" id='<?php echo $event_id; ?>' value='<?php echo $progress; ?>' min='0' max='100' style="width: 100%;" onchange="updateProgress(this.value, this.id);">
											</div>
										</div>	
									</div>	
								</div>
							</div>
						</div>
					</div>
					<?php 
						}}else{
							echo "
								<p style='text-align: center;' class='mt-5 p-5 h3 text-muted'>No events planned yet</p>
							";
						}
					?>
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
		function updateProgress(value, id){
			const xhttp = new XMLHttpRequest();
			xhttp.onload = () =>{
				const res = xhttp.response;
				console.log(res);
			}
			xhttp.open("GET", `php/event_progress.php?value=${value}&id=${id}`);
			xhttp.send();
		}
	</script>
    <?php include "include/scripts.php" ?>
	
</body>
</html>
<?php
}else{
	header("location: login.php");
}

?>