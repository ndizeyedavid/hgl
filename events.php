<?php
include "include/connect.php";
?>
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <?php include "include/style.php"; ?>
</head>

<body>
    <!-- ******************** Header Starts Here ******************* -->
    <?php include "include/head.php"; ?>


    <!--  ************************* Page Title Starts Here ************************** -->
    <div class="page-nav no-margin row">
        <div class="container">
            <div class="row">
                <h2>Our Events</h2>
                <ul>
                    <li> <a href="#"><i class="fas fa-home"></i> Home</a></li>
                    <li><i class="fas fa-angle-double-right"></i> Events</li>
                </ul>
            </div>
        </div>
    </div>





    <!-- ******************** Upcomming Events Starts Here ******************* -->

    <section class="upcomming container-flid">
        <div class="container">
            <div class="session-title row">
                <p>KNOW AND COME TO JOIN OUR</p>
                <h2>UPCOMING & ONGOING EVENTS</h2>
            </div>
            <div class="events-row row">
                <?php
                $fetch_events = mysqli_query($con, "SELECT * FROM events WHERE status='ON GOING' ORDER BY start_date DESC LIMIT 3");

                if (mysqli_num_rows($fetch_events) > 0) {
                    while ($event = mysqli_fetch_assoc($fetch_events)) {
                ?>
                        <div class="col-md-4">
                            <div class="event-card" style="height: 100%;">
                                <img src="hgl/images/events/<?php echo $event['event_thumbnail'] ?>" alt="Event-image" style="height: 300px; width: 100%;">
                                <div class="event-detail">
                                    <h4><?php echo $event['event_name']; ?></h4>
                                    <p><?php echo $event['event_desc']; ?></p>

                                    <h6><?php
                                        $event_date = $event['start_date'];
                                        $date = explode(" ", $event_date);
                                        echo $date[0];
                                        ?></h6>
                                </div>
                                <div class="plac-dat row no-margin">
                                    <div class="col-7 colplac colplacll">
                                        <strong>Status:</strong>
                                        <p><?php echo $event['status']; ?></p>
                                    </div>
                                    <div class="col-5 colplac">
                                        <strong>Budget:</strong>
                                        <p><?php echo $event['budget']; ?>$</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                <?php }
                } else {
                    echo "<h3>No Events in this semester</h3>";
                } ?>

            </div>
        </div>
    </section>




    <!-- ******************** Footer Starts Here ******************* -->
    <?php include "include/footer.php"; ?>

</body>

<?php include "include/script.php"; ?>

</html>