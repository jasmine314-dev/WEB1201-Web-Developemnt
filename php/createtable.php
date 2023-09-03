<?php 
  
    $con = mysqli_connect("localhost", "root", "", "Assignment");
    if ($con == false){
        die("ERROR: Could not connect. " .mysqli_connect_error());
    } 
    
    $sql1 = "CREATE TABLE IF NOT EXISTS members(
            id INT AUTO_INCREMENT,
            fname VARCHAR(100),
            lname VARCHAR(100),
            email VARCHAR(100),
            tel INT(10),
            password VARCHAR(20))";

    if (mysqli_query($con, $sql1)){
        echo "Members table created successfully";
    } else {
        echo "ERROR: Could not able to execute $sql1" .mysqli_error($con);
    }
    

    $con = mysqli_connect("localhost", "root", "", "Assignment");
    if ($con == false){
        die("ERROR: Could not connect. " .mysqli_connect_error());
    } 
    
    $sql2 = "CREATE TABLE IF NOT EXISTS billing(
            id INT AUTO_INCREMENT,
            name VARCHAR(100),
            email VARCHAR(100),
            address VARCHAR(100),
            city VARCHAR(100),
            state VARCHAR(100),
            postcode INT(5)
            )";

    if (mysqli_query($con, $sql2)){
        echo "Members table created successfully";
    } else {
        echo "ERROR: Could not able to execute $sql1" .mysqli_error($con);
    }
    mysqli_close($con);
?>