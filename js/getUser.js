let getUserName;                                                    //شماره تلفن گرفته میشه از بخش لاگین . میاد اینجا و یه حلقه میزنیم روی فایل یوزر هامون تا بفهمیم شماره مال کدومشون بوده . وقتی فهمیدیم بقیه اطلاعات یوزر رو در میاریم و به آبجکت گلوبال میدیم تا همه جا بتونیم به اطلاعات یوزرمون دسترسی داشته باشیم
let getUserId;
let getUserCart;                                                    //این صفحه کارش همینه فقط . اطلاعات یوزری که لاگین کرده رو بگیره و توی آبجکت گلوبال بذاره 
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
                                                                 //اطلاعات یوزر را در گلوبال آبجکت قرار میدیم تا بعدا هر جا دسترسی داشته باشیم بهش
    Object.prototype.globalUserId=userId;
    Object.prototype.globalUserName=userName;
    Object.prototype.globalUserCart=userCart;
    Object.prototype.globalUserPhone=userPhone;
    Object.prototype.globalUserUserName=userUserName;
    Object.prototype.globalUserEmail=userEmail;
    Object.prototype.globalUserAvatarSrc=userAvatarSrc;
    loadUserInformation();
    // console.log(getUserName,getUserId,getUserPhoneNumber,getUserCart);
}

let accountSideUserName=document.querySelector("[account-side-user-name]"); 
let clientNameInput=document.querySelector("[client-name-input]");
let clientUserNameInput=document.querySelector("[client-user-name-input]");
let clientEmailInput=document.querySelector("[client-email-input]");
let accountSideAvatar=document.querySelector("[account-side-avatar]");        //اطلاعات حساب کاربری رو بصورت داینامیک میخونه
function loadUserInformation(){
    accountSideUserName.innerHTML=Object.globalUserName;
    clientNameInput.value=Object.globalUserName;
    clientUserNameInput.value=Object.globalUserUserName;
    clientEmailInput.value=Object.globalUserEmail;
    accountSideAvatar.src=Object.globalUserAvatarSrc;
    // let nowAvatar=document.querySelector("#bio-avatar").src;
    document.querySelector("#user-avatar-select").src=Object.globalUserAvatarSrc;     //تصویر آواتار کاربر رو در قسمت انتخاب آواتار برابر با تصویر آواتار ساید قرار میده
}
