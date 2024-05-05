<?php
include "include/connect.php";
?>
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <?php include 'include/style.php'; ?>
</head>

<body>
    <!-- ******************** Header Starts Here ******************* -->
    <?php include "include/head.php"; ?>


    <!--  ************************* Page Title Starts Here ************************** -->
    <div class="page-nav no-margin row">
        <div class="container">
            <div class="row">
                <h2>Our Blog</h2>
                <ul>
                    <li> <a href="#"><i class="fas fa-home"></i> Home</a></li>
                    <li><i class="fas fa-angle-double-right"></i> Blogs</li>
                </ul>
            </div>
        </div>
    </div>





    <!--  ************************* Blog Starts Here ************************** -->
    <div class="blog">

        <div class="container">
            <div class="row">

                <?php
                $blog_fetch = mysqli_query($con, "SELECT * FROM blog ORDER BY posted_date DESC limit 2");

                if (mysqli_num_rows($blog_fetch)) {
                    while ($blog = mysqli_fetch_array($blog_fetch)) {
                ?>
                        <div class="col-md-6 col-sm-12">
                            <div class="blog-singe no-margin row">
                                <div class="col-sm-5 blog-img-tab">
                                    <img src="hgl/images/blogs/<?php echo $blog['blog_image'] ?>" alt="Blog_thumbnail" height="200">
                                </div>
                                <div class="col-sm-7 blog-content-tab">
                                    <h2><?php echo $blog['blog_title']; ?></h2>
                                    <p><i class="fas fa-user"><small><?php echo $blog['poster'] ?></small></i> <i class="fas fa-eye"><small>(<?php echo $blog['views']; ?>)</small></i> <i class="fas fa-comments"><small>(
                                                <?php
                                                $blog_id = $blog['blog_id'];
                                                $comments_fetch = mysqli_query($con, "SELECT * FROM blog_comments WHERE blog_id='{$blog_id}'");
                                                echo mysqli_num_rows($comments_fetch);
                                                ?>
                                                )</small></i></p>
                                    <p class="blog-desic"><?php echo substr($blog['blog_content'], 0, 70) ?>....</p>
                                    <a href="blog/?id=<?php echo $blog_id; ?>">Read More <i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                <?php }
                } else {
                    echo "<h3>No Blogs available</h3>";
                } ?>

            </div>
        </div>
    </div>



    <!-- ******************** Footer Starts Here ******************* -->
    <?php include "include/footer.php"; ?>

</body>

<?php include "include/script.php"; ?>

</html>