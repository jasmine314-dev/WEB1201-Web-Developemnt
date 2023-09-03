var carts = document.querySelectorAll('.add-cart');

var products = [ //array list to put all objects
    {
        name : 'ADIDAS CONTINENTAL 80 SHOE (WHITE/BLACK/RED)',
        tag: 'ADIDAS CONTINENTAL 80 SHOE (WHITE/BLACK/RED)',
        price: 289.00,
        inCart: 0    
    }, 
    {
        name : 'ADIDAS NMD_R1 SPECTOO SHOE (GOLD)',
        tag: 'ADIDAS NMD_R1 SPECTOO SHOE (GOLD)',
        price: 479.00,
        inCart: 0   
    },
    {
        name : 'ADIDAS SUPERNOVA TOKYO SHOE (WHITE/BLACK/RED)',
        tag: 'ADIDAS SUPERNOVA TOKYO SHOE (WHITE/BLACK/RED)',
        price: 439.00,
        inCart: 0   
    },
    {
        name : 'ADIDAS ULTRABOOST 21 SHOE (BLACK/RED)',
        tag: 'ADIDAS ULTRABOOST 21 SHOE (BLACK/RED)',
        price: 629.00,
        inCart: 0    
    }, 
    {
        name : 'ADIDAS ULTRABOOST DNA CC_1 SHOE (ACID ORANGE)',
        tag: 'ADIDAS ULTRABOOST DNA CC_1 SHOE (ACID ORANGE)',
        price: 549.00,
        inCart: 0   
    },
    {
        name : 'ADIDAS X9000L3 SHOE (BLACK)',
        tag: 'ADIDAS X9000L3 SHOE (BLACK)',
        price: 389.00,
        inCart: 0   
    },
    {
        name : 'ALDO HYOGO (COGNAC)',
        tag: 'ALDO HYOGO (COGNAC)',
        price: 189.00,
        inCart: 0    
    }, 
    {
        name : 'ALDO OLATHIENFLEX (BLACK)',
        tag: 'ALDO OLATHIENFLEX (BLACK)',
        price: 549.00,
        inCart: 0   
    },
    {
        name : 'ALDO YADONE (BLACK)',
        tag: 'ALDO YADONE (BLACK)',
        price: 120.00,
        inCart: 0   
    },
    {
        name : 'BIRKENSTOCK ARIZONA BIRKO-FLOR',
        tag: 'BIRKENSTOCK ARIZONA BIRKO-FLOR',
        price: 405.59,
        inCart: 0    
    }, 
    {
        name : 'BIRKENSTOCK LUGANO OILED LEATHER (BLACK)',
        tag: 'BIRKENSTOCK LUGANO OILED LEATHER (BLACK)',
        price: 530.54,
        inCart: 0   
    },
    {
        name : 'BIRKENSTOCK MEDINA SOFT FOOTBED BIRKO-FLOR (LIGHT KHAKI)',
        tag: 'BIRKENSTOCK MEDINA SOFT FOOTBED BIRKO-FLOR (LIGHT KHAKI)',
        price: 447.38,
        inCart: 0   
    },
    {
        name : 'CLARKS CITISTRIDESLIP BLACK LEATHER',
        tag: 'CLARKS CITISTRIDESLIP BLACK LEATHER',
        price: 410.11,
        inCart: 0    
    }, 
    {
        name : 'CLARKS FERIUS CREEK TAN COMBI',
        tag: 'CLARKS FERIUS CREEK TAN COMBI',
        price: 410.11,
        inCart: 0   
    },
    {
        name : 'CLARKS UN ABODE GO BLACK LEATHER',
        tag: 'CLARKS UN ABODE GO BLACK LEATHER',
        price: 429.41,
        inCart: 0   
    },
    {
        name : 'CONVERSE CHUCK 70-HI-PARCHMENT (WHITE)',
        tag: 'CONVERSE CHUCK 70-HI-PARCHMENT (WHITE)',
        price: 339.90,
        inCart: 0    
    }, 
    {
        name : 'CONVERSE CHUCK TALOR ALL STAR BALLET LACE-SLIP (BLACK)',
        tag: 'CONVERSE CHUCK TALOR ALL STAR BALLET LACE-SLIP (BLACK)',
        price: 179.90,
        inCart: 0   
    },
    {
        name : 'CONVERSE CHUCK TAYLOR ALL STAR-OX (RED)',
        tag: 'CONVERSE CHUCK TAYLOR ALL STAR-OX (RED)',
        price: 209.90,
        inCart: 0   
    },
    {
        name : 'CROCS BAYABAND CLOG (GREY)',
        tag: 'CROCS BAYABAND CLOG (GREY)',
        price: 207.52,
        inCart: 0    
    }, 
    {
        name : 'CROCS CLASSIC CLOG (GREEN)',
        tag: 'CROCS CLASSIC CLOG (GREEN)',
        price: 207.52,
        inCart: 0   
    },
    {
        name : 'CROCS CROCBAND CLOG (GREY/BLUE)',
        tag: 'CROCS CROCBAND CLOG (GREY/BLUE)',
        price: 207.52,
        inCart: 0   
    },
    {
        name : 'FIPPER BLACK SERIES (PETITE) (GLOW IN THE DARK)',
        tag: 'FIPPER BLACK SERIES (PETITE) (GLOW IN THE DARK)',
        price: 22.90,
        inCart: 0    
    }, 
    {
        name : 'FIPPER WALKER (GREEN/MUSTARD)',
        tag: 'FIPPER WALKER (GREEN/MUSTARD)',
        price: 24.90,
        inCart: 0   
    },
    {
        name : 'FIPPER WIDE (BLUE/GREY)',
        tag: 'FIPPER WIDE (BLUE/GREY)',
        price: 28.90,
        inCart: 0   
    },
    {
        name : 'HUSH PUPPIES MEN`S FINLEY LOAFERS (DARK BROWN)',
        tag: 'HUSH PUPPIES MEN`S FINLEY LOAFERS (DARK BROWN)',
        price: 415.59,
        inCart: 0    
    }, 
    {
        name : 'HUSH PUPPIES MEN`S LUNAR II (BLACK)',
        tag: 'HUSH PUPPIES MEN`S LUNAR II (BLACK)',
        price: 498.75,
        inCart: 0   
    },
    {
        name : 'HUSH PUPPIES MEN`S RAINMAKER (BLACK)',
        tag: 'HUSH PUPPIES MEN`S RAINMAKER (BLACK)',
        price: 561.12,
        inCart: 0   
    },
    {
        name : 'NIKE DEFY ALL DAY (WHITE/BLUE)',
        tag: 'NIKE DEFY ALL DAY (WHITE/BLUE)',
        price: 215.00,
        inCart: 0    
    }, 
    {
        name : 'NIKE JORDAN ONE TAKE II PF (White/Lime/Citron/Pink)',
        tag: 'NIKE JORDAN ONE TAKE II PF (White/Lime/Citron/Pink)',
        price: 269.00,
        inCart: 0   
    },
    {
        name : 'NIKE ZOOMX VAPORFLY NEXT% 2 (LIME)',
        tag: 'NIKE ZOOMX VAPORFLY NEXT% 2 (LIME)',
        price: 509.00,
        inCart: 0   
    },
    {
        name : 'NORTH STAR MEN BLACK SNEAKERS-8596236',
        tag: 'NORTH STAR MEN BLACK SNEAKERS-8596236',
        price: 70.00,
        inCart: 0    
    }, 
    {
        name : 'NORTH STAR MEN NAVY SNEAKERS-8591664',
        tag: 'NORTH STAR MEN NAVY SNEAKERS-8591664',
        price: 129.00,
        inCart: 0   
    },
    {
        name : 'NORTH STAR MEN WHITE SNEAKERS-8591236',
        tag: 'NORTH STAR MEN WHITE SNEAKERS-8591236',
        price: 79.99,
        inCart: 0   
    },
    {
        name : 'POWER PLAZMA + PRODIGY (BLACK/GREEN)',
        tag: 'POWER PLAZMA + PRODIGY (BLACK/GREEN)',
        price: 89.99,
        inCart: 0    
    }, 
    {
        name : 'POWER XOLITE RACER (RED/BLACK)I',
        tag: 'POWER XOLITE RACER (RED/BLACK)',
        price: 89.99,
        inCart: 0   
    },
    {
        name : 'POWER XORISE PHENOM (BLUE/BLACK)',
        tag: 'POWER XORISE PHENOM (BLUE/BLACK)',
        price: 89.99,
        inCart: 0   
    },
    {
        name : 'VANS CLASSIC SLIP-ON (BLUE/WHITE)',
        tag: 'VANS CLASSIC SLIP-ON (BLUE/WHITE)',
        price: 209.00,
        inCart: 0    
    }, 
    {
        name : 'VANS SK8 HI (BLUE/BLACK)',
        tag: 'VANS SK8 HI (BLUE/BLACK)',
        price: 349.00,
        inCart: 0   
    },
    {
        name : 'VANS STYLE 36',
        tag: 'VANS STYLE 36',
        price: 269.00,
        inCart: 0   
    }
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
