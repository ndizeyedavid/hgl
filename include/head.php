<header>
    <div class="container-fluid header-top">
        <div class="container">
            <div class="row">
                <div class="col-md-3 logo-dv">
                    <img src="assets/images/logo.png" alt="" height="90">
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
                    <nav class="navbar navbar-expand-lg navbar-light     ">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>


                        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li class="nav-item active">
                                    <a class="nav-link" href="./">Home </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="about.php">About Us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link " href="events.php">Events</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link " href="blog.php">Blog</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link " href="contact.php">Contact US</a>
                                </li>

                            </ul>
                            </ul>

                        </div>
                    </nav>
                </div>
                <div class="col-lg-3 d-none d-lg-block social-div">
                    <ul class="ulright">
                        <?php
                        if (!empty($about['instagram'])) {
                        ?>
                            <a href="<?php echo $about['instagram']; ?>">
                                <li><i class="fab fa-instagram"></i></li>
                            </a>
                        <?php
                        }
                        if (!empty($about['youtube'])) {
                        ?>
                            <a href="<?php echo $about['youtube']; ?>">
                                <li><i class="fab fa-youtube"></i></li>
                            </a>
                        <?php
                        }
                        if (!empty($about['twitter'])) {
                        ?>
                            <a href="<?php echo $about['twitter']; ?>">
                                <li><i class="fab fa-twitter"></i></li>
                            </a>
                        <?php
                        }
                        if (!empty($about['facebook'])) {
                        ?>
                            <a href="<?php echo $about['facebook']; ?>">
                                <li><i class="fab fa-facebook-f"></i></li>
                            </a>
                        <?php
                        }
                        ?>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</header>