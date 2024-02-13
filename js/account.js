var bgDark=document.getElementById("bg-dark");
// var departmans=document.querySelectorAll("div#main-container div#parts-carousel div.departmans");
var body=document.getElementsByTagName('body')[0];
// var amoozeshIcon=document.querySelector("div#page-bar div.bar-container>div.row>div.amoozesh-icon");
// var parvareshIcon=document.querySelector("div#page-bar div.bar-container>div.row>div.parvaresh-icon");
var headerContainer=document.getElementById("header-container");
// var mainContainer=document.getElementById("main-container");
// var pageBar=document.getElementById("page-bar");
var footerContainer=document.getElementById("footer-container");
var mobMenuButton=document.querySelector("[mob-menu-button]");
var mobCloseButton=document.querySelector("[mob-close-button]");
var mobMenu=document.querySelector("div#mob-menu");
var bgDarkMenu=document.getElementById("bg-dark-menu");
// var bgImage=document.querySelector("[background-image]");


mobMenuButton.addEventListener("click",mobMenuOpen);
function mobMenuOpen(){
    mobMenu.classList.add("mob-menu-open");
    bgDarkMenu.classList.add("bg-dark-menu-show");
    body.style.overflowY="hidden";    

}
mobCloseButton.addEventListener("click",mobMenuClose);
function mobMenuClose(){
    mobMenu.classList.remove("mob-menu-open");
    bgDarkMenu.classList.remove("bg-dark-menu-show");
    body.style.overflowY="scroll";    

}

// var myScrollFunc = function () {
//     var y = window.scrollY;
// };
// window.addEventListener("scroll", myScrollFunc);

function setScrollOptions(){
    var lastScrollTop = 0;

    window.addEventListener("scroll", function(){
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        if(!(headerContainer.classList.contains=="header-container-change")){
            headerContainer.classList.add("header-container-change");
        } 
    } else if (st < lastScrollTop) {
        headerContainer.classList.remove("header-container-change");
        lastScrollTop=st;
    }
    lastScrollTop = st <= 0 ? 0 : st;
    }, false);

}
setScrollOptions();

var userInfo=document.querySelector("[user-info]");
var userPanel=document.querySelector("[user-panel]");
var myCourse=document.querySelector("[my-course]");
var userTicket=document.querySelector("[user-ticket]");
var userCart=document.querySelector("[user-cart]");

var accountMainDivs=document.querySelectorAll("div#main-container>div.account-container>div.row>div.account-main>div");
var userInfoContainer=document.querySelector("div#main-container>div.account-container>div.row>div.account-main>div.user-info-container");
var userPanelContainer=document.querySelector("div#main-container>div.account-container>div.row>div.account-main>div.user-panel-container");
var myCourseContainer=document.querySelector("div#main-container>div.account-container>div.row>div.account-main>div.my-course-container");
var userTicketContainer=document.querySelector("div#main-container>div.account-container>div.row>div.account-main>div.user-ticket-container");
var userCartContainer=document.querySelector("div#main-container>div.account-container>div.row>div.account-main>div.user-cart-container");
var divsNum;

userInfo.addEventListener("click",userInfoOpen);
userPanel.addEventListener("click",userPanelOpen);
myCourse.addEventListener("click",myCourseOpen);
userTicket.addEventListener("click",userTicketOpen);
userCart.addEventListener("click",userCartOpen);

function closeAccountMainDiv(){
    for(divsNum=0;divsNum<accountMainDivs.length;divsNum++){
        var accountMainDiv=accountMainDivs[divsNum];
        if(accountMainDiv.classList.contains("account-main-show")){
            accountMainDiv.classList.remove("account-main-show");
        }
    }
    userInfo.classList.remove("account-sidebar-light");
    userPanel.classList.remove("account-sidebar-light");
    myCourse.classList.remove("account-sidebar-light");
    userTicket.classList.remove("account-sidebar-light");
    userCart.classList.remove("account-sidebar-light");



}

closeAccountMainDiv();
userInfoContainer.classList.add("account-main-show");
userInfo.classList.add("account-sidebar-light");

function userInfoOpen(){
    closeAccountMainDiv();
    userInfoContainer.classList.add("account-main-show");
    userInfo.classList.add("account-sidebar-light");
}
function userPanelOpen(){
    closeAccountMainDiv();
    userPanelContainer.classList.add("account-main-show");
    userPanel.classList.add("account-sidebar-light");

}
function myCourseOpen(){
    closeAccountMainDiv();
    myCourseContainer.classList.add("account-main-show");
    myCourse.classList.add("account-sidebar-light");
}
function userTicketOpen(){
    closeAccountMainDiv();
    userTicketContainer.classList.add("account-main-show");
    userTicket.classList.add("account-sidebar-light");

}
function userCartOpen(){
    closeAccountMainDiv();
    userCartContainer.classList.add("account-main-show");
    userCart.classList.add("account-sidebar-light");

}




var userOmomiTitle=document.querySelector("[user-omomi-title]");
var userAvatarTitle=document.querySelector("[user-avatar-title]");
var userPassTitle=document.querySelector("[user-pass-title]");

var userInfoRows=document.querySelectorAll("div#main-container>div.account-container>div.row>div.account-main>div.user-info-container>div.user-info-row");
var userInfoOmomi=document.querySelector("[user-info-omomi]");
var userInfoAvatar=document.querySelector("[user-info-avatar]");
var userInfoPass=document.querySelector("[user-info-pass]");
var rowsNum;


userOmomiTitle.addEventListener("click",userInfoOmomiOpen);
userAvatarTitle.addEventListener("click",userInfoAvatarOpen);
userPassTitle.addEventListener("click",userInfoPassOpen);

function userInfoOmomiOpen(){
    closeUserInfoRows();
    userInfoOmomi.classList.add("user-info-row-show");
    userOmomiTitle.classList.add("user-info-title-light");
}
function userInfoAvatarOpen(){
    closeUserInfoRows();
    userInfoAvatar.classList.add("user-info-row-show");
    userAvatarTitle.classList.add("user-info-title-light");
}
function userInfoPassOpen(){
    closeUserInfoRows();
    userInfoPass.classList.add("user-info-row-show");
    userPassTitle.classList.add("user-info-title-light");
}


function closeUserInfoRows(){
    for(rowsNum=0;rowsNum<userInfoRows.length;rowsNum++){
        var userInfoRow=userInfoRows[rowsNum];
        if(userInfoRow.classList.contains("user-info-row-show")){
            userInfoRow.classList.remove("user-info-row-show");
        }
    }
    userOmomiTitle.classList.remove("user-info-title-light");
    userAvatarTitle.classList.remove("user-info-title-light");
    userPassTitle.classList.remove("user-info-title-light");



}
closeUserInfoRows();
userInfoOmomi.classList.add("user-info-row-show");
userOmomiTitle.classList.add("user-info-title-light");








var avaterSaveButton=0;
var userAvatarSelect=document.querySelector("#user-avatar-select");
document.querySelector("button.save-avatar").setAttribute("disabled","");

function readURL(input) {
    if (input.files && input.files[0]) {
    
      var reader = new FileReader();
      reader.onload = function (e) { 
        userAvatarSelect.setAttribute("src",e.target.result);
        avaterSaveButton=1;
        avaterSaveButtonOnOff();
      };

      reader.readAsDataURL(input.files[0]); 
    }
}
// alert(document.querySelector("#user-avatar-select").src);
function deleteAvatar(){
    if(!(userAvatarSelect.src=="http://127.0.0.1:5500/images/default.png")){
        // alert("nothing");
        // alert("gg");
        userAvatarSelect.setAttribute("src","images/default.png");
        avaterSaveButton=1;
        avaterSaveButtonOnOff();
    
    }
}

function avaterSaveButtonOnOff(){
    if(avaterSaveButton==1){
        // alert("ff");
        document.querySelector("button.save-avatar").classList.add("save-avatar-on");
        document.querySelector("button.save-avatar").removeAttribute("disabled","");
    }else{
        document.querySelector("button.save-avatar").classList.remove("save-avatar-on");
        document.querySelector("button.save-avatar").setAttribute("disabled","");
    }
}



                                                // تیکت



var userNewTicketTitle=document.querySelector("[user-new-ticket-title]");
var userLastTicketsTitle=document.querySelector("[user-last-tickets-title]");

var userTicketRows=document.querySelectorAll("div#main-container>div.account-container>div.row>div.account-main>div.user-ticket-container>div.user-ticket-row");
var userNewTicket=document.querySelector("[user-new-ticket]");
var userLastTickets=document.querySelector("[user-last-tickets]");
var ticketRowsNum;


userNewTicketTitle.addEventListener("click",userNewTicketOpen);
userLastTicketsTitle.addEventListener("click",userLastTicketsOpen);

function userNewTicketOpen(){
    closeUserTicketRows();
    userNewTicket.classList.add("user-ticket-row-show");
    userNewTicketTitle.classList.add("user-ticket-title-light");
    // newTicketCheck();
}
function userLastTicketsOpen(){
    closeUserTicketRows();
    userLastTickets.classList.add("user-ticket-row-show");
    userLastTicketsTitle.classList.add("user-ticket-title-light");
}

function closeUserTicketRows(){
    for(ticketRowsNum=0;ticketRowsNum<userTicketRows.length;ticketRowsNum++){
        var userTicketRow=userTicketRows[ticketRowsNum];
        if(userTicketRow.classList.contains("user-ticket-row-show")){
            userTicketRow.classList.remove("user-ticket-row-show");
        }
    }
    userNewTicketTitle.classList.remove("user-ticket-title-light");
    userLastTicketsTitle.classList.remove("user-ticket-title-light");



}
closeUserTicketRows();
userNewTicket.classList.add("user-ticket-row-show");
userNewTicketTitle.classList.add("user-ticket-title-light");



var newTicketTitle = document.getElementById("new-ticket-title");
var newTicketBox= document.getElementById('new-ticket-box');
var newTicketSubmit= document.getElementById('new-ticket-submit');

var lastTicketsEmpty=document.getElementsByClassName("last-tickets-empty")[0];
var lastTicketsTemplate=document.querySelector("[last-tickets-template]");

function newTicketCheck(){
    // console.log('entered');
    if(newTicketTitle.value=="" || newTicketTitle.value==null || newTicketBox.value=="" || newTicketBox.value==null){
        newTicketSubmit.setAttribute("disabled","");
        newTicketSubmit.classList.remove('new-ticket-submit-light');
    }else{
        newTicketSubmit.removeAttribute("disabled","");
        newTicketSubmit.classList.add('new-ticket-submit-light');
    }
    
}
newTicketSubmit.addEventListener("click",addToLastTickets);
checkLastTicketsEmpty();
// alert(userLastTickets.childElementCount);
function checkLastTicketsEmpty(){
    if(userLastTickets.childElementCount==2){
        lastTicketsEmpty.style.display="flex";
    }else{
        lastTicketsEmpty.style.display="none";
    }
}

function addToLastTickets(){


                                                                                                                            // "بعد از کلیک روی دکمه ارسال تیکت ، این تابع اجرا میشه . "
                                                                                                                            // "قبل از اجرا شدن این تابع باید اطلاعات به سرور ارسال و در صورت ذخیره موفق در سرور این تابع را فراخوانی کنید"
                                                                                                                            //مقادیر آزمایشی باید توسط بک اند تنظیم و مقدار دهی شود .

    var newLastTicket=lastTicketsTemplate.content.cloneNode(true).children[0];
    console.log(newLastTicket);
    var lastTicketCode=newLastTicket.querySelector("[last-ticket-code]");
    lastTicketCode.textContent="#400";          // آزمایشی//
    var lastTicketTitle=newLastTicket.querySelector("[last-ticket-title]");
    lastTicketTitle.textContent=newTicketTitle.value;
    var lastTicketAnswered=newLastTicket.querySelector("[last-ticket-answered]");
    lastTicketAnswered.classList.add("last-ticket-answered-show");  //آزمایشی//
    userLastTickets.append(newLastTicket);
    newTicketInputClear();
    checkLastTicketsEmpty();

}
function newTicketInputClear(){
    newTicketTitle.value="";
    newTicketBox.value="";
    newTicketCheck();
}



                                            // تیکت





var searchShowIcon=document.querySelector("div#page-bar div.bar-container>div.search-container>svg.search-icon");
var searchBar=document.querySelector("div#page-bar div.bar-container>div.search-container");
var searchCloseIcon=document.querySelector("div#page-bar div.bar-container>div.search-container>svg.close-icon");
var searchResults=document.querySelector("div#search-results");

searchShowIcon.addEventListener("click",function(){
    bgDark.classList.add("bg-dark-show");
    headerContainer.classList.add("header-container-change");
    searchBar.classList.add("search-container-show");
    searchResults.classList.add("search-results-show");
    body.style.overflowY="hidden";    
});
searchCloseIcon.addEventListener("click",function h(){
    bgDark.classList.remove("bg-dark-show");
    headerContainer.classList.remove("header-container-change");
    searchBar.classList.remove("search-container-show");
    searchResults.classList.remove("search-results-show");
    body.style.overflowY="scroll";
    myScrollFunc();
});





