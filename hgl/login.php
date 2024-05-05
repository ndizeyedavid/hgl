<!DOCTYPE html>
<html lang="en" class="h-100">

<head>
    <meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="keywords" content="">
	<meta name="author" content="">
	<meta name="robots" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="Fillow : Fillow Saas Admin  Bootstrap 5 Template">
	<meta property="og:title" content="Fillow : Fillow Saas Admin  Bootstrap 5 Template">
	<meta property="og:description" content="Fillow : Fillow Saas Admin  Bootstrap 5 Template">
	<meta property="og:image" content="https://fillow.dexignlab.com/xhtml/social-image.png">
	<meta name="format-detection" content="telephone=no">
	
	<!-- PAGE TITLE HERE -->
	<title>HOPE FOR A GOOD LIFE</title>
	
	<!-- FAVICONS ICON -->
	<link rel="shortcut icon" type="image/png" href="images/ic_logo.png">
    <link href="css/style.css" rel="stylesheet">
    <link rel="stylesheet" href="vendor/toastr/css/toastr.min.css">


</head>

<body class="vh-100">
    <div class="authincation h-100">
        <div class="container h-100">
            <div class="row justify-content-center h-100 align-items-center">
                <div class="col-md-6">
                    <div class="authincation-content">
                        <div class="row no-gutters">
                            <div class="col-xl-12">
                                <div class="auth-form">

                                	<?php  
                                	if (isset($_GET['err'])){
                                		$err = $_GET['err'];
                                	?>

                                	<div class="alert alert-danger">
                                		<h3 class="text-danger">Error!</h3>
                                		<span class="alert-text">
                                			<?php  
                                				if ($err == '1') {
                                					echo "Wrong credentials";
                                				}else{
                                					echo "Access Denied";
                                				}
                                			?>
                                		</span>
                                	</div>

                                	<?php }elseif (isset($_GET['succ'])){ ?>

                                	<div class="alert alert-success">
                                		<h4 class="text-success text-center p-0 m-0">Authenticating <b id="out_email"></b></h4>
                                	</div>

                                	<?php } ?>
									
									<div class="text-center mb-3">
										<a href="javascript:void(0)"><img src="images/ic_logo.png" width="200" alt="Logo"></a>
									</div>
                                    <h4 class="text-center mb-4">Sign in your account</h4>
                                    <form action="php/login.php" method="POST">
                                        <div class="mb-3">
                                            <label class="mb-1"><strong>Email</strong></label>
                                            <input type="email" name="email" id="email" class="form-control" placeholder="Your email address" required>
                                        </div>
                                        <div class="mb-3">
                                            <label class="mb-1"><strong>Password</strong></label>
                                            <input type="password" name="pswd" id="pswd" class="form-control" placeholder="••••••••" required>
                                        </div>
                                        <div class="text-center">
                                            <button type="button" name="login" id="submit_btn" class="btn btn-primary btn-block">
                                            	<div class="spinner-border" id="loading" style="display: none;"></div>
                                            	<span id="btn_txt">Sign In</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!--**********************************
        Scripts
    ***********************************-->
    <!-- Required vendors -->
    <script src="vendor/global/global.min.js"></script>
    <script src="js/custom.min.js"></script>
    <script src="js/dlabnav-init.js"></script>
    <script src="vendor/toastr/js/toastr.min.js"></script>
    <script src="js/plugins-init/toastr-init.js"></script>

    <!-- sign in script -->
    <script>
    	var email_inp, pswd_inp, rem_box, submit_btn, out_email, loading, btn_txt;
    	email_inp = document.getElementById('email');
    	pswd_inp = document.getElementById('pswd');
    	submit_btn = document.getElementById('submit_btn');
    	rem_box = document.getElementById('basic_checkbox_1');
    	out_email = document.getElementById('out_email');
    	loading = document.getElementById('loading');
    	btn_txt = document.getElementById('btn_txt');

    	const validate_form = () =>{
    		if (email_inp.value == '' || pswd_inp.value == '') {
    			toastr.error('Fill out the inputs!!')    			
    		}else{
    			toastr.success('Signing in.....')    			
    			submit_form();
    		}
    	}

		const submit_form = () => {
			btn_txt.style.display = 'none';
    		loading.style.display = '';
    		submit_btn.disabled = true;
			document.forms[0].submit();
    		email_inp.disabled = true;
    		pswd_inp.disabled = true;
    		rem_box.disabled = true;
    	}

    	submit_btn.addEventListener("click", validate_form);
    </script>
</body>
</html>