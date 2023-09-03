<?php include "signup_action.php" ?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>
            The Shoe Factory - Registration 
        </title>
        <meta charset="utf-8">
    </head>
    <link rel="icon" type="image/png" href="shoefctryicon.ico">
    <link rel="stylesheet" href="form.css">
    <script src="login.js"></script>
    <body>
    <header>
      <?php include 'header.php' ?>
    </header>

    <nav>
        <?php include 'nav.php' ?>
    </nav>

    <div class="message-box">
    
    </div>
        <div class="signup-container">
            <h1 class="form__title">Create Account</h1>
            <form id="createAccount" action="signup.php" method="post">
        <?php
        if($showAlert) {
            echo '  <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Success!</strong> Your account is now created and you can login. 
                        Click <a href="login.php" style="text-decoration:underline;">here</a> to login
                    </div> '; 
         }
    
        if($showError) {
            echo '  <div class="alert alert-danger alert-dismissible fade show" role="alert">'. $showError.'
                    </div> '; 
        }
        
        if($exists) {
            echo '  <div class="alert alert-danger alert-dismissible fade show" role="alert">'. $exists.'
            Click <a href="login.php" style="text-decoration:underline;">here</a> to login
                    </div> '; 
        }
   
        ?>
                <div class="form__message form__message--error"></div>
                <div class="user-details">
                    <div class="form__input-group">
                       First Name
                        <input type="text" name="fname" id="fname" class="form__input" autofocus placeholder="Enter your first name" required>
                        <div class="form__input-error-message"></div>
                    </div>

                    <div class="form__input-group">
                        Last name
                        <input type="text" name="lname" id="lname" class="form__input" autofocus placeholder="Enter your last name" required>
                        <div class="form__input-error-message"></div>
                    </div>

                    <div class="form__input-group">
                     Email Address
                        <input type="text" name="email" id="email" class="form__input" autofocus placeholder="Enter your email address" required>
                        <div class="form__input-error-message"></div>
                    </div>

                    <div class="form__input-group">
                       Phone Number
                        <input type="text" name="tel" id="tel"  class="form__input" autofocus placeholder="Enter your phone number" required>
                        <div class="form__input-error-message"></div>
                    </div>

                    <div class="form__input-group">
                        Password
                        <input type="password" name="password" id="password" class="form__input" autofocus placeholder="Enter your password" required>
                        <div class="form__input-error-message"></div>
                    </div>
                    <div class="form__input-group">
                        Confirm Password
                        <input type="password" name="confirm_password" id="confirm_password" class="form__input" autofocus placeholder="Confirm your password" required>
                        <div class="form__input-error-message"></div>
                    </div>
                    <button class="form__button" type="submit">REGISTER</button>

                    <div class="form__section">
                        <p class="form__text">
                            Already have an account?<a class="form__link" href="profile.php"> Sign in</a>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    </body>
</html>
