var carts = document.querySelectorAll('.add-cart');

var products = [ //array list to put all objects
    {
        name : 'FIPPER SLIM',
        tag: 'FIPPER SLIM',
        price: 24.90,
        inCart: 0    
    }, 
    {
        name : 'FIPPER STRAPPY',
        tag: 'FIPPER STRAPPY',
        price: 29.90,
        inCart: 0   
    },
    {
        name : 'FIPPER SLIP ON',
        tag: 'FIPPER SLIP ON',
        price: 43.90,
        inCart: 0   
    },
    {
        name : 'BIRKENSTOCK ARIZONA EVA SANDALS',
        tag: 'BIRKENSTOCK ARIZONA EVA SANDALS',
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
        name : 'BIRKENSTOCK GIZEH EVA SANDALS',
        tag: 'BIRKENSTOCK GIZEH EVA SANDALS',
        price: 189.00,
        inCart: 0   
    },
    {
        name : 'CROCS WOMENS LITERIDE SANDA',
        tag: 'CROCS WOMENS LITERIDE SANDA',
        price: 229.00,
        inCart: 0   
    },
    {
        name : 'CROCS WOMEN TULUM TRANSLUCENT TOE POST SANDAL',
        tag: 'CROCS WOMEN TULUM TRANSLUCENT TOE POST SANDAL',
        price: 259.00,
        inCart: 0   
    },
    {
        name : 'CROCS WOMEN TULUM SANDAL',
        tag: 'CROCS WOMEN TULUM SANDAL',
        price: 239.90,
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
