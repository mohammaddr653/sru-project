var userCardTemplate=document.querySelector("[data-user-template]");
var userCardContainer=document.querySelector("[data-user-container]");
var dataSearch=document.querySelector("[data-search]");
var searchSubmit=document.querySelector("[search-submit]");
var searchCloseIcon=document.querySelector("div#page-bar div.bar-container>div.search-container>svg.close-icon");

// const resultCarousel=document.querySelector("div.result-carousel");
// var value;
fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => {
        dataSearch.addEventListener("input" , e => {
            var value=e.target.value.toLowerCase();
            userCardContainer.innerHTML=" ";
            const resultCarousel=document.createElement("div");
            resultCarousel.classList.add('owl-carousel', 'result-carousel');
            userCardContainer.append(resultCarousel);
            data.forEach(user =>{
                var card = userCardTemplate.content.cloneNode(true).children[0];
                var cardImg=card.querySelector("[card-img]");
                cardImg.src="images/243125.jpg";
                var cardTitle=card.querySelector("[card-title]");
                var isVisible= user.name.toLowerCase().includes(value) && (value !="") && (value !=" ") && (value !=null);
                if(isVisible==true){
                    cardTitle.textContent=user.name;
                    userCardContainer.querySelector("div.result-carousel").append(card);
                }
            })
            createSlider();

        })
    })        
searchCloseIcon.addEventListener("click",function clearSearch(){
    dataSearch.value="";
    userCardContainer.innerHTML=" ";
});
    

    // users.forEach(user => {
    //     var indexOfUser=users.indexOf(user);
    //     const isVisible= user.name.toLowerCase().includes(value)&& (value !="") && (value !=" ") && (value !=null);
        
    //     user.element.classList.toggle("show" , isVisible);
    //     createSlider();
    // })
    function createSlider(){
        $(document).ready(function(){
            $(".result-carousel").owlCarousel();
          });
        $('.result-carousel').owlCarousel({
            loop: false,
            navRewind: false,
            margin:25,
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
                    items:5
                }
            }
        })
    }
    