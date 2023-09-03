<?php 

    function goback(){
        header("refresh:1; url=profile.php");
        exit;
    }
    //create connection
    $email = $_POST["email"];
    $password = $_POST["password"];

    $con = mysqli_connect("localhost", "root", "", "Assignment");
    $sql = "SELECT * FROM members WHERE email = '$email' AND password = '$password'";
    $run = mysqli_query($con, $sql);
    $row = mysqli_fetch_array($run);
    
    if ($row){
        session_start();
        $_SESSION['email'] = $row['email'];
        $_SESSION['password'] = $row['password'];
        header("Location: profile.php?login=success");
        exit();
        
    } else {
        echo ("<script>alert('Incorrect email or password')</script>");
        goback();
    } 
?>