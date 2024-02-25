var amoozeshIcon=document.querySelector("div#page-bar div.bar-container>div.row>div.amoozesh-icon");
var parvareshIcon=document.querySelector("div#page-bar div.bar-container>div.row>div.parvaresh-icon");
var searchShowIcon=document.querySelector("div#page-bar div.bar-container>div.search-container>svg.search-icon");
var searchBar=document.querySelector("div#page-bar div.bar-container>div.search-container");
var searchCloseIcon=document.querySelector("div#page-bar div.bar-container>div.search-container>svg.close-icon");
var searchResults=document.querySelector("div#search-results");
var bgDark=document.getElementById("bg-dark");
var headerContainer=document.getElementById("header-container");



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

