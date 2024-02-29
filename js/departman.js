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


// finish main nav container


