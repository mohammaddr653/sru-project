var amoozeshIcon=document.querySelector("div#page-bar div.bar-container>div.row>div.amoozesh-icon");
var parvareshIcon=document.querySelector("div#page-bar div.bar-container>div.row>div.parvaresh-icon");
var searchShowIcon=document.querySelector("div#page-bar div.bar-container>div.search-container>svg.search-icon");
var searchBar=document.querySelector("div#page-bar div.bar-container>div.search-container");
var searchCloseIcon=document.querySelector("div#page-bar div.bar-container>div.search-container>svg.close-icon");
var searchResults=document.querySelector("div#search-results");
var bgDark=document.getElementById("bg-dark");
var headerContainer=document.getElementById("header-container");



amoozeshIcon.addEventListener("click",function(){
    window.scrollTo({ top: 0, behavior: 'smooth'});
    depHeaderButs[1].classList.remove("but-clicked");

    depHeaderButs[0].classList.add("but-clicked");
    departmansShow(depHeaderButs[0].classList);

    // parvareshIcon.classList.remove("parvaresh-icon-light");
    // amoozeshIcon.classList.add("amoozesh-icon-light");
});
parvareshIcon.addEventListener("click",function(){
    window.scrollTo({ top: 0, behavior: 'smooth'});
    depHeaderButs[0].classList.remove("but-clicked");

    depHeaderButs[1].classList.add("but-clicked");
    departmansShow(depHeaderButs[1].classList);

    // amoozeshIcon.classList.remove("amoozesh-icon-light");
    // parvareshIcon.classList.add("parvaresh-icon-light");


});

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

