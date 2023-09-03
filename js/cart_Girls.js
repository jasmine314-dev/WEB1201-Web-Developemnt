var carts = document.querySelectorAll('.add-cart');

var products = [ //array list to put all objects
    {
        name : 'MANGO LACE-UP LINEN ESPADRILLES',
        tag: 'MANGO LACE-UP LINEN ESPADRILLES',
        price: 169.00,
        inCart: 0    
    }, 

    {
        name : 'MANGO LEATHER STRAPS SANDALS FOR GIRLS',
        tag: 'MANGO LEATHER STRAPS SANDALS FOR GIRLS',
        price: 169.00,
        inCart: 0   
    },

    {
        name : 'MANGO PEARL BUCKLE SANDALS',
        tag: 'MANGO PEARL BUCKLE SANDALS',
        price: 139.00,
        inCart: 0   
    },

    {
        name : 'MANGO SNEAKERS WITH REMOVABLE 3D CHARM',
        tag: 'MANGO SNEAKERS WITH REMOVABLE 3D CHARM',
        price: 169.00,
        inCart: 0   
    },

    {
        name : 'MANGO VELCRO FASTENING LEATHER SNEAKERS',
        tag: 'MANGO VELCRO FASTENING LEATHER SNEAKERS',
        price: 239.00,
        inCart: 0   
    },

    {
        name : 'MANGO MIXED TECHNICAL SNEAKERS FOR GIRLS',
        tag: 'MANGO MIXED TECHNICAL SNEAKERS FOR GIRLS',
        price: 239.00,
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
