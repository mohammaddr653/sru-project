var bgDark=document.getElementById("bg-dark");
var headerContainer=document.getElementById("header-container");
var body=document.getElementsByTagName('body')[0];
var mobMenuButton=document.querySelector("[mob-menu-button]");
var mobCloseButton=document.querySelector("[mob-close-button]");
var mobMenu=document.querySelector("div#mob-menu");

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
});
