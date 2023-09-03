var carts = document.querySelectorAll('.add-cart');

var products = [ //array list to put all objects
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
