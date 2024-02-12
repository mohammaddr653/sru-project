let getUserName;                                                    //شماره تلفن گرفته میشه از بخش لاگین . میاد اینجا و یه حلقه میزنیم روی فایل یوزر هامون تا بفهمیم شماره مال کدومشون بوده . وقتی فهمیدیم بقیه اطلاعات یوزر رو در میاریم و به آبجکت گلوبال میدیم تا همه جا بتونیم به اطلاعات یوزرمون دسترسی داشته باشیم
let getUserId;
let getUserCart;                                                    //این صفحه کارش همینه فقط . اطلاعات یوزری که لاگین کرده رو بگیره و توی آبجکت گلوبال بذاره 
let getUserPhoneNumber;
async function getUserInfo(phone,url){
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
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
                                                                 //اطلاعات یوزر را در گلوبال آبجکت قرار میدیم تا بعدا هر جا دسترسی داشته باشیم بهش
    Object.prototype.globalUserId=userId;
    Object.prototype.globalUserName=userName;
    Object.prototype.globalUserCart=userCart;
    Object.prototype.globalUserPhone=userPhone;
    // console.log(getUserName,getUserId,getUserPhoneNumber,getUserCart);
}