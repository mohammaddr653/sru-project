var bgDark=document.getElementById("bg-dark");
var departmans=document.querySelectorAll("div#main-container div#parts-carousel div.departmans");
var body=document.getElementsByTagName('body')[0];
var amoozeshIcon=document.querySelector("div#page-bar div.bar-container>div.row>div.amoozesh-icon");
var parvareshIcon=document.querySelector("div#page-bar div.bar-container>div.row>div.parvaresh-icon");
var headerContainer=document.getElementById("header-container");
var mainContainer=document.getElementById("main-container");
var pageBar=document.getElementById("page-bar");
var footerContainer=document.getElementById("footer-container");
var mobMenuButton=document.querySelector("[mob-menu-button]");
var mobCloseButton=document.querySelector("[mob-close-button]");
var mobMenu=document.querySelector("div#mob-menu");
var bgDarkMenu=document.getElementById("bg-dark-menu");
var bgImage=document.querySelector("[background-image]");
let preloaderContainer= document.getElementById("preloader-container");

body.style.overflowY="hidden";
window.addEventListener("load", function(){
    setTimeout(function(){
        preloaderContainer.classList.add("preloader-hide");
        body.style.overflowY="scroll";
      //تایم اوت باید برداشته شه . اینو  دادم صرفا برای اینکه تایم لودمون بیشتر باشه بتونیم تصویر رو ببینیم
    },2000)
})

function myFunction(x) {
    if (x.matches) { // If media query matches
        bgImage.src="images/6409424.jpg";
    } else {
        bgImage.src="images/346725.jpg";
    }
}
  
  // Create a MediaQueryList object

var x = window.matchMedia("(max-width: 900px)")

// Call listener function at run time

myFunction(x);

// Attach listener function on state changes


x.addEventListener("change", function() {
  myFunction(x);
});
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

amoozeshIcon.addEventListener("click",function(){
    window.scrollTo({ top: 400, behavior: 'smooth'});
    // parvareshIcon.classList.remove("parvaresh-icon-light");
    // amoozeshIcon.classList.add("amoozesh-icon-light");
});
parvareshIcon.addEventListener("click",function(){
    window.scrollTo({ top: 850, behavior: 'smooth'});
    // amoozeshIcon.classList.remove("amoozesh-icon-light");
    // parvareshIcon.classList.add("parvaresh-icon-light");


});
// var myScrollFunc = function () {
//     var y = window.scrollY;
//     if (y>=400) {
//         parvareshIcon.classList.remove("parvaresh-icon-light");
//         amoozeshIcon.classList.add("amoozesh-icon-light");    
//     }
//     if (y>=850) {
//         amoozeshIcon.classList.remove("amoozesh-icon-light");
//         parvareshIcon.classList.add("parvaresh-icon-light");
//     }


// };
// window.addEventListener("scroll", myScrollFunc);

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





$(document).ready(function(){
    $(".amozesh-carousel").owlCarousel();
    $(".parvaresh-carousel").owlCarousel();
  });
  $('.amozesh-carousel').owlCarousel({
    loop: true,
    margin:20,
    nav: true,
    center: true,
    dots:false,
    rtl:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$('.parvaresh-carousel').owlCarousel({
    loop: true,
    margin:20,
    nav: true,
    center: true,
    dots:false,
    rtl:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})