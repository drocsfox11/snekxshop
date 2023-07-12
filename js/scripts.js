$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        infinite: true,
        slidesToShow: 3,
    });
});

document.getElementById('Catalog').addEventListener('click', scrollToElement);
function scrollToElement(e) {
element = document.getElementById("sliderscroll")
element.scrollIntoView({
    behavior: 'smooth'
});;
}

document.getElementById('Delivery').addEventListener('click', scrollToElement);
function scrollToElement(e) {
element = document.getElementById("planetscroll")
element.scrollIntoView({
    behavior: 'smooth'
});;
}

document.getElementById('Support').addEventListener('click', scrollToElement);
function scrollToElement(e) {
element = document.getElementById("socialscrool")
element.scrollIntoView({
    behavior: 'smooth'
});;
}

document.getElementById('main_btn').addEventListener('click', scrollToElement);
function scrollToElement(e) {
element = document.getElementById("sliderscroll")
element.scrollIntoView({
    behavior: 'smooth'
});;
}






