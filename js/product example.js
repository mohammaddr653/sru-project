let productExample=document.querySelector("[product-example]");           // این صفحه بطور آزمایشی تولید شد تا بتونی یه پیشبینی بکنی از عملکرد دکمه اضافه کردن به سبد خرید . این صفحه اول میاد یه حلقه میزنه روی اطلاعات فایل محصولات و برای هرکدومشون یه آبجکت میسازه که این آبجکت یه متد داره که توش میاد برای هر محصول یه کارت تولید میکنه که این کارت قابلیت کلیک کردن رو گذاشته برای تصویر محصول .
function CreateProduct(productId,productTit,productPri){
    this.productTitle = productTit;
    this.productPrice = productPri;
    productExample.innerHTML +=                          //آی دی محصول رو به عنوان یه اتریبیوت تعریف میکنیم که بتونیم با ایونت تارگت بفهمیم روی کدوم کارت کلیک شده 
    `
    
    <div class="product" onclick="getProduct(event)" data-id=${productId}> 
        <h6>${productTit}</h6>
        <img src="images/243125.jpg" width="100%" alt="" class="add-to-cart" product-img>
        <p>${productPri}</p>    
    </div>


    `
};

async function getProductsData(url){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    for(const product of data){
        console.log(product);
        let productCart=new CreateProduct(product.id,product.name,product.price);
        console.log("hell",productCart.productTitle,productCart.productPrice,productCart);
    }
    // productTit.innerHTML=data[0].name;
    // productPri.innerHTML=data[0].price;
}
getProductsData("./products.json");



function getProduct(event){         //ایونت تارگت اینجا اجرا میشه . مقدار اتریبیوت آی دی رو میگیره و اون رو پاس میده به یه تابع
    console.log(event.target.classList.value);
    if(event.target.classList.value==="add-to-cart"){
        const clickedProductId=event.target.parentElement.getAttribute("data-id");
        getProductsData(clickedProductId,"./products.json");         //این تابع مقدار آی دی رو میگیره و همچنین مسیر فایل محصولات رو و میره این تابع رو از createUserCart.js میخونه
    }
}