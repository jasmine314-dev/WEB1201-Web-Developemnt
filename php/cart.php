<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="icon" type="image/png" href="shoefctryicon.ico">
    <link rel="stylesheet" href="cart.css"type="text/CSS">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Shoe Factory - Shopping Cart</title>
</head>

<body>
    <header>
      <?php include 'header.php' ?>
      <?php include 'nav.php' ?>
    </header>

    <h2>MY CART</h2>
    <table class="ccontainer">
      <tr class="subheader">
        <th class="product-name">PRODUCT</th>
        <th class="price" style="text-align:left;">PRICE</th>
        <th class="quantity">QUANTITY</th>
        <th class="total">TOTAL</th>
      </tr>
      <tr class="products">
        <td class="product-name"></td>
      </tr>
    </table>

    <div class="checkout"><a href="billing.php"> CHECKOUT </a></div>

    <script src="cart.js"></script>
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