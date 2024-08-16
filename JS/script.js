var allproduct = document.querySelectorAll(".product-card");
var cart = document.querySelector(".productimges");
var cart1 = document.querySelector(".productprice");
var cart2 = document.querySelector(".producttitlee");
var numofproduct =document.querySelector(".numofprofuct")
var numofproduct1 =document.querySelector(".numofprofuct1")
var totalpricesh =document.querySelector("#totalprice")
var thetotal =document.querySelector(".thetotal")
var numofproducts =0
var numofproducts1 =0
var totalprice = 0

   
allproduct.forEach(function(product) {
    
    var productbtn = product.querySelector("a");
    
    productbtn.onclick = function() {

        totalprice += parseInt(product.getAttribute("price"))

        numofproducts +=1;
        numofproduct.innerText = numofproducts;

        // /////////////////////////////////////////////////////////
        numofproducts1 +=1;
        numofproduct1.innerText = numofproducts1;
        // /////////////////////////////////////////////////////////

        var productImage = product.querySelector("img"); 
        if (productImage) {
            cart.innerHTML += productImage.outerHTML ; 
        }
        if (cart.innerHTML!= "") {
            totalpricesh.style.display = "block";
            
        }
        // /////////////////////////////////////////////////////////
        var producttitle = product.querySelector(".protitle"); 
        if (producttitle) {
            cart2.innerHTML += `<span class="productname">${producttitle.textContent}</span>`;
 
        }
       
        // /////////////////////////////////////////////////////////
        var productprices = product.querySelector(".pricesp"); 
        if (productprices) {
            cart1.innerHTML += `<span class="productprice">${productprices.textContent}`; 
        }
            
       
    }

    
});

totalpricesh.onclick = function() {
    thetotal.innerHTML = "Total Price =  " + totalprice + "  $";
}; 


