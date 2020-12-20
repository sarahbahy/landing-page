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
const docFrag = document.createDocumentFragment();
const sections = document.querySelectorAll('section');
const nav = document.querySelector('#navbar__list');
/**
 * End Global Variables
 * 
*/

/**
 * Begin Main Functions
 * 
*/
// build the nav
function buildLink(section){
    const name= section.getAttribute('data-nav');
    const newElement = document.createElement('li');
    newElement.textContent = name;
    newElement.classList.add('menu__link');
    docFrag.appendChild(newElement);
}
// Build menu 
sections.forEach(buildLink);
document.getElementById('navbar__list').appendChild(docFrag);

// Scroll to anchor ID using scrollTO event
function scroll(evt){
    
    const sec_data_nav = evt.target.textContent;
    //get section that has attribute data-nav with value equals to text in this nav link
    const section = document.querySelector(`[data-nav="${sec_data_nav}"]`);
    const top = section.offsetTop;
    window.scrollTo({
        top: top,
        behavior: 'smooth'
    });

}

// Add class 'active' to section when near top of viewport
function setActive() {
    sections.forEach(function(section){
        section.classList.remove('active-class')
        const rect = section.getBoundingClientRect();
        if(rect.top > -320 && rect.top <100){
            section.classList.add('active-class');
        }
        // for mobile version
        if(rect.height >1000){
            if(rect.top > -720 && rect.top <100){
                section.classList.add('active-class');
            }
        }
    });
}



/**
 * End Main Functions
 * Begin Events
 * 
*/


// Scroll to section on link click
nav.addEventListener('click',scroll);

// Set sections as active
document.addEventListener('scroll',setActive );

