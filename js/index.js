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