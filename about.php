<?php include "php/connect.php"; ?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js"> <!--<![endif]-->

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>About &mdash; Hope for a good life</title>
	<?php include "php/style.php"; ?>
	<style>
		.rows {
			display: flex;
			height: 100%;

		}

		.column {
			flex: 1;
			padding: 20px;
			color: white;
			display: flex;
			flex-direction: column;
			align-items: center;
			/* justify-content: center; */
			height: 100%;
		}

		.column p {
			color: #fff;
			font-size: 16px;
		}

		.column .heads {
			color: #fff;
			font-size: 30px;
			font-weight: 700;
			/* margin-bottom: 20px; */
		}

		.vision {
			background-image: linear-gradient(to right, #779e47, #428324);
		}

		.objectives {
			background-color: #2c5d3f;
		}

		.mission {
			background-image: linear-gradient(to right, #b16f35, #b89839), url('your-image-url.jpg');
			background-blend-mode: overlay;
			background-size: cover;
			background-position: center center;
		}
	</style>
</head>

<body>
	<div id="fh5co-wrapper">
		<div id="fh5co-page">
			<?php include "php/head.php"; ?>

			<div class="fh5co-hero">
				<div class="fh5co-overlay"></div>
				<div class="fh5co-cover text-center" data-stellar-background-ratio="0.5" style="background-image: linear-gradient(180deg, rgb(0, 0, 0, 0.5), rgb(255, 87, 34, 0.4)), url(admin/images/content/slide2.jpg);">

					<div class="desc animate-box">
						<h2>We Are <strong>Non-profit</strong></h2>
						<span><a class="btn btn-primary btn-lg" href="javascript:void(0);" onclick="display_modal('donate');">Donate Now</a></span>

					</div>
				</div>

			</div>

			<div id="fh5co-feature-product" class="fh5co-section-gray">
				<div class="container">
					<div class="row">
						<div class="col-md-12 text-center heading-section">
							<h3>How we started.</h3>
						</div>
					</div>
					<?php
					$fetch = mysqli_query($con, "SELECT * FROM content");
					$data = mysqli_fetch_assoc($fetch);
					?>
					<div class="row row-bottom-padded-md">
						<div class="col-md-12 text-center animate-box">
							<p><img src="admin/images/content/<?php echo $data['slide1_img']; ?>" alt="about images" class="img-responsive" style="width: 100%; height: 500px"></p>
						</div>
						<div class="col-md-6 text-center animate-box">
							<p><img src="admin/images/content/<?php echo $data['slide2_img']; ?>" alt="about images" class="img-responsive" style="width: 100%; height: 500px"></p>
						</div>
						<div class="col-md-6 text-center animate-box">
							<p><img src="admin/images/content/<?php echo $data['slide3_img']; ?>" alt="about images" class="img-responsive" style="width: 100%; height: 500px"></p>
						</div>
					</div>
					<div class="row">
						<div class="col-md-4">
							<div class="feature-text">
								<h3><?php echo $data['slide1_title']; ?></h3>
								<p><?php echo $data['slide1_subtitle']; ?></p>
							</div>
						</div>
						<div class="col-md-4">
							<div class="feature-text">
								<h3><?php echo $data['slide2_title']; ?></h3>
								<p><?php echo $data['slide2_subtitle']; ?></p>
							</div>
						</div>
						<div class="col-md-4">
							<div class="feature-text">
								<h3><?php echo $data['slide3_title']; ?></h3>
								<p><?php echo $data['slide3_subtitle']; ?></p>
							</div>
						</div>
					</div>


				</div>
			</div>

			<?php
			$fetch = mysqli_query($con, "SELECT * FROM about");
			$data = mysqli_fetch_assoc($fetch);
			?>
			<div id="fh5co-portfolio">
				<div class="container" style="height: 600px;">
					<div class="rows">
						<div class="column vision animate-box">
							<p class="heads">Mission.</p>
							<p><?php echo $data['mission']; ?></p>
						</div>
						<div class="column objectives animate-box">
							<p class="heads">Vision.</p>
							<p><?php echo $data['vision']; ?></p>
						</div>
						<div class="column mission animate-box">
							<p class="heads">Goal.</p>
							<p><?php echo $data['goal']; ?></p>
						</div>
					</div>
				</div>
			</div>



			<div id="fh5co-content-section" class="fh5co-section-gray">
				<div class="container">
					<div class="row">
						<div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
							<h3>Our Team</h3>
						</div>
					</div>
				</div>
				<div class="container">
					<div class="row">
						<?php
						$fetch = mysqli_query($con, "SELECT * FROM users WHERE role!='intern'");

						while ($row = mysqli_fetch_assoc($fetch)) {
						?>
							<div class="col-md-4">
								<br><br>
								<div class="fh5co-team text-center animate-box">
									<figure>
										<img src="admin/images/team/<?php echo $row['profileImg']; ?>" alt="user">
									</figure>

									<div>
										<h3><?php echo $row['user_name']; ?></h3>
										<p><span><?php echo $row['role']; ?></span></p>
										<p style="display: flex;align-items: center; gap: 10px;justify-content: center;">
											<i class="icon-mail"></i> <?php echo $row['email']; ?>
										</p>
									</div>

								</div>
							</div>

						<?php } ?>
					</div>
				</div>
			</div>
			<!-- fh5co-content-section -->


			<?php include "php/footer.php"; ?>


		</div>
		<!-- END fh5co-page -->

	</div>
	<!-- END fh5co-wrapper -->

	<?php include "php/scripts.php"; ?>
	<?php include "include/whatsapp.php" ?>
</body>

</html>