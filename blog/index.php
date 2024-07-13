<?php
include "../include/connect.php";
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> Hope For A Good Life </title>
    <link rel="shortcut icon" href="../assets/images/logo.png" type="image/x-icon">
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
    <link rel="shortcut icon" href="../assets/images/fav.jpg">
    <link rel="stylesheet" href="../assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="../assets/css/all.min.css">
    <link rel="stylesheet" href="../assets/plugins/slider/css/owl.carousel.min.css">
    <link rel="stylesheet" href="../assets/plugins/slider/css/owl.theme.default.css">
    <link rel="stylesheet" type="text/css" href="../assets/css/lightbox.css">
    <link rel="stylesheet" type="text/css" href="../assets/css/style.css" />
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" href="../hgl/icons/bootstrap-icons/font/bootstrap-icons.css">

</head>

<body>
    <header>
        <div class="container-fluid header-top">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 logo-dv">
                        <img src="../assets/images/logo.png" alt="Logo" height="90">
                    </div>
                    <div class="col-md-9 bonto">
                        <ul>
                            <li>
                                <div class="donta-btn">
                                    <p>Please make your</p>
                                    <strong>Dontation</strong>
                                </div>
                            </li>
                            <li>
                                <div class="voltterr-btn">
                                    <p>Time to Becom a</p>
                                    <strong>Volunteer</strong>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- ******************** Nav Starts Here ******************* -->

        <div id="menu-jk" class="headwe-nav container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 nav-div">
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>


                            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="../">Home </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="../about.php">About Us</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link " href="../events.php">Events</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active" href="../blog.php">Blog</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link " href="../contact.php">Contact US</a>
                                    </li>
                                </ul>

                            </div>
                        </nav>
                    </div>

                </div>
            </div>
        </div>
    </header>

    <div id="main-content" class="blog-page">
        <div class="container">
            <div class="row clearfix">

                <!-- blog_preview  -->
                <div class="col-lg-8 col-md-12 left-box">
                    <?php
                    if (isset($_GET['id'])) {
                        $blog_id = $_GET['id'];
                        $view = mysqli_query($con, "UPDATE blog SET views = views + 1 WHERE blog_id ='{$blog_id}'");
                        $blog_fetch = mysqli_query($con, "SELECT * FROM blog WHERE blog_id='$blog_id'");
                        $blog = mysqli_fetch_array($blog_fetch);
                    ?>
                        <div class="card single_post">
                            <div class="body">
                                <div class="img-post">
                                    <img class="d-block img-fluid" style="width: 100%;height: 300px;" src="../hgl/images/blogs/<?php echo $blog['blog_image'] ?>" alt="blog-image">
                                </div>
                                <h3><a href="javascript:void(0)"><?php echo $blog['blog_title']; ?></a></h3>
                                <p><?php echo $blog['blog_content']; ?></p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="header">
                                <h2>Comments
                                    <?php
                                    $comments_fetch = mysqli_query($con, "SELECT * FROM blog_comments WHERE blog_id ='{$blog_id}'");
                                    echo mysqli_num_rows($comments_fetch);
                                    ?>
                                </h2>
                            </div>
                            <div class="body">
                                <ul class="comment-reply list-unstyled">
                                    <?php
                                    if (mysqli_num_rows($comments_fetch) > 0) {
                                        while ($comments = mysqli_fetch_assoc($comments_fetch)) {

                                    ?>
                                            <li class="row clearfix">
                                                <div class="icon-box col-md-2 col-4" style="border: 2px solid rgba(0, 0, 0, 0.2); border-radius: 8px;">
                                                    <h1 style="font-size: 70px; display: flex; justify-content: center; align-items:center;height: 100%;"><?php echo strtoupper(substr($comments['commenter_id'], 0, 1)); ?></h1>
                                                </div>
                                                <div class="text-box col-md-10 col-8 p-l-0 p-r0">
                                                    <h5 class="m-b-0"><?php echo $comments['commenter_id']; ?> </h5>
                                                    <p><?php echo $comments['comment']; ?></p>
                                                    <ul class="list-inline">
                                                        <li><a href="javascript:void(0);">Posted: <i>
                                                                    <?php
                                                                    $comment_date = $comments['comment_date'];
                                                                    $comment_date = explode(" ", $comment_date);
                                                                    echo $comment_date[0];
                                                                    ?>
                                                                </i>
                                                            </a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                    <?php }
                                    } else {
                                        echo "
                                            <p class='h2 text-muted mt-3 mb-5' style='display: flex; align-items: center; justify-content: center; height: 100%;'>No comments</p>
                                            ";
                                    } ?>
                                </ul>
                            </div>
                        </div>
                        <div class="card">
                            <div class="header">
                                <h3>Leave a comment</h3>
                            </div>
                            <div class="body">
                                <div class="comment-form">
                                    <form class="row clearfix" method="POST" action="blog.php">
                                        <input type="hidden" name="blog_id" value="<?php echo $blog['blog_id']; ?>">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Your Name" name="name">
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Email Address" name="email">
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <textarea rows="4" class="form-control no-resize" placeholder="Please type what you want..." name="comment"></textarea>
                                            </div>
                                            <button type="submit" name="submit" class="btn btn-block btn-primary">Post</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    <?php
                    } else {
                        echo "
                            <p class='h2 text-muted' style='display: flex; align-items: center; justify-content: center; height: 100%;'>Select a blog to preview</p>
                            ";
                    } ?>
                </div>
                <div class="col-lg-4 col-md-12 right-box">

                    <!-- Search -->
                    <div class="card">
                        <div class="body search">
                            <div class="input-group m-b-0">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fa fa-search"></i></span>
                                </div>
                                <input type="text" class="form-control" placeholder="Search...">
                            </div>
                        </div>
                    </div>

                    <!-- POSTS -->

                    <div class="card">
                        <div class="header">
                            <h2>Popular Posts</h2>
                        </div>
                        <div class="body widget popular-post">
                            <div class="row">
                                <div class="col-lg-12">
                                    <?php
                                    $blogs_fetch = mysqli_query($con, "SELECT * FROM blog ORDER BY views DESC");

                                    if (mysqli_num_rows($blogs_fetch) > 0) {
                                        while ($blog = mysqli_fetch_array($blogs_fetch)) {
                                    ?>
                                            <div class="single_post">
                                                <p class="m-b-0"><a href="./?id=<?php echo $blog['blog_id'] ?>"> <?php echo $blog['blog_title']; ?></a></p>
                                                <span class="mx-2"><i class="bi bi-calendar-week"></i> <i>
                                                        <?php
                                                        $date = $blog['posted_date'];
                                                        $date = explode(" ", $date);
                                                        echo $date[0];
                                                        ?></i>
                                                </span>
                                                <span class="mx-2"><i class="bi bi-eye-fill"></i> <i>
                                                        <?php echo $blog['views']; ?></i>
                                                </span>
                                                <div class="img-post">
                                                    <a href="./?id=<?php echo $blog['blog_id'] ?>"><img src="../hgl/images/blogs/<?php echo $blog['blog_image']; ?>" alt="Awesome Image" style="width: 100%;height: 200px;border-radius: 8px;"></a>
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

        </div>
    </div>
</body>

</html>