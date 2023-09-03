var carts = document.querySelectorAll('.add-cart');

var products = [ //array list to put all objects
    {
        name : 'NORTH STAR WOMEN PINK SNEAKERS - 5595566',
        tag: 'NORTH STAR WOMEN PINK SNEAKERS - 5595566',
        price: 129.90,
        inCart: 0    
    }, 
    {
        name : 'NORTH STAR WOMEN WHITE SNEAKERS - 5511887',
        tag: 'NORTH STAR WOMEN WHITE SNEAKERS - 5511887',
        price: 85.90,
        inCart: 0   
    },
    {
        name : 'NORTH STAR WOMEN PURPLE SNEAKERS - 5595744',
        tag: 'NORTH STAR WOMEN PURPLE SNEAKERS - 5595744',
        price: 79.90,
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
    {
        name : 'ADIDAS SUPERSTAR SHOE',
        tag: 'ADIDAS SUPERSTAR SHOE',
        price: 419.00,
        inCart: 0   
    },
    {
        name : 'ADIDAS STAN SMITH SHO',
        tag: 'ADIDAS STAN SMITH SHO',
        price: 419.00,
        inCart: 0   
    },
    {
        name : 'ADIDAS NIZZA TREFOIL SHOE',
        tag: 'ADIDAS NIZZA TREFOIL SHOEL',
        price: 269.00,
        inCart: 0   
    },
    {
        name : 'CONVERSE CHUCK TALOR ALL STAR BALLET LACE',
        tag: 'CONVERSE CHUCK TALOR ALL STAR BALLET LACE',
        price: 179.90,
        inCart: 0   
    },
    {
        name : 'CONVERSE CHUCK TAYLOR ALL STAR-Hi',
        tag: 'CONVERSE CHUCK TAYLOR ALL STAR-Hi',
        price: 149.90,
        inCart: 0   
    },
    {
        name : 'CONVERSE CHUCK TAYLOR ALL STAR - WE ARE NOT ALONE',
        tag: 'CONVERSE CHUCK TAYLOR ALL STAR - WE ARE NOT ALONE',
        price: 189.90,
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
