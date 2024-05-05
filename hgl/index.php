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
				<!-- row -->
				<div class="container-fluid">
					<div class="row">
						<div class="col-xl-3 col-xxl-6 col-lg-6 col-sm-6">
							<div class="widget-stat card bg-info">
								<div class="card-body  p-4">
									<div class="media">
										<span class="me-3">
											<i class="flaticon-381-calendar-1"></i>
										</span>
										<div class="media-body text-white text-end">
											<p class="mb-1">Events</p>
											<h3 class="text-white">
												<?php
												$events = mysqli_query($con, "SELECT * FROM events WHERE status != 'completed'");
												echo mysqli_num_rows($events);
												?>
											</h3>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="col-xl-3 col-xxl-6 col-lg-6 col-sm-6">
							<div class="widget-stat card bg-success">
								<div class="card-body  p-4">
									<div class="media">
										<span class="me-3">
											<i class="bi bi-cash"></i>
										</span>
										<div class="media-body text-white text-end">
											<p class="mb-1">Donators</p>
											<h3 class="text-white">
												<?php
												$donators = mysqli_query($con, "SELECT * FROM donators");
												echo mysqli_num_rows($donators);
												?>
											</h3>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="col-xl-3 col-xxl-6 col-lg-6 col-sm-6">
							<div class="widget-stat card bg-primary">
								<div class="card-body  p-4">
									<div class="media">
										<span class="me-3">
											<i class="bi bi-wallet"></i>
										</span>
										<div class="media-body text-white text-end">
											<p class="mb-1">Total Raise</p>
											<h3 class="text-white">
												<?php
												$rise = mysqli_query($con, "SELECT SUM(amount) FROM donators");
												$rise = mysqli_fetch_assoc($rise);
												$rise = $rise['SUM(amount)'];
												if (empty($rise)) {
													echo "0";
												} else {
													echo $rise;
												}
												?>
												$</h3>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="col-xl-3 col-xxl-6 col-lg-6 col-sm-6">
							<div class="widget-stat card bg-danger">
								<div class="card-body  p-4">
									<div class="media">
										<span class="me-3">
											<i class="bi bi-people"></i>
										</span>
										<div class="media-body text-white text-end">
											<p class="mb-1">Team</p>
											<h3 class="text-white">
												<?php
												$team = mysqli_query($con, "SELECT * FROM users");
												echo mysqli_num_rows($team);
												?>
											</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>


					<div class="row">
						<div class="col-xl-6">
							<div class="card">
								<div class="card-header border-0">
									<div>
										<h4 class="fs-20 font-w700">Recent Messages</h4>
										<span class="fs-14 font-w400">Check out more messages that were sent</span>
									</div>
									<div>
										<a href="message.php" class="btn btn-outline-primary btn-rounded fs-18">View More</a>
									</div>
								</div>
								<div class="card-body px-0">

									<?php
									$fetch_messages = mysqli_query($con, "SELECT * FROM message WHERE msg_name!='admin' ORDER BY msg_date DESC LIMIT 8");
									if (mysqli_num_rows($fetch_messages) > 0) {
										while ($row_msg = mysqli_fetch_assoc($fetch_messages)) {
											$msg_id = $row_msg['msg_id'];
											$msg_name = $row_msg['msg_name'];
											$msg_email = $row_msg['msg_email'];
											$msg = $row_msg['message'];
									?>
											<div class="d-flex justify-content-between recent-emails">
												<div class="d-flex">
													<div class="profile-k">
														<span class="bg-success"><?php echo strtoupper(substr($msg_name, 0, 1)); ?></span>
													</div>
													<div class="ms-3">
														<h4 class="fs-18 font-w500"><?php echo "$msg_name  •  $msg_email"; ?></h4>
														<span class="font-w400 d-block"><?php echo substr($msg, 0, 29) ?>......</span>
													</div>
												</div>
												<a href="message.php#msg-<?php echo $msg_id; ?>">
													<div class="email-check">
														<label class="like-btn mb-0">
															<span class="checkmark"></span>
														</label>
													</div>
												</a>
											</div>
										<?php
										}
									} else {
										?>
										<p style="text-align: center;" class="mt-5 p-5 h3 text-muted">Empty message inbox</p>
									<?php } ?>
								</div>
							</div>
						</div>

						<div class="col-xl-6">
							<div class="card">
								<div class="card-header border-0 pb-0">
									<div>
										<h4 class="fs-20 font-w700">Events Planned</h4>
										<span class="fs-14 font-w400 d-block">These events deserve this spotlight</span>
									</div>
								</div>
								<div class="card-body pb-0">
									<?php
									$fetch_events = mysqli_query($con, "SELECT * FROM events WHERE status != 'completed' ORDER BY created_date DESC LIMIT 4");

									if (mysqli_num_rows($fetch_events) > 0) {
										while ($row_events = mysqli_fetch_assoc($fetch_events)) {
											$event_id = $row_events['event_id'];
											$event_name = $row_events['event_name'];
											$event_desc = $row_events['event_desc'];
											$status = $row_events['status'];
											$progress = $row_events['progress'];
											$primary = $row_events['primary_operator'];
											$secondary = $row_events['secondary_operator'];
											$start_date = $row_events['start_date'];
											$deadline = $row_events['deadline'];
											$thumb = $row_events['event_thumbnail'];
									?>
											<div class="project-details">
												<div class="d-flex align-items-center justify-content-between">
													<div class="d-flex align-items-center">
														<span class="big-wind">
															<img src="images/events/<?php echo $thumb; ?>" style="width: 100%;height: 100%" alt="<?php echo $event_name; ?>">
														</span>
														<div class="ms-3">
															<h4><?php echo $event_name;  ?></h4>
															<span class="fs-14 font-w400"><?php echo $status  ?></span>
														</div>
													</div>
													<div class="dropdown">
														<div class="btn-link" data-bs-toggle="dropdown">
															<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<circle cx="12.4999" cy="3.5" r="2.5" fill="#A5A5A5"></circle>
																<circle cx="12.4999" cy="11.5" r="2.5" fill="#A5A5A5"></circle>
																<circle cx="12.4999" cy="19.5" r="2.5" fill="#A5A5A5"></circle>
															</svg>
														</div>
														<div class="dropdown-menu dropdown-menu-right">
															<a class="dropdown-item" href="php/event_del.php?id=<?php echo $event_id; ?>">Delete</a>
															<a class="dropdown-item" href="event_edit.php?id=<?php echo $event_id; ?>">Edit</a>
														</div>
													</div>
												</div>
												<h4 class="fs-16 font-w600 mt-4"><?php echo $event_desc; ?></h4>
												<div class="projects">
													<span class="badge bgl-success text-dark font-w700 me-3"><?php
																												$primary_name_fetch = mysqli_query($con, "SELECT * FROM users WHERE user_id='{$primary}'");
																												$primary_name = mysqli_fetch_assoc($primary_name_fetch);
																												echo $primary_name['user_name'];
																												?></span>
													<span class="badge bgl-danger text-danger font-w700"><?php
																											$secondary_name_fetch = mysqli_query($con, "SELECT * FROM users WHERE user_id='{$secondary}'");
																											$secondary_name = mysqli_fetch_assoc($secondary_name_fetch);
																											echo $secondary_name['user_name'];
																											?></span>
												</div>
												<div class="mt-3">
													<div class="progress default-progress">
														<div class="progress-bar bg-gradient1 progress-animated" style="width: <?php echo $progress; ?>%; height:10px;" role="progressbar">
															<span class="sr-only"><?php echo $progress ?>% Complete</span>
														</div>
													</div>
													<div class="d-flex align-items-end mt-3 pb-3 justify-content-between">
														<span class="fs-14 font-w400">Start date: <?php echo $start_date; ?></span>
														<span class="fs-14 font-w400">Due date: <?php echo $deadline; ?></span>
													</div>
												</div>
											</div>
									<?php
										}
									} else {
										echo "
										<p style='text-align: center;' class='mt-5 p-5 h3 text-muted'>No events pending now...</p>
									";
									}
									?>

								</div>
								<div class="card-footer pt-0 border-0">
									<a href="events.php" class="btn btn-outline-primary d-block btn-rounded">More events</a>
								</div>
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