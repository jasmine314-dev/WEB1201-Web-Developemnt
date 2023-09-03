var carts = document.querySelectorAll('.add-cart');

var products = [ //array list to put all objects
    {
        name : 'ADIDAS LITE RACER CLN 2.0 SHOES',
        tag: 'ADIDAS LITE RACER CLN 2.0 SHOES',
        price: 269.00,
        inCart: 0    
    }, 
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
        name : 'NIKE AIR ZOOM PEGASUS 38',
        tag: 'NIKE AIR ZOOM PEGASUS 38',
        price: 485.00,
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
