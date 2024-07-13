<?php
sleep(1);
include 'connect.php';
if ($_GET['cont'] == 'intern') {
?>
    <div class="intern">
        <br>
        <h3 class="text-center" style="color: #fff;"><u>Intern</u>ship Application</h3>
        <div class="row">
            <div class="col-sm-6">
                <br>
                First Name:
                <input type="text" class="form-control" name="fname" placeholder="Your first name..." required>
            </div>
            <div class="col-sm-6">
                <br>
                Last Name:
                <input type="text" class="form-control" name="lname" placeholder="Your last name..." required>
            </div>
            <div class="col-sm-12">
                <br>
                E-mail:
                <input type="email" class="form-control" name="email" placeholder="person@example.com" required>
            </div>
            <div class="col-sm-12">
                <br>
                Contact:
                <input type="number" class="form-control" name="phone" placeholder="+250 700000000" required>
            </div>
            <div class="col-sm-12">
                <br>
                CV or Profile Picture:
                <input type="file" class="form-control" name="cv" required>
            </div>
            <div class="col-sm-12">
                <br>
                <input type="submit" class="btn btn-primary" value="Submit" name="intern">
                <br>
                <br>
                <center>
                    <input type="button" class="btn btn-danger" style="width: 300px;" onclick="document.querySelector('.modal-container').style.display='none';" value="Cancel">
                </center>
            </div>
        </div>
    </div>
<?php } else if ($_GET['cont'] == 'volunteer') { ?>

    <div class="intern">
        <br>
        <h3 class="text-center" style="color: #fff;"><u>Volun</u>teer Application</h3>
        <div class="row">
            <div class="col-sm-6">
                <br>
                First Name:
                <input type="text" class="form-control" name="fname" placeholder="Your first name..." required>
            </div>
            <div class="col-sm-6">
                <br>
                Last Name:
                <input type="text" class="form-control" name="lname" placeholder="Your last name..." required>
            </div>
            <div class="col-sm-12">
                <br>
                E-mail:
                <input type="email" class="form-control" name="email" placeholder="person@example.com" required>
            </div>
            <div class="col-sm-12">
                <br>
                Contact:
                <input type="number" class="form-control" name="phone" placeholder="+250 700000000" required>
            </div>
            <div class="col-sm-12">
                <br>
                CV or Profile Picture:
                <input type="file" class="form-control" name="cv" required>
            </div>
            <div class="col-sm-12">
                <span style="position: relative; top: 10px;"><a href="admin/docs/requirements.pdf" target="_blank"><button type="button" class="btn btn-info btn-sm">Requirements</button></a></span>
            </div>
            <div class="col-sm-12">
                <br>
                <input type="submit" class="btn btn-primary" value="Submit" name="volunteer">
                <br>
                <br>
                <center>
                    <input type="button" class="btn btn-danger" style="width: 300px;" onclick="document.querySelector('.modal-container').style.display='none';" value="Cancel">
                </center>
            </div>
        </div>
    </div>

<?php } else if ($_GET['cont'] == 'donate') { ?>
    <div class="intern">
        <br>
        <h3 class="text-center" style="color: #fff;"><u>DON</u>ATION</h3>
        <div class="row">
            <div class="col-sm-6">
                <br>
                Names:
                <input type="text" class="form-control" name="name" placeholder="Donator's Names..." required>
            </div>
            <div class="col-sm-6">
                <br>
                E-mail:
                <input type="email" class="form-control" name="email" placeholder="Donator's Email..." required>
            </div>
            <div class="col-sm-12">
                <br>
                Amount:
                <input type="text" class="form-control" name="amount" id="amount" placeholder="$10" required>
            </div>

            <!-- <div class="col-sm-12"> -->
            <!-- </div> -->

            <div class="col-sm-12">
                <br>
                <button type="submit" class="btn btn-primary form-control" value="Donate" name="donate" onclick="this.innerHTML=`<center><div class='sm-loading'></div></center>`;return confirm(`Are you sure you want to donate ${document.querySelector('#amount').value} to Hope for a good life?`);">Donate</button>
                <br>
                <br>
                <p><i>Notice!</i> By confirming this form you will be redirected to <b>Stripe</b> checkout page to confirm the donation</p>
                <center>
                    <input type="button" class="btn btn-danger" style="width: 300px;" onclick="document.querySelector('.modal-container').style.display='none';" value="Cancel">
                </center>
            </div>
        </div>
    </div>

<?php } ?>