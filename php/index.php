<!DOCTYPE html>
<html lang="en">
    <head>
        <title>The Shoe Factory - Home Page</title>
        <link rel="icon" type="image/png" href="shoefctryicon.ico">
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <style>
            a:visited{
                text-decoration: none;
            }
            .item-image{
                display: none;
            }
            .ads{
                vertical-align: middle;
            }
            .carousel_container{
                max-width: 40%;
                position: relative;
                margin: auto;
            }
            .prev, .next{
                cursor: pointer;
                position: absolute;
                top: 50%;
                width: auto;
                padding: 16px;
                margin-top: -22px;
                color: #bfaa8c;
                font-weight: bold;
                font-size: 18px;
                transition: 0.6s ease;
                border-radius: 0 3px 3px 0;
                user-select: none;
            }
            .next{
                right: 0;
                border-radius: 3px 0 0 3px;
            }
            .prev:hover, .next:hover{
                background-color: rgba(0,0,0,0.8);
            }
            .caption{
                color: #555555;
                font-size: 15px;
                padding: 0 12px;
                position: absolute;
                width: 100%;
                text-align: center;
                bottom: 8px;
            }
            .num{
                color: #324b77;
                font-size: 12px;
                padding: 8px 12px;
                position: absolute;
                top: 0;
            }
            .dot{
                cursor: pointer;
                height: 15px;
                width: 15px;
                margin: 0 2px;
                background-color: #bbb;
                border-radius: 50%;
                display: inline-block;
                transition: background-color 0.6s ease;
            }
            .active, .dot:hover{
                background-color: #717171;
            }
            .fade{
                -webkit-animation-name: fade;
                -webkit-animation-duration: 1.5s;
                animation-name: fade;
                animation-duration: 1.5s;
            }
            @-webkit-keyframes fade{
                from{opacity: .4;}
                to{opacity: 1;}
            }
            @keyframes fade{
                from{opacity: .4;}
                to{opacity: 1;}
            }
            .productcontent{
                padding: 0 10vw;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-gap: 20px;
                margin-top: 50px;
                margin-bottom: 50px;
            }
            .product{
                flex: 0 0 auto;
                width: 250px;
                height: 440px;
                margin: auto;
                padding-bottom: 120px;
                padding-top: 30px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                transition: transform 0.5s;
            }
            .thumbnail{
                width: 250px;
                height: 250px;
                object-fit: scale-down;
            }
            .productinfo{
                width: 250px;
                height: 250px;
                padding-top: 10px;
                padding-bottom: 100px;
                text-align: center;
            }
            .product img{
                border: 0.5px solid rgb(229, 229, 240);
            }
            .product:hover img{
                opacity: 0.7;
                transform: translateY(-5px);
            }
            .line{
                width: 100%; 
                text-align: center; 
                border-bottom: 1px solid #000; 
                line-height: 0.1em;
                margin: 10px 0 20px;
            }
            .line .title{
                background:#faf0e6; 
                padding:0 10px; 
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
        <div class="homepage">
            <h1 style="text-align: center; margin-bottom: 10px; margin-top: 30px;">HOT PRODUCTS</h1>
            <div class="carousel_container">
                <div class="item_image">
                    <img class="ads" src="https://images.restocks.net/products/555088-062/air-jordan-1-retro-high-who-said-man-was-not-meant-to-fly-1-1000.png" alt="Air Jordan 1 Retro High Bloodline" style="width:100%">
                    <div class="caption">Nike Air Jordan 1 Retro High Bloodline<br><b>RM649</b></div>
                </div>
                <div class="item_image">
                    <img class="ads" src="https://images.restocks.net/products/FX9017/adidas-yeezy-boost-350-v2-tail-light-1-1000.png" alt="Adidas Yeezy Boost 350 V2 Tail Light" style="width:100%">
                    <div class="caption">Adidas Yeezy Boost 350 V2 Tail Light<br><b>RM1999</b></div>
                </div>
                <div class="item_image">
                    <img class="ads" src="https://images.restocks.net/products/S79165/nmd-r1-286160-1-1000.png" alt="Adidas NMD_R1" style="width:100%">
                    <div class="caption">Adidas NMD_R1<br><b>RM669</b></div>
                </div>
                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>
            </div>
            <br>
            <div style="text-align: center">
                <span class="dot" onclick="currentSlides(1)"></span>
                <span class="dot" onclick="currentSlides(2)"></span>
                <span class="dot" onclick="currentSlides(3)"></span>
            </div>
            <br>
            <br>
            <h1 class="line"><span class="title">New Products</span></h1>
            <div class="productcontent">
                <div class="product">
                    <a href="">
                        <img class="thumbnail" src="https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17034381_07_B.jpg?ts=1629799517491&imwidth=412&imdensity=2" alt="Mango Lace-up Cotton Sneakers">
                        <div class="productinfo">
                            <h3>MANGO LACE-UP COTTON SNEAKERS<br><br>RM239.00</h3>
                        </div>
                    </a>
                </div>
                <div class="product">
                    <a href="">
                        <img class="thumbnail" src="https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17080144_15_B.jpg?ts=1617890702088&imwidth=412&imdensity=2" alt="Mango Padded Slippers">
                        <div class="productinfo">
                            <h3>MANGO PADDED SLIPPERS<br><br>RM69.90</h3>
                        </div>
                    </a>
                </div>
                <div class="product">
                    <a href="">
                        <img class="thumbnail" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/8df5ab4346d7475ebb08a91500a047d3_9366/Continental_80_Shoes_White_G27706_01_standard.jpg" alt="Adidas Continental 80 Shoe">
                        <div class="productinfo">
                            <h3>ADIDAS CONTINENTAL 80 SHOE<br><br>RM289.00</h3>
                        </div>
                    </a>
                </div>
            </div>
            <h1 class="line"><span class="title">Discount</span></h1>
            <div class="productcontent">
                <div class="product">
                        <img class="thumbnail" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/87a3e29c93e44cb59b81ac3200cbb1d1_9366/Galaxy_5_Shoes_White_FY6744_01_standard.jpg" alt="Adidas Galaxy 5 Shoes">
                        <div class="productinfo">
                            <h3>ADIDAS GALAXY 5 SHOES<br><br><br>RM189.00</h3>
                        </div>
                </div>
                <div class="product">
                        <img class="thumbnail" src="https://dynamic.zacdn.com/2oO51tmuM3CVLl-ZG1tOHXXACmY=/fit-in/346x500/filters:quality(95):fill(ffffff)/http://static.my.zalora.net/p/aldo-6021-4861052-1.jpg" alt="Aldo Adiemwen">
                        <div class="productinfo">
                            <h3>ALDO ADIEMWEN<br><br><br>RM129.90</h3>
                        </div>
                </div>
                <div class="product">
                        <img class="thumbnail" src="https://www.aldoshoes.com.my/media/catalog/product/cache/e4a5ed21e30b9582486e4926341210cb/o/l/olathienflex_black_1_aldomenfootweardressshoes.jpg" alt="Aldo Olathienflex">
                        <div class="productinfo">
                            <h3>ALDO OLATHIENFLEX<br><br><br>RM459.00</h3>
                        </div>
                    </a>
                </div>
             </div>
            <script>
                var index = 1;
                showSlides(index);

                function plusSlides(n){
                    showSlides(index += n);
                }

                function currentSlides(n){
                    showSlides(index = n);
                }

                function showSlides(n){
                    var i;
                    var slides = document.getElementsByClassName("item_image");
                    var dots = document.getElementsByClassName("dot");
                    if(n == undefined){
                        n = ++index
                    }
                    if(n > slides.length){
                        index = 1
                    }
                    if(n < 1){
                        index = slides.length
                    }
                    for(i=0; i<slides.length; i++){
                        slides[i].style.display = "none";
                    }
                    for(i=0; i<dots.length; i++){
                        dots[i].className = dots[i].className.replace(" active", "");
                    }
                    slides[index - 1].style.display = "block";
                    dots[index - 1].className += " active";
                    setTimeout(showSlides, 4000);
                }
            </script>
        </div>
        <footer>
            <?php include 'footer.php' ?>
        </footer>
    </body>
</html>