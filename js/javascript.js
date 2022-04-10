let section = document.querySelector(".skillsUses");
let spans = document.querySelectorAll(".progress span");
const up = document.querySelector(".to_top");
// const theme_btn = document.getElementsByClassName("switch");
// const edit_btn = document.getElementsByClassName("edit-btn");
const body = document.getElementsByTagName("body");
const subNav = document.getElementsByClassName("sidenav");
const popclose = document.getElementsByClassName("popup");
// -------------------------------------------------------------------------------------------------------------------------
// here i saved the first function into a [method1] var,
// first function to show and hide the "to top" button.
function method1(event){
    if (this.scrollY >= 350) {
        up.classList.add("show");
    } else {
        up.classList.remove("show");
    }
};
// where to go and the behavior
up.onclick = function () {
    window.scrollTo({
        top : 0,
        behavior:"smooth",
    });
}
// -------------------------------------------------------------------------------------------------------------------------
// here i saved the secound function into a [method2] var,
// secound function to activate the progress bars.
function method2(event){
    if (window.scrollY >= section.offsetTop - 10) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    } else {
        spans.forEach((span) => {
            span.style.width = 0;
        })
    }
}
// -------------------------------------------------------------------------------------------------------------------------
// here i called the first and the secound function [method1]+[method2] into a "Onscroll" event,
window.onscroll = function (event){
    method1(event);
    method2(event);
}
// -------------------------------------------------------------------------------------------------------------------------  
// here i used jQuery to toggleClass for the main body for dark or light theme
// var togglee= $(document).ready(function(){
//     $(theme_btn).click(function(){
//         $("body").toggleClass("light");
//     });
// });
// __________________________________________________________________________________The End______________________________________________________________________________

// -----------------------------------------------------------
function openNav() {
    $(subNav).toggleClass("active");
}
// -----------------------------------------------------------
// function toggleNav() {
//     $(edit_btn).toggleClass("active");
// }
// ------------------------------------------------
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

  // Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
    }
}
// ---------------------------------------------------------------
// to be function...JQery
$("p.tobe").delay(4800).queue(function(next){
    $(this).attr("class", "tobe active");
    next();
});
// slide in fron top pop up to say this website is under constraction JQery
$("div.popup").delay(8000).queue(function(next){
    $(this).attr("class", "popup active");
    next();
});
// ----------------------------------------------------------------
function closepop(){
    $(popclose).toggleClass("active");
}
// ----------------------------------------------------------------
// new function
feather.replace();

// Just a tiny bit of JavaScript to add classnames to the HTML-element on toggle
var html = document.getElementsByTagName('html');
var radios = document.getElementsByName('themes'); 

for (i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', function() {
        html[0].classList.remove(html[0].classList.item(0));
        html[0].classList.add(this.id);
    });
}
// --------------------
// Slider(all Slides in a container)
const slider = document.querySelector(".slider")
// All trails 
const trail = document.querySelector(".trail").querySelectorAll("div")

// Transform value
let value = 0
// trail index number
let trailValue = 0
// interval (Duration)
let interval = 4000

// Function to slide forward
const slide = (condition) => {
    // CLear interval
    clearInterval(start)
    // update value and trailValue
    condition === "increase" ? initiateINC() : initiateDEC()
    // move slide
    move(value, trailValue)
    // Restart Animation
    animate()
    // start interal for slides back 
    start = setInterval(() => slide("increase"), interval);
}

// function for increase(forward, next) configuration
const initiateINC = () => {
    // Remove active from all trails
    trail.forEach(cur => cur.classList.remove("active"))
    // increase transform value
    value === 80 ? value = 0 : value += 20
    // update trailValue based on value
    trailUpdate()
}

// function for decrease(backward, previous) configuration
const initiateDEC = () => {
     // Remove active from all trails
    trail.forEach(cur => cur.classList.remove("active"))
    // decrease transform value
    value === 0 ? value = 80 : value -= 20
     // update trailValue based on value
    trailUpdate()
}

// function to transform slide 
const move = (S, T) => {
    // transform slider
    slider.style.transform = `translateX(-${S}%)`
    //add active class to the current trail
    trail[T].classList.add("active")
}

const tl = gsap.timeline({defaults: {duration: 0.6, ease: "power2.inOut"}})
tl.from(".bg", {x: "-100%", opacity: 0})
    .from("p", {opacity: 0}, "-=0.3")
    .from("h1", {opacity: 0, y: "30px"}, "-=0.3")
    .from("button", {opacity: 0, y: "-40px"}, "-=0.8")

// function to restart animation
const animate = () => tl.restart()

// function to update trailValue based on slide value
const trailUpdate = () => {
    if (value === 0) {
        trailValue = 0
    } else if (value === 20) {
        trailValue = 1
    } else if (value === 40) {
        trailValue = 2
    } else if (value === 60) {
        trailValue = 3
    } else {
        trailValue = 4
    }
}   

// Start interval for slides
let start = setInterval(() => slide("increase"), interval)

// Next  and  Previous button function (SVG icon with different classes)
document.querySelectorAll("svg").forEach(cur => {
    // Assign function based on the class Name("next" and "prev")
    cur.addEventListener("click", () => cur.classList.contains("next") ? slide("increase") : slide("decrease"))
})

// function to slide when trail is clicked
const clickCheck = (e) => {
    // CLear interval
    clearInterval(start)
    // remove active class from all trails
    trail.forEach(cur => cur.classList.remove("active"))
    // Get selected trail
    const check = e.target
    // add active class
    check.classList.add("active")

    // Update slide value based on the selected trail
    if(check.classList.contains("box1")) {
        value = 0
    } else if (check.classList.contains("box2")) {
        value = 20
    } else if (check.classList.contains("box3")) {
        value = 40
    } else if (check.classList.contains("box4")) {
        value = 60
    } else {
        value = 80
    }
    // update trail based on value
    trailUpdate()
    // transfrom slide
    move(value, trailValue)
    // start animation
    animate()
    // start interval
    start = setInterval(() => slide("increase"), interval)
}

// Add function to all trails
trail.forEach(cur => cur.addEventListener("click", (ev) => clickCheck(ev)))

// Mobile touch Slide Section
const touchSlide = (() => {
    let start, move, change, sliderWidth

    // Do this on initial touch on screen
    slider.addEventListener("touchstart", (e) => {
        // get the touche position of X on the screen
        start = e.touches[0].clientX
        // (each slide with) the width of the slider container divided by the number of slides
        sliderWidth = slider.clientWidth/trail.length
    })
    
    // Do this on touchDrag on screen
    slider.addEventListener("touchmove", (e) => {
        // prevent default function
        e.preventDefault()
        // get the touche position of X on the screen when dragging stops
        move = e.touches[0].clientX
        // Subtract initial position from end position and save to change variabla
        change = start - move
    })

    const mobile = (e) => {
        // if change is greater than a quarter of sliderWidth, next else Do NOTHING
        change > (sliderWidth/4)  ? slide("increase") : null;
        // if change * -1 is greater than a quarter of sliderWidth, prev else Do NOTHING
        (change * -1) > (sliderWidth/4) ? slide("decrease") : null;
        // reset all variable to 0
        [start, move, change, sliderWidth] = [0,0,0,0]
    }
    // call mobile on touch end
    slider.addEventListener("touchend", mobile)
})()
// -----------

