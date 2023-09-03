var carts = document.querySelectorAll('.add-cart');

var products = [ //array list to put all objects
    {
        name : 'ALDO CORONITIFLEX',
        tag: 'ALDO CORONITIFLEX',
        price: 349.50,
        inCart: 0    
    }, 
    {
        name : 'ALDO ADIEMWEN',
        tag: 'ALDO ADIEMWEN',
        price: 199.90,
        inCart: 0   
    },
    {
        name : 'ALDO KAVIEL',
        tag: 'ALDO KAVIEL',
        price: 199.90,
        inCart: 0   
    },
    {
        name : 'HUSH PUPPIES WOMENS ALIYAH LUCIA',
        tag: 'HUSH PUPPIES WOMENS ALIYAH LUCIA',
        price: 349.00,
        inCart: 0   
    },
    {
        name : 'HUSH PUPPIES WOMEN ALBIE MARLA',
        tag: 'HUSH PUPPIES WOMEN ALBIE MARLA',
        price: 299.00,
        inCart: 0   
    },
    {
        name : 'HUSH PUPPIES WOMENS ALICE CLARISA',
        tag: 'HUSH PUPPIES WOMENS ALICE CLARISA',
        price: 269.90,
        inCart: 0   
    },
    {
        name : 'HUSH PUPPIES WOMENS BELINDA SANDERS',
        tag: 'HUSH PUPPIES WOMENS BELINDA SANDERS',
        price: 197.50,
        inCart: 0   
    },
    {
        name : 'NOSE STRAPPY STILETTO AA3142860-23-36',
        tag: 'NOSE STRAPPY STILETTO AA3142860-23-36',
        price: 109.90,
        inCart: 0   
    },
    {
        name : 'NOSE STRAPPY HEEL SANDAL AA3132698-27-38',
        tag: 'NOSE STRAPPY HEEL SANDAL AA3132698-27-38',
        price: 79.90,
        inCart: 0   
    },
    {
        name : 'NOSE STRAPPY SANDAL AA3142730-12-35',
        tag: 'NOSE STRAPPY SANDAL AA3142730-12-35',
        price: 119.90,
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
