
<div class="preloader">
    <span class="loader"></span>
</div>
<script>
    document.addEventListener('DOMContentLoaded', boot());
    function boot(){
        document.querySelector('.preloader').classList.add('view');
        document.querySelector('.loader').style.display = 'none';
        document.body.style.overflow = 'auto';
    }
</script>
<footer>
    <div id="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 text-center">
                    <p class="fh5co-social-icons">
                        <?php
                        $fetch = mysqli_query($con, "SELECT * FROM content");
                        $data = mysqli_fetch_assoc($fetch);

                        if ($data['twitter']) {
                        ?>
                            <a href="<?php echo $data['twitter']; ?>"><i class="icon-twitter2"></i></a>
                        <?php }
                        if ($data['facebook']) { ?>
                            <a href="<?php echo $data['facebook']; ?>"><i class="icon-facebook2"></i></a>
                        <?php }
                        if ($data['instagram']) { ?>
                            <a href="<?php echo $data['instagram']; ?>"><i class="icon-instagram"></i></a>
                        <?php }
                        if ($data['youtube']) { ?>
                            <a href="<?php echo $data['youtube']; ?>"><i class="icon-youtube"></i></a>
                        <?php } ?>
                    </p>
                    <p>Copyright &copy; <?php echo date("Y"); ?> &mdash; <a href="./">Hope for a good life</a>. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </div>
</footer>