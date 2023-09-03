var carts = document.querySelectorAll('.add-cart');

var products = [ //array list to put all objects
    {
        name : 'ALDO HYOGO (COGNAC)',
        tag: 'ALDO HYOGO (COGNAC)',
        price: 189.00,
        inCart: 0    
    }, 
    {
        name : 'ALDO OLATHIENFLEX (BLACK)',
        tag: 'ALDO OLATHIENFLEX (BLACK)',
        price: 549.00,
        inCart: 0   
    },
    {
        name : 'ALDO YADONE (BLACK)',
        tag: 'ALDO YADONE (BLACK)',
        price: 120.00,
        inCart: 0   
    },
    {
        name : 'CLARKS CITISTRIDESLIP BLACK LEATHER',
        tag: 'CLARKS CITISTRIDESLIP BLACK LEATHER',
        price: 410.11,
        inCart: 0    
    }, 
    {
        name : 'CLARKS FERIUS CREEK TAN COMBI',
        tag: 'CLARKS FERIUS CREEK TAN COMBI',
        price: 410.11,
        inCart: 0   
    },
    {
        name : 'CLARKS UN ABODE GO BLACK LEATHER',
        tag: 'CLARKS UN ABODE GO BLACK LEATHER',
        price: 429.41,
        inCart: 0   
    },
    {
        name : 'HUSH PUPPIES MEN`S FINLEY LOAFERS (DARK BROWN)',
        tag: 'HUSH PUPPIES MEN`S FINLEY LOAFERS (DARK BROWN)',
        price: 415.59,
        inCart: 0   
    },
    {
        name : 'HUSH PUPPIES MEN`S LUNAR II (BLACK)',
        tag: 'HUSH PUPPIES MEN`S LUNAR II (BLACK)',
        price: 498.75,
        inCart: 0    
    }, 
    {
        name : 'HUSH PUPPIES MEN`S RAINMAKER (BLACK)',
        tag: 'HUSH PUPPIES MEN`S RAINMAKER (BLACK)',
        price: 561.12,
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
