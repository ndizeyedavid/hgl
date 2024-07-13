<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js"> <!--<![endif]-->

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Blog &mdash; Hope for a good life</title>
	<?php include "php/style.php"; ?>
</head>

<body>
	<div id="fh5co-wrapper">
		<div id="fh5co-page">

			<?php include "php/head.php"; ?>

			<div class="fh5co-hero">
				<div class="fh5co-overlay"></div>
				<div class="fh5co-cover text-center" data-stellar-background-ratio="0.5" style="background-image: url(images/cover_bg_1.jpg);">
					<div class="desc animate-box">
						<h2>Our <strong>Blog &amp; News</strong></h2>
						<span><a class="btn btn-primary btn-lg" href="javascript:void(0);" onclick="display_modal('donate');">Donate Now</a></span>

					</div>
				</div>

			</div>

			<div id="fh5co-blog-section" class="fh5co-section-gray">
				<div class="container">
					<div class="row">
						<div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
							<h3>Read. Learn. Share</h3>
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
							<div class="clearfix visible-md-block"></div>
							<div class="col-lg-4 col-md-4 col-sm-6">
								<div class="fh5co-blog animate-box">
									<a href="<?php echo $href; ?>"><img class="img-responsive" src="admin/images/blogs/<?php echo $blog_img; ?>" alt="blog-image"></a>
									<div class="blog-text">
										<div class="prod-title">
											<h3><a href="<?php echo $href; ?>"><?php echo $blog_title; ?></a></h3>
											<span class="posted_by"><?php echo $blog_date; ?></span>
											<span class="comment"><a href="javascript:void(0)"><?php echo $blog_comments; ?><i class="icon-bubble2"></i></a></span>
											<p><?php echo substr($blog_content, 0, 220); ?></p>
											<p><a href="<?php echo $href; ?>">Learn More...</a></p>
										</div>
									</div>
								</div>
							</div>
						<?php } ?>


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