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






const courseSection=document.querySelector("[course-section]");
const articleSection=document.querySelector("[article-section]");
const applicationSection=document.querySelector("[application-section]");

const courseFilter=document.querySelector("[course-filter]");
const articleFilter=document.querySelector("[article-filter]");
const applicationFilter=document.querySelector("[application-filter]");

const courseArchive=document.querySelector("[course-archive]");
const articleArchive=document.querySelector("[article-archive]");
const applicationArchive=document.querySelector("[application-archive]");




courseSection.addEventListener('click',courseSectionShow);
articleSection.addEventListener('click',articleSectionShow);
applicationSection.addEventListener('click',applicationSectionShow);


function courseSectionShow(){
    courseSection.classList.add("archive-section-active");
    articleSection.classList.remove("archive-section-active");
    applicationSection.classList.remove("archive-section-active");

    courseFilter.classList.add("archive-filters-show");
    articleFilter.classList.remove("archive-filters-show");
    applicationFilter.classList.remove("archive-filters-show");

    courseArchive.classList.add("archive-div-show");
    articleArchive.classList.remove("archive-div-show");
    applicationArchive.classList.remove("archive-div-show");




}
function articleSectionShow(){
    courseSection.classList.remove("archive-section-active");
    articleSection.classList.add("archive-section-active");
    applicationSection.classList.remove("archive-section-active");

    courseFilter.classList.remove("archive-filters-show");
    articleFilter.classList.add("archive-filters-show");
    applicationFilter.classList.remove("archive-filters-show");

    courseArchive.classList.remove("archive-div-show");
    articleArchive.classList.add("archive-div-show");
    applicationArchive.classList.remove("archive-div-show");


}
function applicationSectionShow(){
    courseSection.classList.remove("archive-section-active");
    articleSection.classList.remove("archive-section-active");
    applicationSection.classList.add("archive-section-active");

    courseFilter.classList.remove("archive-filters-show");
    articleFilter.classList.remove("archive-filters-show");
    applicationFilter.classList.add("archive-filters-show");

    courseArchive.classList.remove("archive-div-show");
    articleArchive.classList.remove("archive-div-show");
    applicationArchive.classList.add("archive-div-show");


}


// start article archive 


let postsContentPreview = document.querySelectorAll("div#main-container div.archive-div>div.article-archive>div.dep-car-content>a>div.card-bottom>div.card-bottom-title>p");
for(let postContentPreview of postsContentPreview ){
    let result = postContentPreview.innerHTML.substring(0,120);

    postContentPreview.innerHTML = result+"...";
    // console.log(postContentPreview.innerHTML.substring(1,10));
    
}


// finish article archive 


// start archive aside


const mobArchiveAccordion=document.querySelector("div.mob-archive-accordion");
const archiveSide=document.querySelector("aside.archive-side");
const archiveAccordionDownIcon=document.querySelector("div.mob-archive-accordion>svg.bi-chevron-compact-down");


mobArchiveAccordion.addEventListener("click",archiveSideOpen);

function archiveSideOpen(){
    if(archiveSide.classList.contains("archive-side-open") || archiveAccordionDownIcon.classList.contains("bi-chevron-compact-down-roundup")){
        archiveSide.classList.remove("archive-side-open");
        archiveAccordionDownIcon.classList.remove("bi-chevron-compact-down-roundup");
        archiveAccordionDownIcon.classList.add("bi-chevron-compact-down-rounddown");

    }else{
        archiveSide.classList.add("archive-side-open");
        archiveAccordionDownIcon.classList.remove("bi-chevron-compact-down-rounddown");
        archiveAccordionDownIcon.classList.add("bi-chevron-compact-down-roundup");


    }
}



// finish archive aside
