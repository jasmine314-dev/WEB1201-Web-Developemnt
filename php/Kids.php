<?php
session_start();
$con = mysqli_connect("localhost", "root", "", "Assignment");
    if ($con == false){
        die("ERROR: Could not connect." .mysqli_connect_error($con));
    }
//include 'cart_action.php';
//include 'cartaction2.php'

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="icon" type="image/png" href="shoefctryicon.ico">
    <link rel="stylesheet" href="products.css"type="text/CSS">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Shoe Factory - Kids</title>
</head>

<body>
    <header>
      <?php include 'header.php' ?>
      <?php include 'nav.php' ?>
    </header>

   
<div>
    <div class="subtitle"><h2>KIDS SECTION</h2></div>
    <div class="directory"><a href="index.php">Home</a> > <a href="Kids.php">Kids</a></div>

    <main>
        <div class="container">
            <div class="product">
                <img class="thumbnail" src="Kids\MANGO Lace-up Cotton Sneakers.png" alt="Mango Lace-up Cotton Sneakers">
                <div class="productinfo">
                    <h3>MANGO LACE-UP COTTON SNEAKERS</h3>
                    <h4>RM239.00</h4>
                    <a class="add-cart " href="#">Add to Cart</a>
                </div>
            </div>

            <div class="product">
                <img class="thumbnail" src= "Kids\MANGO Lace-up Linen Espadrilles.png"alt="MANGO Lace-up Linen Espadrilles">
                <div class="productinfo">
                    <h3>MANGO LACE-UP LINEN ESPADRILLES</h3>
                    <h4>RM 169.00</h4>
                    <a class="add-cart " href="#">Add to Cart</a>
                </div>
            </div>

            <div class="product">
                <img class="thumbnail" src= "Kids\MANGO Leather Straps Sandals.png"alt="Mango Leather Straps Sandals">
                <div class="productinfo">
                    <h3>MANGO LEATHER STRAPS SANDALS FOR BOYS</h3>
                    <h4>RM169.00</h4>
                    <a class="add-cart " href="#">Add to Cart</a>
                </div>
            </div>
    
            <div class="product">
                <img class="thumbnail" src= "Kids\MANGO Leather Straps Sandals Girls.png"alt="Mango Leather Straps Sandals Girls">
                <div class="productinfo">
                    <h3>MANGO LEATHER STRAPS SANDALS FOR GIRLS</h3>
                    <h4>RM169.00</h4>
                    <a class="add-cart " href="#">Add to Cart</a>
                </div>
            </div>

            <div class="product">
                <img class="thumbnail" src="Kids\MANGO Mixed Technical Sneakers.png"alt="Mango Mixed Technical Sneakers">
                <div class="productinfo">
                    <h3>MANGO MIXED TECHNICAL SNEAKERS FOR BOYS</h3>
                    <h4>RM239.00</h4>
                    <a class="add-cart " href="#">Add to Cart</a>
                </div>
            </div>

            <div class="product">
                <img class="thumbnail" src="Kids\MANGO Mixed Technical Sneakers.png"alt="Mango Mixed Technical Sneakers">
                <div class="productinfo">
                    <h3>MANGO MIXED TECHNICAL SNEAKERS FOR GIRLS</h3>
                    <h4>RM239.00</h4>
                    <a class="add-cart " href="#">Add to Cart</a>
                </div>
            </div>

            <div class="product">
                <img class="thumbnail" src="Kids\MANGO Padded Slippers.png" alt="Mango Padded Slippers">
                <div class="productinfo">
                    <h3>MANGO PADDED SLIPPERS</h3>
                    <h4>RM69.90</h4>
                    <a class="add-cart " href="#">Add to Cart</a>
                </div>
            </div>

            <div class="product">
                <img class="thumbnail" src="Kids\MANGO Pearl Buckle Sandals.png" alt="Mango Pearl Buckle Sandal">
                <div class="productinfo">
                    <h3>MANGO PEARL BUCKLE SANDALS</h3>
                    <h4>RM139.00</h4>
                    <a class="add-cart " href="#">Add to Cart</a>
                </div>
            </div>

            <div class="product">
                <img class="thumbnail" src="Kids\MANGO Sneakers with removable 3D Charm.png"alt="Mango Sneakers with removable 3D Charm">
                <div class="productinfo">
                    <h3>MANGO SNEAKERS WITH REMOVABLE 3D CHARM</h3>
                    <h4>RM169.00</h4>
                    <a class="add-cart " href="#">Add to Cart</a>
                </div>
            </div>

            <div class="product">
                <img class="thumbnail" src="Kids\MANGO Track Sole Sneakers.png" alt="Mango Track Sole Sneakers">
                <div class="productinfo">
                    <h3>MANGO TRACK SOLE SNEAKERS</h3>
                    <h4>RM239.00</h4>
                    <a class="add-cart " href="#">Add to Cart</a>
                </div>
            </div>

            <div class="product">
                <img class="thumbnail" src="Kids\MANGO Velcro Fastening Leather Sneakers.png" alt="Mango Velcro Fastening Leather Sneakers">
                <div class="productinfo">
                    <h3>MANGO VELCRO FASTENING LEATHER SNEAKERS</h3>
                    <h4>RM239.00</h4>
                    <a class="add-cart " href="#">Add to Cart</a>
                </div>
            </div>

            <div class="product">
                <img class="thumbnail" src= "Kids\MANGO Velcro Strap Sandals.png"alt="Mango Velcro Strap Sandals">
                <div class="productinfo">
                    <h3>MANGO VELCRO STRAP SANDALS</h3>
                    <h4>RM109.00</h4>
                    <a class="add-cart " href="#">Add to Cart</a>
                </div>
            </div>
        </div>
        <script src="cart_Kids.js"></script>
    </main>
    <footer>
        <?php include 'footer.php' ?>
    </footer>
</body>
</html>