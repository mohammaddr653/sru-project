let getUserName;                                                  
let getUserId;
let getUserCart;                                                    
let getUserPhoneNumber;
let getUserUserName;
let getUserEmail;
let getUserAvatarSrc;
async function getUserInfo(phone,url){
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    for(const user of data){
        if(user.phoneNumber===phone){
            console.log("user #30 is connect");
            setUserInfo(user.id,user.name,user.userName,user.email,user.cart,user.phoneNumber,user.src)
            break;
        }
    }
}
getUserInfo("09377372231","./users.json");   //هنگامی که کاربر با شماره تلفن خودش لاگین کرد ، شماره تلفنش به این فانگشن داده میشه تا بقیه اطلاعات کاربر لود بشن . اینجا بصورت فرضی شماره تلفن دادم وگرنه باید داینامیک بشه 

function setUserInfo(userId,userName,userUserName,userEmail,userCart,userPhone,userAvatarSrc){
    getUserName=userName;
    getUserId=userId;
    getUserCart=userCart;
    getUserPhoneNumber=userPhone;
    getUserUserName=userUserName;
    getUserEmail=userEmail;
    getUserAvatarSrc=userAvatarSrc;
    loadUserInformation();
    // console.log(getUserName,getUserId,getUserPhoneNumber,getUserCart);
}

let accountSideUserName=document.querySelector("[account-side-user-name]"); 
let clientNameInput=document.querySelector("[client-name-input]");
let clientUserNameInput=document.querySelector("[client-user-name-input]");
let clientEmailInput=document.querySelector("[client-email-input]");
let accountSideAvatar=document.querySelector("[account-side-avatar]");        //اطلاعات حساب کاربری رو بصورت داینامیک میخونه
function loadUserInformation(){
    accountSideUserName.innerHTML=getUserName;
    clientNameInput.value=getUserName;
    clientUserNameInput.value=getUserUserName;
    clientEmailInput.value=getUserEmail;
    accountSideAvatar.src=getUserAvatarSrc;
    // let nowAvatar=document.querySelector("#bio-avatar").src;
    document.querySelector("#user-avatar-select").src=getUserAvatarSrc;     //تصویر آواتار کاربر رو در قسمت انتخاب آواتار برابر با تصویر آواتار ساید قرار میده
}



function addToCart(productId,productName,productPrice,productTeacher,productBuyers){    // فراخوانی میشه createUserCart.js   از
    userCartTbody.innerHTML +=
        `
            <tr>
                <td>${productName}</td>
                <td>${productTeacher}</td>
                <td>${productPrice}</td>
                <td>${productBuyers.includes(getUserId)?`<a class="user-buyOrnot-true" href="https://digikala.com">مشاهده</a>`:`<a class="user-buyOrnot-false" href="https://digikala.com">پرداخت</a>`}</td>
            </tr>

        `
}
