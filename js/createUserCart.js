let userCartTbody=document.querySelector("[user-cart-tbody]");                //این صفحه ابتدا مقدار آی دی محصول رو میخونه و بقیه اطلاعات این محصول رو در میاره و براش یدونه سطر تعریف میکنه توی سبد خرید 

async function getProductsData(productId,url){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    for(const product of data){
        if(product.id===productId){
            addToCart(product.id,product.name,product.price,product.teacher,product.buyers);
            break;
        }
    }
}
getProductsData("#100","./products.json");            //فرضی داده شده وگرنه باید بعد از کلیک روی کارت محصول این تابع با پارامتر های مختص همون محصول فراخوانی بشه 
getProductsData("#200","./products.json");
getProductsData("#300","./products.json");
getProductsData("#200","./products.json");
getProductsData("#300","./products.json");
getProductsData("#200","./products.json");
getProductsData("#300","./products.json");
getProductsData("#200","./products.json");
getProductsData("#300","./products.json");
getProductsData("#200","./products.json");
getProductsData("#300","./products.json");
getProductsData("#200","./products.json");
getProductsData("#300","./products.json");
getProductsData("#100","./products.json");            //فرضی داده شده وگرنه باید بعد از کلیک روی کارت محصول این تابع با پارامتر های مختص همون محصول فراخوانی بشه 
getProductsData("#200","./products.json");
getProductsData("#300","./products.json");
getProductsData("#200","./products.json");
getProductsData("#300","./products.json");
getProductsData("#200","./products.json");
getProductsData("#300","./products.json");
getProductsData("#200","./products.json");
getProductsData("#300","./products.json");
getProductsData("#200","./products.json");
getProductsData("#300","./products.json");
getProductsData("#200","./products.json");
getProductsData("#300","./products.json");



