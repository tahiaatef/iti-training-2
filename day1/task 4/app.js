let counter=0;
function addToCart(img){
    if(img.getAttribute("data-Added")==="false"){
        counter++;
        img.setAttribute("data-Added","true");
        alert(`${counter} items added to cart`);
    }else{
        alert("the item added before");
    }
    
}