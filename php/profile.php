<?php
session_start();
$con = mysqli_connect("localhost", "root", "", "Assignment");
    if ($con == false){
        die("ERROR: Could not connect." .mysqli_connect_error($con));
    }
?>

<?php
if(!isset($_SESSION['email'])){
    include 'login.php';

    if(isset($_GET["feedback"])){
        echo $_GET["feedback"];
    }
}
?>

<?php 
if(isset($_SESSION['email'])){ 
    
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>The Shoe Factory - Profile</title>
        <link rel="icon" type="image/png" href="shoefctryicon.ico">
        <link rel="stylesheet" type="text/css" href="profile.css">
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="user.js"></script>
    </head>

    <body>
        <header>
            <?php include 'header.php' ?>
        </header>
        <nav>
            <?php include 'nav.php' ?>
        </nav>
        <h1 style= "padding-left:10px; margin-top:20px;">MY ACCOUNT</h1>
        <div class="userpage">
            <div class="user">
            <a href="profile.php">My Profile</a>
                <a href="cart.php">My Cart</a>
                <a href="logout.php">Log Out</a>
            </div>
            <div class="detail">
                <h1>Personal Details</h1>
                <div class="personal-container">
                    <table>
                        <?php
                        $sql = "SELECT * FROM members WHERE email = '".$_SESSION['email']."' AND password = '".$_SESSION['password']."'";
                        if($result = mysqli_query($con, $sql)){
                            $row = mysqli_fetch_assoc($result);
        
                            ?>
                        <tr>
                            <td>Name</td>
                            <td><?php echo $row['fname'];?> <?php echo $row['lname']?></td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td><?php echo $row['email'];?></td>
                        </tr>
                        <tr>
                            <td>Phone Number</td>
                        <td><?php echo $row['tel']?></td>
                        </tr>
                        <?php
                        }
                        ?>
                    </table>
                </div>
            </div>
        </div>
        <footer>
            <?php include 'footer.php' ?>
        </footer>
    </body>
</html>
<?php
}
?>