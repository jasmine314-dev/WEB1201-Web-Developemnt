<!DOCTYPE html>
<html lang="en">
    <head>
        <title>The Shoe Factory - Profile</title>
        <link rel="icon" type="image/png" href="shoefctryicon.ico">
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <style>
            .detail{
                width: 60%;
                padding: 50px 35px 50px 0px;
                margin-left: 20%
            }
            .userpage .user .userDetail{
                width: 140px;
                height: 160px;
                margin: 0 auto;
                margin-bottom: 60px;
                text-align: center;
                overflow: none;
            }
            .userpage .user .userDetail img{
              width: 100%;
              height: 140px;
              border: 1px solid #eee;
              border-radius: 50%;
              box-shadow: 0px 0px 8px #888888;  
              object-fit: cover;
            }
            .userpage .user .userDetail h2{
                margin-top: 10px;
                margin-bottom: 5px;
            }
            .userpage .user ul{
                list-style: none;
                padding: 10px;
            }
            .userpage .user ul li{
                margin-bottom: 5px;
            }
            .userpage .user ul li a{
                text-decoration: none;
                text-transform: uppercase;
                border: 1px solid rgba(236, 240, 241, 0.3);
                text-align: left;
                padding: 5px 8px;
                display: block;
            }
            .userpage .user ul li a span{
                float: right;
            }
            .active, .userpage .user ul li a:hover{
                background-color: #324b77;
                color: #bfaa8c;
            }
            .billingcol label{
                margin: 10px 0px;
                display: block;
            }
            .card{
                width:29px;
            }
            .billingrow {
                display: flex;
                flex-wrap: wrap;
                margin: 0 -16px;
            }
            .billingcol {
                flex: 50%;
                padding: 0 16px;
            }
            .update{
                color: #324b77;
                background-color: #bfaa8c;
                padding: 12px;
                width: 100%;
                border: none;
                display: block;
                border-radius: 3px;
                cursor: pointer;
                font-size: 17px;
                margin: 20px 0px;
            }
            .update:hover{
                background-color: #324b77;
                color: #bfaa8c;
            }
            .billinginput{
                height: 35px;
                font-size: 16px;
                border: 1px solid grey;
                border-radius: 3px;
                width: 100%;
            }
        </style>
    </head>

    <body>
        <header>
            <?php include 'header.php' ?>
        </header>
        <nav>
            <?php include 'nav.php' ?>
        </nav>
       
            <div class="detail" >
                <div class="billingrow">
                    <form action="checkout_action.php" method="post">
                        <div class="billingrow">
                            <div class="billingcol">
                                <h1>Billing Address</h1>
                                <label for="name">Full Name</label>
                                <input class="billinginput" type="text" id="name" name="name" placeholder="Full Name" required>
                                <label for="email">Email</label>
                                <input class="billinginput" type="text" id="email" name="email" placeholder="Email" required>
                                <label for="address">Address</label>
                                <input class="billinginput" type="text" id="address" name="address" placeholder="Address" required>
                                <label for="city">City</label>
                                <input class="billinginput" type="text" id="city" name="city" placeholder="City" required>
                    
                                <div class="billingrow">
                                    <div class="billingcol">
                                        <label for="state">State</label>
                                        <input class="billinginput" type="text" id="state" name="state" placeholder="State" required>
                                    </div>
                                    <div class="billingcol">
                                        <label for="postcode">Postcode</label>
                                        <input class="billinginput" type="text" id="postcode" name="postcode" placeholder="postcode" required>
                                    </div>
                                </div>
                            </div>
                    
                            <div class="billingcol">
                                <h1>Payment</h1>
                                <label for="fname">Accepted Cards</label>
                                <div class="cardscontainer">
                                    <img class="card" src="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png" alt="VISA">
                                    <img class="card" src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fblogs-images.forbes.com%2Fsteveolenski%2Ffiles%2F2016%2F07%2FMastercard_new_logo-1200x865.jpg" alt="mastercard">
                                    <img class="card" src="data:image/png;base64,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" alt="FPX">
                                    <img class="card" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JCB_logo.svg/2560px-JCB_logo.svg.png" alt="JCB">
                                </div>
                                <label for="cname">Name on Card</label>
                                <input class="billinginput" type="text" id="cname" name="cardname" placeholder="Name on Card" required>
                                <label for="ccnum">Credit card number</label>
                                <input class="billinginput" type="text" id="ccnum" name="cardnumber" placeholder="Card Number" required>
                                <label for="expmonth">Exp Month</label>
                                <input class="billinginput" type="text" id="expmonth" name="expmonth" placeholder="MM" required>
                                <div class="billingrow">
                                    <div class="billingcol">
                                        <label for="expyear">Exp Year</label>
                                        <input class="billinginput" type="text" id="expyear" name="expyear" placeholder="YY" required>
                                    </div>
                                    <div class="billingcol">
                                        <label for="cvv">CVV</label>
                                        <input  class="billinginput" type="text" id="cvv" name="cvv" placeholder="CVV" required>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="submit" value="PAY" class="update">
                    </form>
                </div>
            </div>
   
        <footer>
            <?php include 'footer.php' ?>
        </footer>
    </body>
</html>