const queries = new URLSearchParams(window.location.search);    
const id = queries.get("id");
(async () =>{
    const product = await fetch(`https://dummyjson.com/products/${id}`).then(res => res.json())
    .then(res => res)
    .catch(err => err);

    if(product){
        console.log(product)
        const productDiv = `
        <div class="product-container">
            <div class="main">
                <img src="${product.thumbnail}" alt="">
                <div class="info">
                    <p class="title">${product.title}</p>
                    <p class="price"><span>${product.price}</span>&nbsp;EGP</p>
                    <p>Rating:&nbsp;<span>${product.rating}</span></p>
                    <p>Category:&nbsp;<span>${product.category}</span></p>
                    ${product.stock?`<p class="stock">Stock:&nbsp;<span>${product.stock}</span></p>`:`<p class="out-of-stock">Out of Stock</p>`}
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="description">
                <h3 style="font-family: sans-serif;">Description</h3>
                <p class="description-p">
                    ${product.description}
                </p>
            </div>
        </div>
        `;
        document.body.innerHTML += (productDiv);
    }
})()
