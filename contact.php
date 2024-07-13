<?php include "admin/php/connect.php"; ?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js"> <!--<![endif]-->

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Contact &mdash; Hope for a good life </title>
	<?php include "php/style.php"; ?>
</head>

<body>
	<style>
		.modal-container {
			/* display: none; */
			position: absolute;
			background-color: rgba(0, 0, 0, 0.6);
			/* backdrop-filter: blur(1px); */
			width: 100%;
			height: 100%;
			z-index: 10000;
			overflow-y: auto;
		}

		.modal {
			display: flex;
			justify-content: center;
			align-items: center;
			color: #fff;
			width: 100%;

		}

		.vis {
			animation: look 1s ease-in-out;
		}

		@keyframes look {
			0% {
				height: 0%;
				opacity: 0.2;
			}

			100% {
				height: 100%;
				opacity: 1;
			}
		}

		.modal form {
			width: 800px;
			background: #3c3c3c;
			padding: 15px;
			border-radius: 8px;
			/* height: 100%; */
		}

		.loading {
			width: 60px;
			height: 60px;
			border: 6px solid #ff5722;
			border-radius: 100%;
			border-bottom-color: #3c3c3c;
			margin: 50px 0;
			animation: load .8s linear infinite;
		}

		.sm-loading {
			width: 20px;
			height: 20px;
			border: 3px solid #ff5722;
			border-radius: 100%;
			border-bottom-color: #3c3c3c;
			animation: load .3s linear infinite;
		}

		@keyframes load {
			0% {
				rotate: 0deg;
			}

			100% {
				rotate: 360deg;
			}
		}

		.modal form input {
			width: 100%;
		}
	</style>

	<div class="modal-container" style="display: none;">
		<div class="modal">
			<form method="POST" action="php/apply.php" class="form-container" enctype="multipart/form-data">
			</form>
		</div>
	</div>

	<div id="fh5co-wrapper">
		<div id="fh5co-page">

			<div class="header-top">
				<div class="container">
					<div class="row">
						<div class="col-md-6 col-sm-6 text-left fh5co-link">
							<a href="#">Donate</a>
							<a href="#">Apply</a>
							<a href="contact.php">Contact</a>
						</div>
						<div class="col-md-6 col-sm-6 text-right fh5co-social">
							<a href="#" class="grow"><i class="icon-facebook2"></i></a>
							<a href="#" class="grow"><i class="icon-twitter3"></i></a>
							<a href="#" class="grow"><i class="icon-instagram2"></i></a>
						</div>
					</div>
				</div>
			</div>
			<header id="fh5co-header-section" class="sticky-banner">
				<div class="container">
					<div class="nav-header">
						<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle dark"><i></i></a>
						<h1 id="fh5co-logo"><a href="index.html">Hope for a good life</a></h1>
						<!-- START #fh5co-menu-wrap -->
						<nav id="fh5co-menu-wrap" role="navigation">
							<ul class="sf-menu" id="fh5co-primary-menu">
								<li>
									<a href="index.php" class="get-link">Home</a>
								</li>
								<li>
									<a href="#" class="fh5co-sub-ddown">Join us</a>
									<ul class="fh5co-sub-menu">
										<li><a href="javascript:void(0)" class="get-link" onclick="display_modal('intern');">Internship</a></li>
										<li><a href="javascript:void(0)" class="get-link" onclick="display_modal('volunteer');">Volunteer</a></li>
									</ul>
								</li>
								<li>
									<a href="#" class="fh5co-sub-ddown">Beneficiaries</a>
									<ul class="fh5co-sub-menu">
										<?php
										$fetch = mysqli_query($con, "SELECT * FROM events LIMIT 4");
										while ($row = mysqli_fetch_array($fetch)) {
										?>
											<li><a href="#" class="get-link"><?php echo $row['event_name']; ?></a></li>
										<?php } ?>
										<li><a href="events.php" class="get-link">See all</a></li>
									</ul>
								</li>
								<li><a href="about.php" class="get-link">About</a></li>
								<li><a href="blog.php" class="get-link">Publication</a></li>
								<li><a href="contact.php" class="get-link">Contact</a></li>
							</ul>
						</nav>
					</div>
				</div>
			</header>

			<div class="fh5co-hero">
				<div class="fh5co-overlay"></div>
				<div class="fh5co-cover text-center" data-stellar-background-ratio="0.5" style="background-image: url(images/cover_bg_2.jpg);">
					<div class="desc animate-box">
						<h2><strong>Contact</strong> Us</h2>
						<span><a class="btn btn-primary btn-lg" href="javascript:void(0)" onclick="display_modal('donate');">Donate Now</a></span>

					</div>
				</div>

			</div>

			<div id="fh5co-contact" class="animate-box">
				<div class="container">
					<form action="php/contact.php" method="POST">
						<div class="row">
							<div class="col-md-6">
								<h3 class="section-title">Where to find us</h3>
								<p>Feel free and never hesitate to find us here👇.</p>
								<div class="map" style="width: 100%; height: 300px; background: #f4f4f4; border-radius: 10px">
									<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15947.451113622434!2d30.134982989636907!3d-2.205496872460491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c35610256ea4d1%3A0xf682d61620994c6e!2sNyamata!5e0!3m2!1sen!2srw!4v1720592386900!5m2!1sen!2srw" style="width: 100%; height: 100%; border-radius: 10px; border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
								</div>

								<?php
								$fetch = mysqli_query($con, "SELECT * FROM content");
								$data = mysqli_fetch_assoc($fetch);

								$address = $data['address'];
								$phone = $data['phone'];
								$email = $data['email'];
								?>

								<ul class="contact-info">
									<li><i class="icon-location-pin"></i>Rwanda, Eastern province, Bugesera, Nyamata</li>
									<li><i class="icon-phone2"></i><?php echo $phone; ?></li>
									<li><i class="icon-mail"></i><a href="<?php echo $email; ?>"><?php echo $email; ?></a></li>
								</ul>
							</div>
							<div class="col-md-6">
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<input type="text" class="form-control" placeholder="Name" name="name" required>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<input type="text" class="form-control" placeholder="Email" name="email" required>
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<textarea class="form-control" id="" cols="30" rows="7" placeholder="Message" name="message"></textarea>
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<input type="submit" value="Send Message" name="submit" class="btn btn-primary">
										</div>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>


			<script>
				let current_page = document.location.href;
				let modal_container = document.querySelector('.modal-container');
				let modal_content = document.querySelector('.form-container');
				let modal = document.querySelector('.modal');


				const links = document.querySelectorAll('.get-link');
				links.forEach(link => {

					if (link.href == current_page) {
						links.forEach(link => {
							link.parentElement.classList.remove('active');
						});
						link.parentElement.classList.add('active');
					}
				});

				// modal box
				const display_modal = (content) => {
					modal_container.style.display = "block";
					modal.classList.remove('vis');
					modal_content.innerHTML = "<center><div class='loading'></div></center>";

					const xhttp = new XMLHttpRequest();
					xhttp.onload = () => {
						modal.classList.add('vis');
						const res = xhttp.response;
						modal_content.innerHTML = res;
						// console.log(res);
					};
					xhttp.open('GET', `php/forms.php?cont=${content}`, true);
					xhttp.send();
				};
			</script>
			<?php include "php/footer.php"; ?>

		</div>
		<!-- END fh5co-page -->

	</div>
	<!-- END fh5co-wrapper -->

	<!-- jQuery -->


	<script src="js/jquery.min.js"></script>
	<!-- jQuery Easing -->
	<script src="js/jquery.easing.1.3.js"></script>
	<!-- Bootstrap -->
	<script src="js/bootstrap.min.js"></script>
	<!-- Waypoints -->
	<script src="js/jquery.waypoints.min.js"></script>
	<script src="js/sticky.js"></script>

	<!-- Stellar -->
	<script src="js/jquery.stellar.min.js"></script>
	<!-- Superfish -->
	<script src="js/hoverIntent.js"></script>
	<script src="js/superfish.js"></script>

	<!-- Google Map -->
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCefOgb1ZWqYtj7raVSmN4PL2WkTrc-KyA&sensor=false"></script>
	<script src="js/google_map.js"></script>

	<!-- Main JS -->
	<script src="js/main.js"></script>

</body>

</html>