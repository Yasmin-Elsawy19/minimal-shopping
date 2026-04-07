fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data=> {

let container=document.querySelector(".products")
let btn=document.querySelector(".btn")
let limitproducts=data.products.slice(0,8)
limitproducts.forEach(function(product){
container.innerHTML +=`
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
`;
});
btn.addEventListener("click",function(){
    window.location.href="index2.html";
})

})     
          let productCard=document.querySelector(".product-card")

          product-card.addEventListener("click",function(){
          let wishIcon=document.querySelector(".wish-icon i")
          wishIcon.classList.toggle("active-heart");
        
        if(wishIcon.classList.contains("active-heart")) {
            wishicon.classList.replace("fa-regular", "fa-solid");
        } else {
            wishIcon.classList.replace("fa-solid", "fa-regular");
        }
    });


          