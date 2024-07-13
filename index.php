<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js"> <!--<![endif]-->

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Hope for a good life</title>
	<?php
	include "php/style.php";
	?>
</head>

<body>
	<div id="fh5co-wrapper">
		<div id="fh5co-page">
			<?php
			include "php/head.php";
			?>

			<div class="fh5co-hero">
				<div class="fh5co-overlay"></div>
				<div class="fh5co-cover text-center" data-stellar-background-ratio="0.5" style="background-image: linear-gradient(180deg, rgb(0, 0, 0, 0.5), rgb(255, 87, 34, 0.4)), url(admin/images/content/slide1.jpg);">
					<div class="desc animate-box">
						<h2>Making this world a better place for everyone</h2>
						<span></span>
						<span><a class="btn btn-primary btn-lg" id="donate" href="javascript:void(0)" onclick="display_modal('donate');">Donate Now</a></span>
					</div>
				</div>

			</div>
			<!-- end:header-top -->
			<!-- <div id="fh5co-features">
				<div class="container">
					<div class="row">
						<div class="col-md-4">

							<div class="feature-left">
								<span class="icon">
									<i class="icon-profile-male"></i>
								</span>
								<div class="feature-copy">
									<h3>Become a volunteer</h3>
									<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
									<p><a href="#">Learn More</a></p>
								</div>
							</div>

						</div>

						<div class="col-md-4">
							<div class="feature-left">
								<span class="icon">
									<i class="icon-happy"></i>
								</span>
								<div class="feature-copy">
									<h3>Happy Giving</h3>
									<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
									<p><a href="#">Learn More</a></p>
								</div>
							</div>

						</div>
						<div class="col-md-4">
							<div class="feature-left">
								<span class="icon">
									<i class="icon-wallet"></i>
								</span>
								<div class="feature-copy">
									<h3>Donation</h3>
									<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
									<p><a href="#">Learn More</a></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> -->

			<div id="fh5co-feature-product" class="fh5co-section-gray">
				<div class="container">
					<div class="row">
						<div class="col-md-12 text-center heading-section">
							<h3>What we do.</h3>
						</div>
					</div>

					<?php
					$fetch = mysqli_query($con, "SELECT * FROM content");
					$data = mysqli_fetch_assoc($fetch);
					?>

					<div class="row row-bottom-padded-md">
						<div class="col-md-12 text-center animate-box">
							<p><img src="admin/images/content/<?php echo $data['about_image']; ?>" alt="Causes images" class="img-responsive" style="width:100%; height: 500px;"></p>
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


			<div id="fh5co-portfolio">
				<div class="container">

					<div class="row">
						<div class="col-md-6 col-md-offset-3 text-center heading-section animate-box">
							<h3>Our Gallery</h3>
							<p>Take a look at more of what we have and still do</p>
						</div>
					</div>


					<div class="row row-bottom-padded-md">
						<div class="col-md-12">
							<ul id="fh5co-portfolio-list">
								<?php
								// Gallery formating
								$count = 1;
								$fetch = mysqli_query($con, "SELECT * FROM gallery ORDER BY added_date DESC limit 4");

								while ($row = mysqli_fetch_assoc($fetch)) {
									$date_posted = $row['added_date'];
									$date_posted = explode(" ", $date_posted);
									$date_posted = $date_posted[0];
									if ($count == 1) {
								?>
										<li class="two-third animate-box" data-animate-effect="fadeIn" style="background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0.2)), url(admin/images/gallery/<?php echo $row['image']; ?>); ">
											<a href="#" class="color-3">
												<div class="case-studies-summary">
													<span><?php echo $date_posted ?></span>
													<h2><?php echo $row['image_description']; ?></h2>
												</div>
											</a>
										</li>
									<?php } else if ($count == 2) { ?>

										<li class="one-third animate-box" data-animate-effect="fadeIn" style="background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0.2)), url(admin/images/gallery/<?php echo $row['image']; ?>); ">
											<a href="#" class="color-4">
												<div class="case-studies-summary">
													<span><?php echo $date_posted ?></span>
													<h2><?php echo $row['image_description']; ?></h2>
												</div>
											</a>
										</li>
									<?php } else if ($count == 3) { ?>

										<li class="one-third animate-box" data-animate-effect="fadeIn" style="background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0.2)), url(admin/images/gallery/<?php echo $row['image']; ?>); ">
											<a href="#" class="color-5">
												<div class="case-studies-summary">
													<span><?php echo $date_posted ?></span>
													<h2><?php echo $row['image_description']; ?></h2>
												</div>
											</a>
										</li>
									<?php } else if ($count == 4) { ?>
										<li class="two-third animate-box" data-animate-effect="fadeIn" style="background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0.2)), url(admin/images/gallery/<?php echo $row['image']; ?>); ">
											<a href="#" class="color-6">
												<div class="case-studies-summary">
													<span><?php echo $date_posted ?></span>
													<h2><?php echo $row['image_description']; ?></h2>
												</div>
											</a>
										</li>
								<?php
										$count = 0;
									}
									$count++;
								}
								?>
							</ul>
						</div>
					</div>

					<div class="row">
						<div class="col-md-4 col-md-offset-4 text-center animate-box">
							<a href="gallery.php" class="btn btn-primary btn-lg">See Gallery</a>
						</div>
					</div>


				</div>
			</div>


			<div id="fh5co-services-section">
				<div class="container">
					<div class="row">
						<div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
							<h3>Our Projects. Support Us</h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="container">
					<div class="row text-center">
						<?php
						$fetch = mysqli_query($con, "SELECT * FROM events ORDER BY created_date LIMIT 3");
						while ($row = mysqli_fetch_assoc($fetch)) {
						?>
							<div class="col-md-4 col-sm-4" style="height: 300px;">
								<div class="services animate-box" style="height: 100%;">
									<span><i class="icon-heart" style="cursor: pointer;"></i></span>
									<h3><?php echo $row['event_name']; ?></h3>
									<p><?php echo $row['event_desc']; ?></p>
								</div>
							</div>
						<?php } ?>
					</div>
				</div>
				<br><br>
				<div class="row">
					<div class="col-md-4 col-md-offset-4 text-center animate-box">
						<a href="events.php" class="btn btn-primary btn-lg">View All</a>
					</div>
				</div>
			</div>

			<!-- END What we do -->


			<div id="fh5co-blog-section" class="fh5co-section-gray">
				<div class="container">
					<div class="row">
						<div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
							<h3>Recent From Blog</h3>
							<!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores, perspiciatis accusamus asperiores sint consequuntur debitis.</p> -->
						</div>
					</div>
				</div>
				<div class="container">
					<div class="row row-bottom-padded-md">
						<?php
						$fetch = mysqli_query($con, "SELECT * FROM blog ORDER BY posted_date DESC");
						while ($row = mysqli_fetch_assoc($fetch)) {
							$blog_id = $row['blog_id'];
							$blog_img = $row['blog_image'];
							$blog_title = $row['blog_title'];
							$blog_content = $row['blog_content'];
							$blog_views = $row['views'];
							$blog_date = $row['posted_date'];
							$blog_date = explode(" ", $blog_date);
							$blog_date = $blog_date[0];
							$blog_comments = mysqli_query($con, "SELECT * FROM blog_comments WHERE blog_id='{$blog_id}'");
							$blog_comments = mysqli_num_rows($blog_comments);
							$href = "blog/?id=$blog_id";
						?>
							<div class="col-lg-4 col-md-4 col-sm-6">
								<div class="fh5co-blog animate-box">
									<a href="<?php echo $href; ?>"><img class="img-responsive" src="admin/images/blogs/<?php echo $blog_img; ?>" alt="blog-image"></a>
									<div class="blog-text">
										<div class="prod-title">
											<h3><a href="<?php echo $href; ?>"><?php echo $blog_title; ?></a></h3>
											<span class="posted_by"><?php echo $blog_date; ?></span>
											<span class="comment"><a href="javascript:void(0)"><?php echo $blog_comments; ?><i class="icon-bubble2"></i></a></span>
											<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
											<p><a href="<?php echo $href; ?>">Learn More...</a></p>
										</div>
									</div>
								</div>
							</div>
						<?php } ?>

					</div>

					<div class="row">
						<div class="col-md-4 col-md-offset-4 text-center animate-box">
							<a href="blog.php" class="btn btn-primary btn-lg">Our Blog</a>
						</div>
					</div>

				</div>
			</div>
			<!-- fh5co-blog-section -->
			<?php include "php/footer.php"; ?>
		</div>
		<!-- END fh5co-page -->

	</div>
	<!-- END fh5co-wrapper -->
	<?php include "php/scripts.php"; ?>
	<?php include "include/whatsapp.php" ?>

</body>

</html>