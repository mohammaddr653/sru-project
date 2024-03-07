var headerContainer=document.getElementById("header-container");

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

window.addEventListener("scroll", function(){
    if(window.scrollY>=200){
        headerContainer.classList.add("header-container-bg-change");
    } else{
        headerContainer.classList.remove("header-container-bg-change");    }  

})


// start main nav container



let mainNav=document.getElementById("main-nav-container");
let mainNavFirstChild=document.querySelector("div#main-nav-container>div.container>div.row>div.header-nav>ul>li>div.nav-first-child");
let mainNavFirstChildTop=mainNavFirstChild.style.top;
mainNavFirstChildTop="0";
body.addEventListener("load",function(){
    mainNavFirstChildTop=mainNav.offsetHeight.toString();
    console.log(mainNavFirstChildTop);
})


// finish main nav container






$(document).ready(function(){
    $(".amozesh-carousel").owlCarousel();
    // $(".parvaresh-carousel").owlCarousel();
  });
  $('.amozesh-carousel').owlCarousel({
    loop: false,
    navRewind: false,
    margin:10,
    nav: true,
    center: false,
    autoHeight:false,
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
            items:4
        }
    }
})
// $('.parvaresh-carousel').owlCarousel({
//     loop: true,
//     margin:20,
//     nav: true,
//     center: true,
//     dots:false,
//     rtl:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:2
//         },
//         1000:{
//             items:3
//         }
//     }
// })