/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const navList = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Begin Main Functions
 * 
*/

// build the nav
// Scroll to section on link click 

sections.forEach((element, index) => {
    let navElement = element.getAttribute("data-nav");
    let listElement = document.createElement("li");
    listElement.innerHTML = `<a href="#section${index+1}">${navElement}</a>`
    navList.appendChild(listElement);

});

// Add class 'active' to section when near top of viewport

window.addEventListener('scroll', event => {
    const sectionsScroll = document.querySelectorAll('.scroll-section');
    let fromTop = window.scrollY;
   
    sectionsScroll.forEach(section => {

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            section.classList.add('active');
        } else {
        section.classList.remove('active');
        }
    });
});

//Active navigation on scroll

window.addEventListener('scroll', event => {
    const navigationLinks = document.querySelectorAll('nav ul li a');
    let fromTop = window.scrollY;
   
    navigationLinks.forEach(link => {

    let section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

/**
 * End Main Functions
 * 
*/

