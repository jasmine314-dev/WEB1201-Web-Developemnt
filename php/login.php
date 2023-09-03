<!DOCTYPE html>
<html lang="en">
    <head>
        <title>
            The Shoe Factory - Log In 
        </title>
        <meta charset="utf-8">
    </head>
    <link rel="icon" type="image/png" href="shoefctryicon.ico">
    <link rel="stylesheet" href="form.css">
    
    <body>
    <header>
      <?php include 'header.php' ?>
    </header>

    <nav>
        <?php include 'nav.php' ?>
    </nav>
        <div class="login-container">
            <h1 class="form__title">Login</h1>
            <form class="form" id="login" action="login_action.php" method="post">
                <div class="form_message form__message--error"></div>
                <div class="user-details2">
                    <div style="width:100%;">
                        Email
                        <input type="text" name="email" class="form__input" autofocus placeholder="Enter your email" required>
                        <div class="form__input-error-message"></div>
                    </div>
                </div>
                <div class="user-details2">
                    <div style="width:100%;">
                        Password
                        <input type="password" name="password" class="form__input" autofocus placeholder="Password" required>
                        <div class="form__input-error-message"></div>
                    </div>
                </div>
                    <button class="form__button" name="login" type="submit">LOGIN</button>
                    <div class="form__section">
                        <p class="form__text">
                            Don't have an account? <a class="form__link" href="signup.php" style="text-decoration:underline;">Register Now!</a>
                        </p>
                    </div>
               
            </form>
        </div>
    </body>
</html>

