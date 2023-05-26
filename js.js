const slides = document.querySelectorAll(".step_card");
const circle = document.getElementsByClassName(".circle_element")


slides.forEach((slide, indx) =>{
    slide.style.transform = `translateX(${indx * 200}%)`;
});

let curSlide = 1
let maxSlide = 3
let minSlide = 0
const conFirm =document.querySelector("#confirm")
const nextSlide = document.querySelector(".next");
const prevSlide = document.querySelector(".back");


nextSlide.addEventListener("click", function(){
    slides.forEach((slide, indx) =>{
        slide.style.transform = `translateX(${200 * (indx -curSlide)}%)`;
});
    if (curSlide === maxSlide){
        nextSlide.style.display = "none";
        conFirm.style.display = "unset";
        curSlide++;
        changeCircle(curSlide); 
    }    else if (curSlide === 1){
          prevSlide.classList.remove("invisible")
          curSlide++;
          changeCircle(curSlide); 
    }
      else{
     curSlide++;
     changeCircle(curSlide); 
    }
});

prevSlide.addEventListener("click", function(){
   curSlide--;
   slides.forEach((slide, indx) =>{
        slide.style.transform = `translateX(${200 * (indx -curSlide)}%)`;
    });

});
conFirm.addEventListener("click", function(){
    slides.forEach((slide, indx) =>{
        slide.style.transform = `translateX(${200 * (indx -curSlide)}%)`;
        conFirm.style.display = "none"
        prevSlide.classList.add("invisible")
    });

});
function changeCircle(curSlide){
    document.querySelector(`body > main > section.sidebar > div:nth-child(${curSlide}) > div.circle_element`).classList.add("circle_current")
};

function removeCircle(curSlide){
    document.querySelector(`body > main > section.sidebar > div:nth-child(${curSlide}) > div.circle_element`).classList.remove("circle_current")
};

const mon_year = document.querySelector(".slider")
const months = document.querySelectorAll(".monthly")
const years = document.querySelectorAll(".yearly")

mon_year.addEventListener("click", function(){
    months.forEach((month)=>{
        month.classList.toggle('display_none') 
    })
    years.forEach((year)=>{
        year.classList.toggle('display_none')
    })
});

const planCards = document.querySelectorAll(".plan_card")
planCards.forEach((planCard, index)=>{
    
    planCard.addEventListener("click", function(index){
            planCards.forEach((planCard, index)=>{
                planCard.classList.remove('select_plan')

            })

            planCard.classList.add('select_plan')
    });
})
function planSelection(){

}
;