<?php
    
$showAlert = false; 
$showError = false; 
$exists=false;
    
if($_SERVER["REQUEST_METHOD"] == "POST") {

    $con = mysqli_connect("localhost", "root", "", "Assignment");
    if ($con == false){
        die("ERROR: Could not connect." .mysqli_connect_error($con));
    }
    
    $fname = $_POST["fname"];
    $lname = $_POST["lname"];
    $email = $_POST["email"];
    $tel = $_POST["tel"];
    $password = $_POST["password"];
    $confirm = $_POST["confirm_password"];
            
    $sql = "Select * from members where email='$email'";
    
    $result = mysqli_query($con, $sql);
    
    $num = mysqli_num_rows($result); 
    
    if($num == 0) {
        if(($password == $confirm) && $exists==false) {
    
            $sql = "INSERT INTO members(fname, lname, email, tel, password) VALUES ('$fname','$lname','$email', '$tel','$password')";
    
            $result = mysqli_query($con, $sql);
    
            if ($result) {
                $showAlert = true; 
            }
        } 
        else { 
            $showError = "Passwords do not match"; 
        }      
    }
    
   if($num>0) 
   {
      $exists="This email had already been registered."; 
   } 
    
} 
    
?>