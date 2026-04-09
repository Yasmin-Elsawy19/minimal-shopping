fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data=> {

let container2=document.querySelector(".allproducts")


let remainingproducts=data.products.slice(8);
let productsh=remainingproducts.map(product =>{
return `
<div class="product-card">
<div class="image-container">
<img src="${product.thumbnail}"
<div class="wish-icon"><i class="fa-regular fa-heart"></i></div>
<div class="product-info">
<div class="title-price">
<h4 class="title"> ${product.title}</h4>
<span class="price">${product.price}
</div>

<p class="description">${product.description}
</div>
</div>
`
}).join('');
container2.innerHTML += productsh;

    
});
