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
const fragment = document.createDocumentFragment();

const sections = document.querySelectorAll('section');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createNavItemHTML (id, name) {
    const navItemHTML =`<a class="menu__link" data-id="${id}">${name}</a>`;
    return navItemHTML;
}

function isInViewport (element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || window.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || window.documentElement.clientWidth)
    );
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavMenu () {
    for (let i=0; i<sections.length; ++i) {
        const navMenuItem = document.createElement('li');
        const sectionName = sections[i].getAttribute('data-nav');
        const sectionId = sections[i].getAttribute('id');
        navMenuItem.innerHTML = createNavItemHTML(sectionId, sectionName);
        fragment.appendChild(navMenuItem);
    }
    const navBarList = document.getElementById('navbar__list');
    navBarList.appendChild(fragment);
}

// Add class 'active' to section when near top of viewport
function sectionInView() {
    for (let i=0; i<sections.length; ++i) {
        if (isInViewport(sections[i])) {
            sections[i].classList.add('your-active-class');
        } else {
            sections[i].classList.remove('your-active-class');
        }
    }
}

// Scroll to anchor ID using scrollTO event
function scrollSection (event) {
    if (event.target.nodeName == 'A') {
        const sectionId = event.target.getAttribute('data-id');
        const section = document.getElementById(sectionId);
        section.scrollIntoView({behavior: "smooth"});
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
const navBarMenu = document.getElementById('navbar__list');
navBarMenu.addEventListener('click', function(event) {
    scrollSection(event);
});
// Set sections as active
document.addEventListener('scroll', function() {
    sectionInView();
});

