function displayCart() {
    let citem = localStorage.getItem("productsInCart");
    citem = JSON.parse(citem); //convert from json to js object
    let productContainer = document.querySelector(".products");
    let cost = localStorage.getItem('total');

    if(citem && productContainer ) {
       productContainer.innerHTML = '';
       Object.values(citem).map(item => {
           productContainer.innerHTML += `
           <tr class="products">
           <td class="product-name">${item.name}</td>
           <td class="price">RM${item.price}</td>
            <td class="quantity">
                    <span>${item.inCart}</span>
            </td>
            <td class="total">RM${item.inCart * item.price}</td>
            </tr>
           ` 
        });

        productContainer.innerHTML += `
            <div class="basketContainer">
                <h4 class="basketTitle">
                    Basket Total
                </h4>
                <h4 class="basketTotal">
                    RM${cost}
                </h4>
            </div>
        `
    }

}


displayCart();