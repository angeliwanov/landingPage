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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navBarMenu = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
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
function buildNavMenu () {
    const fragment = document.createDocumentFragment();
    for (const section of sections) {
        const menuItem = document.createElement('li');
        menuItem.innerHTML = `<a class="menu__link" data-id="${section.getAttribute('id')}">${section.getAttribute('data-nav')}</a>`;
        fragment.appendChild(menuItem);
    }
    navBarMenu.appendChild(fragment);
}

// Add class 'active' to section when near top of viewport
function makeActive() {
    for (const section of sections) {
      const box = section.getBoundingClientRect();
      if (box.top <= 150 && box.bottom >= 150) {
          section.classList.add('your-active-class');
      } else {
          section.classList.remove('your-active-class');
      }
    }
  }

// Scroll to anchor ID using scrollTO event
function scrollSection (event) {
    if (event.target.nodeName.toLowerCase() == 'a') {
        const section = document.getElementById(event.target.getAttribute('data-id')).offsetTop;
        window.scrollTo({top: section});
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
buildNavMenu();

// Scroll to section on link click
navBarMenu.addEventListener('click', function(event) {
    scrollSection(event);
});

// Set sections as active
document.addEventListener("scroll", function() {
    makeActive();
  });

