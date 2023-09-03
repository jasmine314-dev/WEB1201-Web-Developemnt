var carts = document.querySelectorAll('.add-cart');

var products = [ //array list to put all objects
    {
        name : 'ADIDAS SUPERNOVA TOKYO SHOE (WHITE/BLACK/RED)',
        tag: 'ADIDAS SUPERNOVA TOKYO SHOE (WHITE/BLACK/RED)',
        price: 439.00,
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
        name : 'POWER PLAZMA + PRODIGY (BLACK/GREEN)',
        tag: 'POWER PLAZMA + PRODIGY (BLACK/GREEN)',
        price: 89.99,
        inCart: 0    
    }, 
    {
        name : 'POWER XOLITE RACER (RED/BLACK)',
        tag: 'POWER XOLITE RACER (RED/BLACK)',
        price: 89.99,
        inCart: 0   
    },
    {
        name : 'POWER XORISE PHENOM (BLUE/BLACK)',
        tag: 'POWER XORISE PHENOM (BLUE/BLACK)',
        price: 89.99,
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
