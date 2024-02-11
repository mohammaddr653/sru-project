let getUserName;
let getUserId;
let getUserCart;
let getUserPhoneNumber;
async function getUserInfo(phone,url){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    for(const user of data){
        if(user.phoneNumber===phone){
            console.log("user #30 is connect");
            setUserInfo(user.id,user.name,user.cart,user.phoneNumber)
            break;
        }
    }
}
getUserInfo("09377372231","./users.json");   //هنگامی که کاربر با شماره تلفن خودش لاگین کرد ، شماره تلفنش به این فانگشن داده میشه تا بقیه اطلاعات کاربر لود بشن . اینجا بصورت فرضی شماره تلفن دادم وگرنه باید داینامیک بشه 

function setUserInfo(userId,userName,userCart,userPhone){
    getUserName=userName;
    getUserId=userId;
    getUserCart=userCart;
    getUserPhoneNumber=userPhone;
    createCart();
    // console.log(getUserName,getUserId,getUserPhoneNumber,getUserCart);
}




function createCart(){
    let userCartTbody=document.querySelector("[user-cart-tbody]");


    let userId=getUserId;            // آی دی یوزر را میگیریم تا بفهمیم که آیا این دوره را خریداری کرده یا نه 

    async function createUserCartTable(url){
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        for(const product of data){
            let buyOrnot=false;
            if(getUserCart.includes(product.id)){
                console.log(product.id);
                checkBuyOrnot();
            }
            function checkBuyOrnot(){
                if(product.buyers.includes(userId)){
                    buyOrnot=true;
                }else{
                    buyOrnot=false;
                }
                if(buyOrnot){
                    userCartTbody.innerHTML +=
                    `
                    <tr>
                        <td>${product.name}</td>
                        <td>${product.teacher}</td>
                        <td>${product.price}</td>
                        <td class="user-buyOrnot-true">خریداری شده</td>
                    </tr>
                    
                    `    
    
                }else{
                    userCartTbody.innerHTML +=
                    `
                    <tr>
                        <td>${product.name}</td>
                        <td>${product.teacher}</td>
                        <td>${product.price}</td>
                        <td class="user-buyOrnot-false"><a href="https://digikala.com">پرداخت</a></td>
                    </tr>
                    
                    `    
                }
    
            }

        }
    }
    createUserCartTable("./products.json");
}
