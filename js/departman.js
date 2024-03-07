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

let postsContentPreview = document.querySelectorAll("div#main-container div.popular-blocks-container>div.popular-blocks-carousel div.departmans>div.dep-car-content>a>div.card-bottom>div.card-bottom-title>p");
for(let postContentPreview of postsContentPreview ){
    let result = postContentPreview.innerHTML.substring(0,120);

    postContentPreview.innerHTML = result+"...";
    // console.log(postContentPreview.innerHTML.substring(1,10));
    
}




