var carts = document.querySelectorAll('.add-cart');

var products = [ //array list to put all objects
    {
        name : 'MANGO LEATHER STRAPS SANDALS FOR BOYS',
        tag: 'MANGO LEATHER STRAPS SANDALS FOR BOYS',
        price: 169.00,
        inCart: 0    
    }, 

    {
        name : 'MANGO PADDED SLIPPERS',
        tag: 'MANGO PADDED SLIPPERS',
        price: 69.90,
        inCart: 0   
    },

    {
        name : 'MANGO LACE-UP COTTON SNEAKERS',
        tag: 'MANGO LACE-UP COTTON SNEAKERS',
        price: 239.00,
        inCart: 0   
    },

    {
        name : 'MANGO TRACK SOLE SNEAKERS',
        tag: 'MANGO TRACK SOLE SNEAKERS',
        price: 239.00,
        inCart: 0   
    },

    {
        name : 'MANGO MIXED TECHNICAL SNEAKERS FOR BOYS',
        tag: 'MANGO MIXED TECHNICAL SNEAKERS FOR BOYS',
        price: 239.00,
        inCart: 0   
    },

    {
        name : 'MANGO VELCRO STRAP SANDALS',
        tag: 'MANGO VELCRO STRAP SANDALS',
        price: 109.00,
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
