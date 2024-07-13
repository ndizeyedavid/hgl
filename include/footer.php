<?php
include "include/connect.php";
// $fetch_about = mysqli_query($con, "SELECT * FROM content");
// $about = mysqli_fetch_assoc($fetch_about);

?>
<footer class="container-fluid footer-cont">
    <div class="container">
        <div class="footer-top row">
            <div class="col-md-4 foot-logo">
                <h2>Hope for a good life</h2>
            </div>
            <div class="col-md-8 foot-addr">
                <p><?php echo $about['motto']; ?></p>
                <ul>
                    <li><i class="fas fa-map-marker-alt"></i> <?php echo $about['address']; ?> </li>
                    <li><i class="fas fa-mobile-alt"></i> <?php echo $about['phone']; ?> </li>
                    <li><i class="far fa-envelope"></i> <?php echo $about['email']; ?> </li>
                </ul>
            </div>
        </div>
        <div class="foot-botom row">
            <div class="col-md-3">
                <div class="fotter-coo">
                    <h5>IMPORTANT LINKS</h5>
                    <ul>
                        <a href="about.php" class="text-light">
                            <li><i class="fas fa-caret-right"></i> ABOUT US</li>
                        </a>
                        <a href="events.php" class="text-light">
                            <li><i class="fas fa-caret-right"></i> CAUSES</li>
                        </a>

                    </ul>
                </div>

            </div>
            <div class="col-md-4">
                <div class="fotter-coo">
                    <ul class="mt-4">
                        <a href="contact.php" class="text-light">
                            <li><i class="fas fa-caret-right"></i> CONTACT US</li>
                        </a>
                        <a href="blog.php" class="text-light">
                            <li><i class="fas fa-caret-right"></i> READ BLOG</li>
                        </a>
                    </ul>
                </div>
            </div>
            <div class="col-md-5">
                <div class="fotter-coo">
                    <h5>PHOTO GALLERY</h5>
                    <div class="gallery-row row">
                        <?php
                        $gallery_fetch = mysqli_query($con, "SELECT * FROM gallery ORDER BY added_date DESC LIMIT 6");
                        if (mysqli_num_rows($gallery_fetch) > 0) {
                            $i = 0;
                            while ($gallery = mysqli_fetch_array($gallery_fetch)) {
                        ?>
                                <div class="col-md-4 col-6 gall-col">
                                    <a href="hgl/images/gallery/<?php echo $gallery['image'] ?>" data-lightbox="models" data-title="Caption <?php echo ++$i; ?>">
                                        <img src="hgl/images/gallery/<?php echo $gallery['image'] ?>" alt="<?php echo $gallery['image_description']; ?>">
                                    </a>
                                </div>
                        <?php }
                        } else {
                            echo "
                                <p style='text-align: center;' class='mt-3 p-5 mb-5 h3 text-muted'>No images in the gallery</p>
                            ";
                        } ?>
                    </div>
                </div>

            </div>
        </div>
    </div>
</footer>

<div class="copy">
    <div class="container">
        <a href="https://www.smarteyeapps.com/">2024 &copy; All Rights Reserved | Designed and Developed by Arsène</a>

        <span>
            <?php
            if (!empty($about['instagram'])) {
            ?>
                <a href="<?php echo $about['instagram']; ?>"><i class="fab fa-instagram"></i></a>
            <?php
            }
            if (!empty($about['youtube'])) {
            ?>
                <a href="<?php echo $about['youtube']; ?>"><i class="fab fa-youtube"></i></a>
            <?php
            }
            if (!empty($about['twitter'])) {
            ?>
                <a href="<?php echo $about['twitter']; ?>"><i class="fab fa-twitter"></i></a>
            <?php
            }
            if (!empty($about['facebook'])) {
            ?>
                <a href="<?php echo $about['facebook']; ?>"><i class="fab fa-facebook-f"></i></a>
            <?php
            }
            ?>
        </span>
    </div>

</div>