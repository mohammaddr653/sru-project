var mobMenuButton=document.querySelector("[mob-menu-button]");
var mobMenu=document.querySelector("div#mob-menu");
var bgDarkMenu=document.getElementById("bg-dark-menu");
var mobCloseButton=document.querySelector("[mob-close-button]");
var body=document.getElementsByTagName('body')[0];


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

