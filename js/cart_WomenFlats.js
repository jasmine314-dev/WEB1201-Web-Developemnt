var carts = document.querySelectorAll('.add-cart');

var products = [ //array list to put all objects
    {
        name : 'CROCS WOMEN REVIVA FLAT',
        tag: 'CROCS WOMEN REVIVA FLAT',
        price: 279.00,
        inCart: 0    
    }, 
    {
        name : 'CROCS WOMEN SLOANE FLAT',
        tag: 'CROCS WOMEN SLOANE FLAT',
        price: 349.00,
        inCart: 0   
    },
    {
        name : 'CROCS WOMEN TULUM OPEN FLAT',
        tag: 'CROCS WOMEN TULUM OPEN FLAT',
        price: 279.00,
        inCart: 0   
    },
    {
        name : 'HUSH PUPPIES WOMENS ANDREA GRACIA',
        tag: 'HUSH PUPPIES WOMENS ANDREA GRACIA',
        price: 295.00,
        inCart: 0   
    },
    {
        name : 'HUSH PUPPIES WOMENS ALBIE MARLA',
        tag: 'HUSH PUPPIES WOMENS ALBIE MARLA',
        price: 299.00,
        inCart: 0   
    },
    {
        name : 'HUSH PUPPIES WOMENS CAMILLE',
        tag: 'HUSH PUPPIES WOMENS CAMILLE',
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
        name : 'ALDO URSEL',
        tag: 'ALDO URSEL',
        price: 199.00,
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
