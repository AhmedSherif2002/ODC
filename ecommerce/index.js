const getProducts = async ()=>{
    const productsDiv = document.getElementById("products");
    const products = await fetch("https://dummyjson.com/products").then(res=> res.json()).then(res=>{
        const products = res.products;
        return products;
    }).catch(err=>{
        return null;
    })
    products?.forEach(product => {
        console.log(product)
        const newProduct = `
            <div class="product">
            <img src="${product.thumbnail}" alt="">
            <div class="product-info">
                <p class="name">${product.title}</p>
                <p class="price-p"><span class="price">${product.price}</span>&nbsp;EGP</p>
                <a href="./product.html?id=${product.id}" class="show-more-btn" id="">Show More</a>
            </div>
        </div>
        `;
        productsDiv.innerHTML += newProduct;
    });
    return products;
}


(async () =>{
    console.log(await getProducts())
})();

window.onscroll = ()=>{
    const verticalScroll = window.scrollY;
    console.log(verticalScroll)
    const upArrow = document.getElementById("move-up")
    if(verticalScroll > 100){
        upArrow.style.display = "flex";
    }else{
        upArrow.style.display = "none";
    }

    upArrow.onclick = (e)=>{
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
    }
}