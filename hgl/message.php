<?php
include "php/connect.php";
session_start();
if ($_SESSION['id']){
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
            <!-- row -->
			<div class="container-fluid">
                <div class="card">
                    <div class="card-header">
                        <p class="card-title">Messages</p>
                    </div>
                    <div class="card-body">
                        <div class="post-details">

                            <?php 
                            $fetch = mysqli_query($con, "SELECT * FROM message");

                            if (mysqli_num_rows($fetch)){
                                while ($row = mysqli_fetch_assoc($fetch)){
                            ?>
                            
                            <div class="card mt-3 p-3" id="msg-<?php echo $row['msg_id']; ?>" style="border: 1px solid rgba(0, 0, 0, 0.4)">
                                <h3 class="mb-2 text-black"><?php echo $row['title']; ?></h3>
                                <ul class="mb-4 post-meta d-flex flex-wrap">
                                    <li class="post-author me-3">By <b style="text-transform: capitalize;"><?php echo $row['msg_name']; ?></b></li>
                                    <li class="post-date me-3"><i class="far fa-calendar-plus me-2"></i><?php  
                                    $msg_date = $row['msg_date'];
                                    $msg_date = explode(" ", $msg_date);
                                    echo $msg_date[0];
                                    ?></li>
                                </ul>
                                <p><?php echo $row['message']; ?></p>
                            </div>
                            <?php }}else{
                                echo "
								<p style='text-align: center;' class='mt-5 mb-5 h3 text-muted'>Empty message inbox</p>
                                
                                ";
                            } ?>
                            <hr>
                            <div class="comment-respond" id="respond">
                                <h4 class="comment-reply-title text-primary mb-3" id="reply-title">Reply </h4>
                                <form class="comment-form" id="commentform" action="php/add_message.php" method="POST">
                                    <div class="row"> 
                                        
                                        <div class="col">
                                            <div class="mb-3">
                                                <label for="email" class="text-black font-w600 form-label">Title <span class="required">*</span></label>
                                                <input type="text" class="form-control" placeholder="Message title" name="msg_title" id="email">
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="mb-3">
                                                <label for="comment" class="text-black font-w600 form-label">Message</label>
                                                <textarea style="height: 100px;" class="form-control" name="msg" placeholder="Your message..." id="comment"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="mb-3">
                                                <input type="submit" value="Post Message" class="submit btn btn-primary" id="submit" name="submit">
                                            </div>
                                        </div>
                                    </div>
                                </form>
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
    <script>
        const url = window.location.href;
        var id = url.split('#');
        id = id[1];
        if (id){
            document.getElementById(id).style.borderColor = "blue";
            document.getElementById(id).style.boxShadow = "0 0 10px rgba(0, 0, 255, 0.3)";
        }
    </script>
</body>
</html>
<?php
}else{
	header("location: login.php");
}

?>