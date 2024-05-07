var bgImage=document.querySelectorAll("[background-image]");
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
        // const bgImageAlbum=["images/wp2063106-civil-engineering-wallpapers.jpg",
        // "images/wp2043551-civil-engineering-wallpapers.jpg",
        // "images/wp4185680-tools-wallpapers.jpg"
        // ]
        let bgImageNum=0;
        function bgImageFunc(){
            bgImage[bgImageNum].classList.add("imgZoomIn");
        }
        bgImageFunc();
        setInterval(function(){
            bgImage[bgImageNum].classList.remove("imgZoomIn");
            bgImageNum =bgImageNum+1;
            if(bgImageNum==bgImage.length){
                bgImageNum=0;
            }
            bgImageFunc();
        },15000)
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


let depHeaderButs = document.querySelectorAll("div#main-container div#parts-carousel div.departmans-header>button");
let departmans = document.querySelectorAll("div#main-container div#parts-carousel div.departmans");
depHeaderButs[0].classList.add("but-clicked");
departmansShow(depHeaderButs[0].classList);


for(let depHeaderBut of depHeaderButs){
    console.log(depHeaderBut);
    depHeaderBut.addEventListener("mouseenter",function(){
        depHeaderBut.classList.add("but-hover");
    });
    depHeaderBut.addEventListener("mouseleave",function(){
        depHeaderBut.classList.remove("but-hover");
    });
    depHeaderBut.addEventListener("click",function(){
        depHeaderButs[0].classList.remove("but-clicked");
        depHeaderButs[1].classList.remove("but-clicked");
        depHeaderBut.classList.add("but-clicked");
        departmansShow(depHeaderBut.classList);

        
    });

}
function departmansShow(butClass){
    if(butClass.contains("amoozesh-but")){
        departmans[1].classList.remove("dep-show");
        departmans[0].classList.add("dep-show");
    }
    if(butClass.contains("parvaresh-but")){
        departmans[0].classList.remove("dep-show");
        departmans[1].classList.add("dep-show");

    }

}




$(document).ready(function(){
    $(".amozesh-carousel").owlCarousel();
    $(".parvaresh-carousel").owlCarousel();
  });
  $('.amozesh-carousel').owlCarousel({
    loop: true,
    margin:20,
    nav: true,
    center: false,
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