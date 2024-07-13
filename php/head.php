<?php
include "admin/php/connect.php";
?>
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

	form {
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


	/* preloader */
	body {
		overflow: hidden;
	}

	.preloader {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgb(255, 255, 255, 0.7);
		backdrop-filter: blur(10px);
		z-index: 100000000;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}

	.view {
		animation: dis .5s linear;
		/* ba */
		background: rgb(255, 255, 255, 0);
		backdrop-filter: blur(0px);
		z-index: -100000000;
		/* z-index: 0; */
	}

	.view .loader {
		display: none;
	}

	@keyframes dis {
		0% {
			background: rgb(255, 255, 255, 0.7);
			backdrop-filter: blur(10px);
			z-index: 100000000;
		}

		100% {
			background: rgb(255, 255, 255, 0);
			backdrop-filter: blur(0px);
			z-index: 0;
		}
	}

	/* loader */
	.preloader .loader {
		display: block;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		position: relative;
		animation: rotate 1s linear infinite
	}

	.preloader .loader::before {
		content: "";
		box-sizing: border-box;
		position: absolute;
		inset: 0px;
		border-radius: 50%;
		border: 5px solid #ff5722;
		animation: prixClipFix 2s linear infinite;
	}

	@keyframes rotate {
		100% {
			transform: rotate(360deg)
		}
	}

	@keyframes prixClipFix {
		0% {
			clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)
		}

		25% {
			clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)
		}

		50% {
			clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)
		}

		75% {
			clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)
		}

		100% {
			clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)
		}

	}

	.my_logo {
		position: absolute;
		top: -50px;
		left: -150px;
		z-index: 10000;
		width: 120px;
		height: 120px;
		object-fit: contain;
	}

	.my_logo_resp {
		display: none;
	}

	#google_translate_element {
		background-color: #ff5722;
		width: 170px;
		height: 46px;
		z-index: 100000;
		position: fixed;
		top: 0;
		right: 10px;
		border-radius: 0 0 10px 10px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media only screen and (max-width: 650px) {
		.my_logo {
			display: none;
		}

		.my_logo_resp {
			display: block;
			/* position: unset; */
			top: -53px;
			left: 33%;
			/* background-color: red; */
			height: 70px;
			/* transform: translateX(70%); */
		}

		.nav-header {
			/* background-color: red; */
			padding: 20px;
		}

		.my_txt {
			display: none;
		}

		#google_translate_element {
			left: -10px;
			top: -10px;
			/* width: fit-content; */
			scale: 0.9;
			/* background: none; */
		}
	}
</style>
<div id="google_translate_element"></div>
<script type="text/javascript">
	function googleTranslateElementInit() {
		new google.translate.TranslateElement({
			pageLanguage: 'en',
			layout: google.translate.TranslateElement.InlineLayout.SIMPLE
		}, 'google_translate_element');
	}
</script>
<script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

<div class="modal-container" style="display: none;">
	<div class="modal">
		<form method="POST" action="php/apply.php" class="form-container" enctype="multipart/form-data">
		</form>
	</div>
</div>


<div class="header-top">
	<div class="container">
		<div class="row">
			<div class="col-md-6 col-sm-6 text-left fh5co-link">
				<a href="javascript:void(0);" onclick="document.querySelector('#donate').click();">Donate</a>
				<a href="javascript:void(0);" onclick="document.querySelector('#apply').click();">Apply</a>
				<a href="contact.php">Contact</a>
			</div>
			<div class="col-md-6 col-sm-6 text-right fh5co-social">
				<?php
				$fetch = mysqli_query($con, "SELECT * FROM content");
				$data = mysqli_fetch_assoc($fetch);

				if ($data['twitter']) {
				?>
					<a class="grow" href="<?php echo $data['twitter']; ?>"><i class="icon-twitter2"></i></a>
				<?php }
				if ($data['facebook']) { ?>
					<a class="grow" href="<?php echo $data['facebook']; ?>"><i class="icon-facebook2"></i></a>
				<?php }
				if ($data['instagram']) { ?>
					<a class="grow" href="<?php echo $data['instagram']; ?>"><i class="icon-instagram"></i></a>
				<?php }
				if ($data['youtube']) { ?>
					<a class="grow" href="<?php echo $data['youtube']; ?>"><i class="icon-youtube"></i></a>
				<?php } ?>

			</div>
		</div>
	</div>
</div>
<header id="fh5co-header-section" class="sticky-banner">
	<div class="container">
		<div class="nav-header">
			<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle dark"><i></i></a>

			<h1 id="fh5co-logo"><a href="./">
					<img src="admin/images/ic_logo.png" class="my_logo">
					<img src="admin/images/logo.png" class="my_logo my_logo_resp">
					<span class="my_txt">Hope for a good life</span></a>
			</h1>
			<!-- START #fh5co-menu-wrap -->
			<nav id="fh5co-menu-wrap" role="navigation">
				<ul class="sf-menu" id="fh5co-primary-menu">
					<li>
						<a href="index.php" class="get-link">Home</a>
					</li>
					<li><a href="about.php" class="get-link">About</a></li>
					<li>
						<a href="#" class="fh5co-sub-ddown">Join us</a>
						<ul class="fh5co-sub-menu">
							<li><a href="javascript:void(0)" class="get-link" onclick="display_modal('intern');">Internship</a></li>
							<li><a href="javascript:void(0)" id="apply" class="get-link" onclick="display_modal('volunteer');">Volunteer</a></li>
						</ul>
					</li>
					<li>
						<a href="#" class="fh5co-sub-ddown">Programs</a>
						<ul class="fh5co-sub-menu">
							<?php
							$fetch = mysqli_query($con, "SELECT * FROM events LIMIT 4");
							$count = 0;
							while ($row = mysqli_fetch_array($fetch)) {
							?>
								<li><a href="program.php?id=<?php echo $row['id']; ?>" class="get-link">Program <?php echo ++$count; ?></a></li>
							<?php } ?>
							<li><a href="events.php" class="get-link">See all</a></li>
						</ul>
					</li>
					<li>
						<a href="#" class="fh5co-sub-ddown">Publications</a>
						<ul class="fh5co-sub-menu">
							<li><a href="announcements.php" class="get-link">Announcements</a></li>
							<li><a href="blog.php" class="get-link">News</a></li>
						</ul>
					</li>
					<li>
						<a href="#" class="fh5co-sub-ddown">Impact & Report</a>
						<ul class="fh5co-sub-menu">
							<li><a href="success.php" class="get-link">Success Stories</a></li>
							<li><a href="report.php" class="get-link">Report</a></li>
						</ul>
					</li>
					<li><a href="contact.php" class="get-link">Contact</a></li>
				</ul>
			</nav>
		</div>
	</div>
</header>


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