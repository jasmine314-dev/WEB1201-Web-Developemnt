
<!DOCTYPE html>
<html lang="en">
    <head>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500&family=Roboto:wght@700&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
        <style>
            *{
                margin: 0px;
                padding: 0px;
                box-sizing: border-box;
                color: black;
                text-decoration: none;
            }
            body{
                font-family: 'Oswald', sans-serif;
                background-color: #ffffff;
            }

            h1{
                font-family: 'Roboto', sans-serif;
            }

            .logo{
                width: 250px;
                height: 150px;
                margin: 10px;
            }
            .header{
                background-color: navy;
                height: 160px;
                
            }
            .login{
                background: none;
                color: white;
                font-size: 15px;
                float: right;
                margin-right: 20px;
                text-align: center;
                vertical-align: middle;
                line-height: 150px;
                border: none;
            }
            .login span:hover{
                opacity: 0.7;
            }
            .cart-icon{
                width: 60px;
                float: right;
                background: none;
                color: grey;
                width: 50px;
                margin-top: 50px;
                margin-right: 30px;
                margin-left: 20px;
                border: none;
                font-size: 40px;
            }
            .cart:hover{
                opacity: 0.7;
            }
            .profile{
                width: 43px;
                float: right;
                background: none;
                width: 50px;
                margin-top: 50px;
                margin-right: 25px;
                border: none;
                font-size: 40px;
            }
            .profile:hover{
                opacity: 0.7;
            }

            .topbox{
                text-align: center;
                margin-left: 250px;
            }

            .cart-icon small{
                font-size: 30px;
                color: white;
            }
        </style>
    </head>
    <body>
        <header class="header">
            <div class=topbox>
                <a href="index.php"><img class="logo" src="shoefctry.png"></a>
                <button class="profile">
                    <a href="profile.php"><i class="fas fa-user" style="color: grey;"></i></a>
                </button>
                <button id="cart-item" class="cart-icon">
                    <a href="cart.php"><i class="fas fa-shopping-cart" style="color: grey;"></i>
                    <small>0</small>
                </button>
            </div>
        </header>

        <script src="cart_Boys.js"></script>
    <script src="cart_Girls.js"></script>
    <script src="cart_Kids.js"></script>
    <script src="cart_Men.js"></script>
    <script src="cart_MenLoafers.js"></script>
    <script src="cart_MenSlippers.js"></script>
    <script src="cart_MenSneakers.js"></script>
    <script src="cart_MenSports.js"></script>
    <script src="cart_Women.js"></script>
    <script src="cart_WomenFlats.js"></script>
    <script src="cart_WomenHeels.js"></script>
    <script src="cart_WomenSlippers.js"></script>
    <script src="cart_WomenSneakers.js"></script>
    <script src="cart_WomenSports.js"></script>
    <script src="cart_WomenWedges.js"></script>
    </body>
</html>