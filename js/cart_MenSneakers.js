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
        name : 'ADIDAS ULTRABOOST 21 SHOE (BLACK/RED)',
        tag: 'ADIDAS ULTRABOOST 21 SHOE (BLACK/RED)',
        price: 629.00,
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
