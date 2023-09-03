<!DOCTYPE html>
<html lang="en">
    <head>
        <style>
            .topnav{
                overflow: hidden; 
                background-color: #6495ed;
                height: 70px;
            }
            .topnav a:hover, .dropdown:hover .dropbtn{
                background-color: #324b77;
                color: #bfaa8c;
                cursor: pointer;
            }
            .dropdown{
                float: left;
                overflow: hidden;
            }
            .dropdown .dropbtn{
                font-size: 20px;  
                border: none;
                outline: none;
                color: #555555;
                background-color: inherit;
                font-family: inherit;
                padding: 15px;
                width: 125px;
                text-decoration: none;
            }

            .dropbtn a:visited{
                text-decoration: none;
                color: black;
            }
            .content {
                display: none;
                position: absolute;
                background-color: #324b77;
                min-width: 500px;
                box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                z-index: 1;
            }

            .content2 {
                display: none;
                position: absolute;
                background-color: #324b77;
                min-width: 250px;
                box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                z-index: 1;
            }

            .content a, .content2 a {
                float: none;
                color: #6495ed;
                padding: 12px 16px;
                text-decoration: none;
                display: block;
                text-align: left;
            }
            .content a:hover, .content2 a:hover {
                background-color: #bfaa8c;
                color: #324b77;
                text-decoration: none;
            }

            .content h3>a:visited, .content2 h3>a:visited{
                color: #6495ed;
                text-decoration: none;
            }

            .dropdown:hover .content, .dropdown:hover .content2 {
                display: block;
            }
    
            }
            .col1{
                float: left;
                width: 50%;
            }
            .col2{
                float: left;
                width: 50%;
            }
            h3{
                margin: 5px 15px;
            }
            .dropdownnav{
                margin-left: 38%;
            }
        </style>
    </head>

    <body>
        <nav class="topnav">
            <div class="dropdownnav">
                <div class="dropdown">
                <button class="dropbtn"><a href="women.php">Women</a></button>
                    <div class=content>
                        <div class="col1">
                            <h3>TYPES</h3>
                            <a href="women_flats.php">Flats</a>
                            <a href="women_heels.php">Heels</a>
                            <a href="women_slippers.php">Slippers & Sandals</a>
                            <a href="women_sneakers.php">Sneakers</a>
                            <a href="women_sports.php">Sports</a>
                            <a href="women_wedges.php">Wedges</a>
                        </div>
                    </div>
                </div>
                <div class="dropdown">
                <button class="dropbtn"><a href="Men.php">Men</a></button>
                    <div class=content>
                        <div class="col1">
                            <h3>TYPES</h3>
                            <a href="Men_Loafers.php">Loafers</a>
                            <a href="Men_Slippers.php">Slippers & Sandals</a>
                            <a href="Men_Sneakers.php">Sneakers</a>
                            <a href="Men_Sports.php">Sports</a>
                        </div>
                    </div>
                </div>
                <div class="dropdown">
                <button class="dropbtn"><a href="Kids.php">Kids</a></button>
                    <div class=content2>
                        <div class="col1">
                            <h3>CATEGORY</h3>
                            <a href="Kids_Boys.php">Boys</a>
                            <a href="Kids_Girls.php">Girls</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </body>
</html>