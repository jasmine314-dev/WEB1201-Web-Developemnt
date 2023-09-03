<?php 
    $servername = "localhost";
    $username = "root";
    $password = "";

    //create connection
    $con = mysqli_connect($servername, $username, $password);
    if ($con == false){
        die("ERROR: Could not connect. " .mysqli_connect_error());
    } //else {
       // echo ("Connection successful");
    //}
    $sql = "CREATE DATABASE Assignment";
    if (mysqli_query($con, $sql)){
        echo "Database created successfully";
    } else {
        echo "ERROR: Could not able to execute $sql" .mysqli_error($con);
    }
    
    mysqli_close($con);
?>