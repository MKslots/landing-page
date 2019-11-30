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


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

const navList = document.querySelector(".navbar");


const sections = document.querySelectorAll("section");

sections.forEach((element, index) => {
    let navElement = element.getAttribute("data-nav");
    let listElement = document.createElement("li");
    listElement.innerHTML = `<a href="#section${index+1}">${navElement}</a>`
    navList.appendChild(listElement);

});


//Active navigation on scroll
window.addEventListener('scroll', event => {
let navigationLinks = document.querySelectorAll('nav ul li a');
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


  window.addEventListener('scroll', event => {
    let navigationLinks = document.querySelectorAll('section');
        let fromTop = window.scrollY;
       
        navigationLinks.forEach(link => {
    
          let section = document.querySelector(".scroll-section");
    
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


function backToTop() {

    window.scroll(0, 0);

};
