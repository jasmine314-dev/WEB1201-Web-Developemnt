var carts = document.querySelectorAll('.add-cart');

var products = [ //array list to put all objects
    {
        name : 'ADIDAS ALPHABOUNCE SHOES',
        tag: 'ADIDAS ALPHABOUNCE SHOES',
        price: 439.00,
        inCart: 0    
    }, 
    {
        name : 'ADIDAS GALAXY 5 SHOES',
        tag: 'ADIDAS GALAXY 5 SHOES',
        price: 239.00,
        inCart: 0   
    },
    {
        name : 'ADIDAS LITE RACER CLN 2.0 SHOES',
        tag: 'ADIDAS LITE RACER CLN 2.0 SHOES',
        price: 269.00,
        inCart: 0   
    },
    {
        name : 'ADIDAS NIZZA TREFOIL SHOE',
        tag: 'ADIDAS NIZZA TREFOIL SHOE',
        price: 269.00,
        inCart: 0   
    },
    {
        name : 'ADIDAS STAN SMITH SHOE',
        tag: 'ADIDAS STAN SMITH SHOE',
        price: 419.00,
        inCart: 0   
    },
    {
        name : 'ADIDAS SUPERSTAR SHOE',
        tag: 'ADIDAS SUPERSTAR SHOE',
        price: 419.90,
        inCart: 0   
    },
    {
        name : 'ALDO ADIEMWEN',
        tag: 'ALDO ADIEMWEN',
        price: 199.90,
        inCart: 0   
    },
    {
        name : 'ALDO AMOREIRA',
        tag: 'ALDO AMOREIRA',
        price: 109.50,
        inCart: 0   
    },
    {
        name : 'ALDO BLANCHETTE',
        tag: 'ALDO BLANCHETTE',
        price: 199.00,
        inCart: 0   
    },
    {
        name : 'ALDO CORONITIFLEX',
        tag: 'ALDO CORONITIFLEX',
        price: 349.50,
        inCart: 0   
    },
    {
        name : 'ALDO DINA',
        tag: 'ALDO DINA',
        price: 185.00,
        inCart: 0   
    },
    {
        name : 'ALDO KAVIEL',
        tag: 'ALDO KAVIEL',
        price: 199.90,
        inCart: 0   
    },
    {
        name : 'ALDO MAUMA',
        tag: 'ALDO MAUMA',
        price: 155.00,
        inCart: 0   
    },
    {
        name : 'ALDO MONTANA',
        tag: 'ALDO MONTANA',
        price: 289.00,
        inCart: 0   
    },
    {
        name : 'ALDO URSEL',
        tag: 'ALDO URSEL',
        price: 199.00,
        inCart: 0   
    },
    {
        name : 'BIRKENSTOCK ARIZONA EVA SANDALS',
        tag: 'BIRKENSTOCK ARIZONA EVA SANDALS',
        price: 189.00,
        inCart: 0   
    },
    {
        name : 'BIRKENSTOCK GIZEH EVA SANDALS',
        tag: 'BIRKENSTOCK GIZEH EVA SANDALS',
        price: 189.00,
        inCart: 0   
    },
    {
        name : 'BIRKENSTOCK GIZEH PATENT SANDALS',
        tag: 'BIRKENSTOCK GIZEH PATENT SANDALS',
        price: 349.00,
        inCart: 0   
    },
    {
        name : 'CONVERSE CHUCK TALOR ALL STAR BALLET LACE',
        tag: 'CONVERSE CHUCK TALOR ALL STAR BALLET LACE',
        price: 179.90,
        inCart: 0   
    },
    {
        name : 'CONVERSE CHUCK TAYLOR ALL STAR - WE ARE NOT ALONE',
        tag: 'CONVERSE CHUCK TAYLOR ALL STAR - WE ARE NOT ALONE',
        price: 189.90,
        inCart: 0   
    },
    {
        name : 'CONVERSE CHUCK TAYLOR ALL STAR-Hi',
        tag: 'CONVERSE CHUCK TAYLOR ALL STAR-Hi',
        price: 149.90,
        inCart: 0   
    },
    {
        name : 'CROCS WOMEN REVIVA FLAT',
        tag: 'CROCS WOMEN REVIVA FLAT',
        price: 279.00,
        inCart: 0   
    },
    {
        name : 'ROCS WOMEN SLOANE FLAT',
        tag: 'ROCS WOMEN SLOANE FLAT',
        price: 219.00,
        inCart: 0   
    },
    {
        name : 'CROCS WOMEN TULUM OPEN FLAT',
        tag: 'CROCS WOMEN TULUM OPEN FLAT',
        price: 279.00,
        inCart: 0   
    },
    {
        name : 'CROCS WOMEN TULUM SANDA',
        tag: 'CROCS WOMEN TULUM SANDA',
        price: 239.90,
        inCart: 0   
    },
    {
        name : 'CROCS WOMEN TULUM TRANSLUCENT TOE POST SANDAL',
        tag: 'CROCS WOMEN TULUM TRANSLUCENT TOE POST SANDAL',
        price: 199.00,
        inCart: 0   
    },
    {
        name : 'CROCS WOMENS LITERIDE SANDAL',
        tag: 'CROCS WOMENS LITERIDE SANDAL',
        price: 229.00,
        inCart: 0   
    },
    {
        name : 'FIPPER SLIM',
        tag: 'FIPPER SLIM',
        price: 24.90,
        inCart: 0   
    },
    {
        name : 'FIPPER SLIP ON',
        tag: 'FIPPER SLIP ON',
        price: 43.90,
        inCart: 0   
    },
    {
        name : 'FIPPER STRAPPY',
        tag: 'FIPPER STRAPPY',
        price: 29.90,
        inCart: 0   
    },
    {
        name : 'HUSH PUPPIES WOMENS ALBIE MARLA',
        tag: 'HUSH PUPPIES WOMENS ALBIE MARLA',
        price: 299.90,
        inCart: 0   
    },
    {
        name : 'HUSH PUPPIES WOMENS ALICE CLARISA',
        tag: 'HUSH PUPPIES WOMENS ALICE CLARISA',
        price: 269.00,
        inCart: 0   
    },
    {
        name : 'HUSH PUPPIES WOMENS ALIYAH LUCIA',
        tag: 'ALDO URSEL',
        price: 349.00,
        inCart: 0   
    },
    {
        name : 'HUSH PUPPIES WOMENS ANDREA GRACIA',
        tag: 'HUSH PUPPIES WOMENS ANDREA GRACIA',
        price: 295.00,
        inCart: 0   
    },
    {
        name : 'HUSH PUPPIES WOMENS ARIEL SLINGBAC',
        tag: 'HUSH PUPPIES WOMENS ARIEL SLINGBAC',
        price: 179.50,
        inCart: 0   
    },
    {
        name : 'HUSH PUPPIES WOMENS BELINDA SANDERS',
        tag: 'HUSH PUPPIES WOMENS BELINDA SANDERS',
        price: 197.50,
        inCart: 0   
    },
    {
        name : 'HUSH PUPPIES WOMENS CAMILLE',
        tag: 'HUSH PUPPIES WOMENS CAMILLE',
        price: 199.90,
        inCart: 0   
    },
    {
        name : 'HUSH PUPPIES WOMENS MONZA LYNN',
        tag: 'HUSH PUPPIES WOMENS MONZA LYNN',
        price: 299.90,
        inCart: 0   
    },
    {
        name : 'HUSH PUPPIES WOMENS MONZA SANDERS',
        tag: 'HUSH PUPPIES WOMENS MONZA SANDERS',
        price: 215.50,
        inCart: 0   
    },
    {
        name : 'NIKE AIR ZOOM PEGASUS 38',
        tag: 'NIKE AIR ZOOM PEGASUS 38',
        price: 485.00,
        inCart: 0   
    },
    {
        name : 'NIKE REVOLUTION 5',
        tag: 'NIKE REVOLUTION 5',
        price: 205.00,
        inCart: 0   
    },
    {
        name : 'NIKE REVOLUTION 6 FLYEASE NEXT NATURE',
        tag: 'NIKE REVOLUTION 6 FLYEASE NEXT NATURE',
        price: 215.00,
        inCart: 0   
    },
    {
        name : 'NORTH STAR WOMEN PINK SNEAKERS - 5595566',
        tag: 'NORTH STAR WOMEN PINK SNEAKERS - 5595566',
        price: 129.90,
        inCart: 0   
    },
    {
        name : 'NORTH STAR WOMEN PURPLE SNEAKERS - 5595744',
        tag: 'NORTH STAR WOMEN PURPLE SNEAKERS - 5595744',
        price: 79.90,
        inCart: 0   
    },
    {
        name : 'NORTH STAR WOMEN WHITE SNEAKERS - 5511887',
        tag: 'NORTH STAR WOMEN WHITE SNEAKERS - 5511887',
        price: 85.90,
        inCart: 0   
    },
    {
        name : 'NOSE CASUAL PLATFORM WEDGE SLIDE AC4242941-15-35',
        tag: 'NOSE CASUAL PLATFORM WEDGE SLIDE AC4242941-15-35',
        price: 139.90,
        inCart: 0   
    },
    {
        name : 'NOSE FLORA PRINT WEDGE SLIDE AC4242916-13-35',
        tag: 'NOSE FLORA PRINT WEDGE SLIDE AC4242916-13-35',
        price: 149.90,
        inCart: 0   
    },

    {
        name : 'NOSE STRAPPY HEEL SANDAL AA3132698-27-38',
        tag: 'NOSE STRAPPY HEEL SANDAL AA3132698-27-38',
        price: 79.90,
        inCart: 0   
    },

    {
        name : 'NOSE STRAPPY SANDAL AA3142730-12-35',
        tag: 'NOSE STRAPPY SANDAL AA3142730-12-35',
        price: 119.90,
        inCart: 0   
    },

    {
        name : 'NOSE STRAPPY STILETTO AA3142860-23-36',
        tag: 'NOSE STRAPPY STILETTO AA3142860-23-36',
        price: 109.90,
        inCart: 0   
    },

    {
        name : 'NOSE WEDGE SANDALS AC3242870-01-35',
        tag: 'NOSE WEDGE SANDALS AC3242870-01-35',
        price: 139.90,
        inCart: 0   
    },
    {
        name : 'POWER ENGAGE ZERO II',
        tag: 'POWER ENGAGE ZERO II',
        price: 95.90,
        inCart: 0   
    },
    {
        name : 'POWER EXODUS XENO',
        tag: 'POWER EXODUS XENO',
        price: 95.90,
        inCart: 0   
    },
    {
        name : 'POWER MELLO WEBSTER',
        tag: 'POWER MELLO WEBSTER',
        price: 98.90,
        inCart: 0   
    },
    {
        name : 'VANS CLASSIC SLIP-ON',
        tag: 'VANS CLASSIC SLIP-ON',
        price: 269.00,
        inCart: 0   
    },
    {
        name : 'VANS CULTIVATE CARE SK8-HI',
        tag: 'VANS CULTIVATE CARE SK8-HI',
        price: 349.00,
        inCart: 0   
    },
    {
        name : 'VANS ECO THEORY OLD SKOOL TAPERED',
        tag: 'VANS ECO THEORY OLD SKOOL TAPERED',
        price: 289.00,
        inCart: 0   
    },


];

for(let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click',() => {
        cartno(products[i]);
        total(products[i])
    })
        
}

function displayCart() {
    let num = localStorage.getItem('cartno');

    if(num) {
        document.querySelector('.cart-icon small').textContent = num;
    }
}

function cartno(product) {
    
    let num = localStorage.getItem('cartno');
    
    num = parseInt(num); //parseint to convert string to int
    
    if(num) {
        localStorage.setItem('cartno', num + 1);
        document.querySelector('.cart-icon small').textContent = num + 1;
    }else {
        localStorage.setItem('cartno', 1);
        document.querySelector('.cart-icon small').textContent = 1;
    }
    setItems(product);


}

function setItems(product){
    let citems = localStorage.getItem('productsInCart');
    citems = JSON.parse(citems);
  
    if(citems != null){
        
        if(citems[product.tag] == undefined){
            citems = {
                ...citems,
                [product.tag]: product
            }
        }
        citems[product.tag].inCart += 1;  
    } else {
        product.inCart = 1;
        citems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(citems));
}

function total(product) {
    //console.log("The product price is", product.price); //System.out.print
    let cartCost = localStorage.getItem('total');
    
    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);

    if(cartCost != null) {
        cartCost = parseFloat(cartCost);
        localStorage.setItem("total", cartCost + product.price );
    }else{
    localStorage.setItem("total",product.price);
    }
}   

displayCart();
