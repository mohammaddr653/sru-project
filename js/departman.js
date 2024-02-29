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

let mainNavParents=document.querySelectorAll("div#main-nav-container>div.container>div.row>div.header-nav>ul>li>a");
for(let mainNavParent of mainNavParents){
    // let n=0
    let navFirstChild;
    mainNavParent.addEventListener("mouseover",function(){
        navFirstChild=mainNavParent.parentElement.querySelector("div.nav-first-child");
        // if(navFirstChild){
        //     navFirstChild.classList.add("nav-first-child-show");
        // }
        // alert("e");
        mainNavParent.parentElement.addEventListener("mouseover",function(){
            if(navFirstChild){
                navFirstChild.classList.add("nav-first-child-show");
            }    
        })
    });    
    mainNavParent.parentElement.addEventListener("mouseout",function(){
        navFirstChild=mainNavParent.parentElement.querySelector("div.nav-first-child");
        if(navFirstChild){
            navFirstChild.classList.remove("nav-first-child-show");
        }

    });
}







// finish main nav container


