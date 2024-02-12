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
function addToCart(productId,productName,productPrice,productTeacher,productBuyers){
    userCartTbody.innerHTML +=
        `
            <tr>
                <td>${productName}</td>
                <td>${productTeacher}</td>
                <td>${productPrice}</td>
                <td>${productBuyers.includes(Object.globalUserId)?`<a class="user-buyOrnot-true" href="https://digikala.com">مشاهده</a>`:`<a class="user-buyOrnot-false" href="https://digikala.com">پرداخت</a>`}</td>
            </tr>

        `
}

