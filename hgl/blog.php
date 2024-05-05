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
				<div class="container-fluid">
					<?php if (isset($_GET['succ'])) { ?>
						<div class="alert alert-success">
							<div class="alert-body" style="font-size: 20px; text-align: center;">Blog affected successfully</div>
						</div>
					<?php } else if (isset($_GET['err'])) { ?>
						<div class="alert alert-danger">
							<div class="alert-body" style="font-size: 20px; text-align: center;">An error occured!<br><span style="font-size: 12px;">Please try again</span></div>
						</div>
					<?php } ?>
					<!-- row -->

					<div class="row">
						<div class="col-xl-4">
							<div class="row">
								<div class="col-xl-12">
									<div class="card">
										<div class="card-body">
											<div class="profile-statistics">
												<div class="text-center">
													<h2 class="mb-3"><u>Blogs Analytics</u></h2>
													<div class="row">
														<div class="col">
															<h3 class="m-b-0">
																<?php
																$posts = mysqli_query($con, "SELECT * FROM blog");
																echo mysqli_num_rows($posts);
																?>
															</h3><span>Posts</span>
														</div>
														<div class="col">
															<h3 class="m-b-0">
																<?php
																$views = mysqli_query($con, "SELECT SUM(views) FROM blog");
																$views = mysqli_fetch_assoc($views);
																echo $views['SUM(views)'];
																?>
															</h3><span>Views</span>
														</div>
														<div class="col">
															<h3 class="m-b-0">
																<?php
																$comments = mysqli_query($con, "SELECT * FROM blog_comments");
																echo mysqli_num_rows($comments);
																?>
															</h3><span>Comments</span>
														</div>
													</div>
													<div class="mt-4">
														<a href="new_blog.php" class="btn btn-primary mb-1 me-1"> + New Blog</a>
														<a href="blogs_table.php" class="btn btn-danger mb-1">Delete Blogs</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="col-xl-12">
									<div class="card">
										<div class="card-body">
											<div class="profile-news">
												<h5 class="text-primary d-inline">Blogs</h5>
												<?php
												$blogs_fetch = mysqli_query($con, "SELECT * FROM blog");

												if (mysqli_num_rows($blogs_fetch) > 0) {
													while ($blog = mysqli_fetch_array($blogs_fetch)) {
												?>
														<div class="media pt-3 pb-3">
															<img src="images/blogs/<?php echo $blog['blog_image']; ?>" alt="Blog Image" class="me-3 rounded" width="75">
															<div class="media-body">
																<h5 class="m-b-5"><a href="blog.php?id=<?php echo $blog['blog_id']; ?>" class="text-black"><?php echo $blog['blog_title']; ?></a></h5>
																<p class="mb-0"><?php echo substr($blog['blog_content'], 0, 29); ?>...</p>
															</div>
														</div>
												<?php }
												} else {
													echo "
													<p style='text-align:center' class='mt-5 mb-5 h4 text-muted'>No Blogs created</p>
													";
												} ?>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-8">
							<div class="card">
								<div class="card-body">
									<?php
									if (isset($_GET['id'])) {
										$blog_id = $_GET['id'];
										$blog_fetch = mysqli_query($con, "SELECT * FROM blog WHERE blog_id='$blog_id'");
										$blog = mysqli_fetch_array($blog_fetch);
									?>
										<div class="post-details">
											<h3 class="mb-2 text-black"><?php echo $blog['blog_title']; ?></h3>
											<ul class="mb-4 post-meta d-flex flex-wrap">
												<li class="post-author me-3 text-capitalize">By <?php echo $blog['poster']; ?></li>
												<li class="post-date me-3"><i class="far fa-calendar-plus me-2"></i>
													<?php
													$date = $blog['posted_date'];
													$date = explode(" ", $date);
													echo $date[0];
													?>
												</li>
												<li class="post-comment"><i class="far fa-comment me-2"></i>
													<?php
													$blog_id = $blog['blog_id'];
													$comments_fetch = mysqli_query($con, "SELECT * FROM blog_comments WHERE blog_id='$blog_id'");
													echo mysqli_num_rows($comments_fetch);
													?>
												</li>
												<li class="post-comment mx-2"><i class="far fa-eye me-2"></i>
													<?php
													echo $blog['views'];
													?>
												</li>
											</ul>
											<img src="images/blogs/<?php echo $blog['blog_image']; ?>" alt="blog-image" class="img-fluid mb-3 w-100 rounded" style="width: 100%; height: 380px;">
											<article>
												<?php echo $blog['blog_content']; ?>
											</article>
											<div class="profile-skills mt-5 mb-5">
												<h4 class="text-primary mb-2">Tags</h4>
												<?php
												$tags = explode(" ", $blog['tags']);
												foreach ($tags as $tag) {
												?>
													<a href="javascript:void();;" class="btn btn-primary light btn-xs mb-1"><?php echo $tag ?></a>
												<?php } ?>

											</div>
											<div class="comment-respond" id="respond">
												<h4 class="text-primary mb-2">Comments</h4>
												<div class="comments">
													<?php
													if (mysqli_num_rows($comments_fetch) > 0) {
														while ($comments = mysqli_fetch_assoc($comments_fetch)) {

													?>
															<div class="card mt-3 p-3" id="cm-<?php echo $comments['comment_id'] ?>" style="border: 1px solid rgba(0, 0, 0, 0.4)">
																<h3 class="mb-2 text-black">
																	<?php
																	$commentor_id = $comments['commenter_id'];
																	if (is_numeric($commentor_id)) {
																		$commentor_fetch = mysqli_query($con, "SELECT  FROM users WHERE user_id='$commentor_id'");
																		$commentor_fetch = mysqli_fetch_assoc($commentor_fetch);
																		echo $commentor_fetch['username'];
																	} else {
																		echo $commentor_id;
																	}
																	?></h3>
																<ul class="mb-4 post-meta d-flex flex-wrap">
																	<li class="post-date me-3"><i class="far fa-calendar-plus me-2"></i>
																		<?php
																		$comment_date = $comments['comment_date'];
																		$comment_date = explode(" ", $comment_date);
																		echo $comment_date[0];
																		?></li>
																</ul>
																<p><?php echo $comments['comment']; ?></p>
															</div>
													<?php }
													} else {
														echo "
                                                        <p class='h2 text-muted' style='display: flex; align-items: center; justify-content: center; height: 100%;'>No comments</p>
                                                        ";
													} ?>
												</div>
												<hr>
												<h4 class="comment-reply-title text-primary mb-3" id="reply-title">Leave a Reply </h4>
												<form class="comment-form" id="commentform" action="php/comment.php" method="POST">
													<input type="hidden" name="blog_id" value="<?php echo $blog['blog_id']; ?>">
													<div class="row">
														<div class="col-lg-12">
															<div class="mb-3">
																<label for="comment" class="text-black font-w600 form-label">Comment</label>
																<textarea rows="8" class="form-control" name="comment" placeholder="Comment" id="comment"></textarea>
															</div>
														</div>
														<div class="col-lg-12">
															<div class="mb-3">
																<input type="submit" value="Post Comment" class="submit btn btn-primary" id="submit" name="submit">
															</div>
														</div>
													</div>
												</form>
											</div>
										</div>
									<?php } else {
										echo "
										<p class='h2 text-muted' style='display: flex; align-items: center; justify-content: center; height: 100%;'>Select a blog to view</p>
										";
									} ?>
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