<?php

include "../admin/php/connect.php";

if (isset($_GET['amount'])) {
    $name = mysqli_real_escape_string($con, $_GET['name']);
    $email = mysqli_real_escape_string($con, $_GET['email']);
    $amount = mysqli_real_escape_string($con, $_GET['amount']);

    $insert = mysqli_query($con, "INSERT INTO donators(donator_name,donator_email,amount) VALUES('{$name}', '{$email}', '{$amount}')");

    if ($insert) {
?>
        <html lang="en">

        <head>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title></title>
            <link href='https://fonts.googleapis.com/css?family=Lato:300,400|Montserrat:700' rel='stylesheet' type='text/css'>
            <style>
                @import url(//cdnjs.cloudflare.com/ajax/libs/normalize/3.0.1/normalize.min.css);
                @import url(//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css);
            </style>
            <link rel="stylesheet" href="https://2-22-4-dot-lead-pages.appspot.com/static/lp918/min/default_thank_you.css">
            <script src="https://2-22-4-dot-lead-pages.appspot.com/static/lp918/min/jquery-1.9.1.min.js"></script>
            <script src="https://2-22-4-dot-lead-pages.appspot.com/static/lp918/min/html5shiv.js"></script>
        </head>

        <body>
            <header class="site-header" id="header">
                <h1 class="site-header__title" data-lead-id="site-header-title">THANK YOU!</h1>
            </header>

            <div class="main-content">
                <i class="fa fa-check main-content__checkmark" id="checkmark"></i>
                <p class="main-content__body" data-lead-id="main-content-body">Thanks for donating to the cause, we really appreciate your kindness and support. We will always honor your kindness and may GOD bless you with unlimitated blessings for now and ever.💖💖💖</p>
            </div>

            <footer class="site-footer" id="footer">
                <p class="site-footer__fineprint" id="fineprint">Copyright ©<?php echo date("Y"); ?> | All Rights Reserved</p>
            </footer>
        </body>
        <script>
            setTimeout(() => {
                window.location.assign('../blog.php');
            }, 6000);
        </script>

        </html>

<?php
    }
}
?>