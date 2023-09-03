<?php
    
$showAlert = false; 
$showError = false; 
$exists=false;
    
function goback(){
    header("refresh:1; url=index.php");
    exit;
}

if($_SERVER["REQUEST_METHOD"] == "POST") {

    $con = mysqli_connect("localhost", "root", "", "Assignment");
    if ($con == false){
        die("ERROR: Could not connect." .mysqli_connect_error($con));
    }
    
    $name = $_POST["name"];
    $email = $_POST["email"];
    $address = $_POST["address"];
    $city = $_POST["city"];
    $state = $_POST["state"];
    $postcode = $_POST["postcode"];
            
    $sql = "Select * from billing where email='$email'";
    
    $result = mysqli_query($con, $sql);
    
    $num = mysqli_num_rows($result); 

    if($num>0) 
   {
      $exists="This email had already been registered."; 
   } 
    
    $sql = "INSERT INTO billing(name, email, address, city, state, postcode) VALUES ('$name', '$email', '$address','$city', '$state', '$postcode')";
    
    $result = mysqli_query($con, $sql);
    
   if ($result){
    echo ("<script>alert('Payment Successful')</script>");
    goback();
} 
    
} else {
    echo ("<script>alert('Payment Unsuccessful')</script>");
    goback();
} 

    
?>