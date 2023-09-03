var carts = document.querySelectorAll('.add-cart');

var products = [ //array list to put all objects
    {
        name : 'ALDO MAUMA',
        tag: 'ALDO MAUMA',
        price: 155.00,
        inCart: 0    
    }, 
    {
        name : 'ALDO DINA',
        tag: 'ALDO DINA',
        price: 185.00,
        inCart: 0   
    },
    {
        name : 'ALDO MONTANA',
        tag: 'ALDO MONTANA',
        price: 289.00,
        inCart: 0   
    },
    {
        name : 'HUSH PUPPIES WOMENS MONZA SANDERS',
        tag: 'HUSH PUPPIES WOMENS MONZA SANDERS',
        price: 215.50,
        inCart: 0   
    },
    {
        name : 'HUSH PUPPIES WOMENS ARIEL SLINGBACK',
        tag: 'HUSH PUPPIES WOMENS ARIEL SLINGBACK',
        price: 179.50,
        inCart: 0   
    },
    {
        name : 'HUSH PUPPIES WOMENS MONZA LYNN',
        tag: 'HUSH PUPPIES WOMENS MONZA LYNN',
        price: 299.90,
        inCart: 0   
    },
    {
        name : 'NOSE WEDGE SANDALS AC3242870-01-35',
        tag: 'NOSE WEDGE SANDALS AC3242870-01-35',
        price: 139.90,
        inCart: 0   
    },
    {
        name : 'NOSE FLORA PRINT WEDGE SLIDE AC4242916-13-35',
        tag: 'NOSE FLORA PRINT WEDGE SLIDE AC4242916-13-35',
        price: 149.90,
        inCart: 0   
    },
    {
        name : 'NOSE CASUAL PLATFORM WEDGE SLIDE AC4242941-15-35',
        tag: 'NOSE CASUAL PLATFORM WEDGE SLIDE AC4242941-15-35',
        price: 139.90,
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
