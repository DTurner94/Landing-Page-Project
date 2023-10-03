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

/*Current Tasks
-Figure out how to make the nav li link to the sections
-Figure out how to toggle on and off the classes
   -More global vars???
-


/*


/* Define Global Variables*/
/*Created variables for future use*/


//Navigation bar variables
const ul = document.getElementById('navbar__list');
const li = document.querySelectorAll('li');
const lists = ["Section 1", "Section 2", "Section 3", "Section 4"];
const fragment = new DocumentFragment();



//Variables for the sections
const sections = document.querySelectorAll('section');
const firstSec = document.getElementById('section1');
const secondSec = document.getElementById('section2');
const thirdSec = document.getElementById('section3');
const fourthSec = document.getElementById('section4');

//Building the section variables
const activeClass = document.getElementsByClassName("your-active-class");
const dataWizardry = document.querySelectorAll('[data-nav]');


/**
 * End Global Variables
 * Start Helper Functions
*/


function isInViewport() {
    //Looping through the ↓ sections to find the section in view
    //Working but now working too well.
    //I made a mess of this
        const firstBox = firstSec.getBoundingClientRect();
        const secondBox =secondSec.getBoundingClientRect();
        const thirdBox = thirdSec.getBoundingClientRect();
        const fourthBox = fourthSec.getBoundingClientRect();
    //Still targeted even if its not in viewport
    //Values are not correct in the slightest, not even negatives are working
    //first section
        if (firstBox.top <= 8 /*&& firstBox.bottom <= -649*/) {
            //If the section is in view add the class ↑
            firstSec.classList.toggle("your-active-class");
            console.log('Class is active!!!');
        } else {
            secondSec.classList.remove("your-active-class");
            thirdSec.classList.remove("your-active-class");
            fourthSec.classList.remove("your-active-class");
        }
    //second section
        if (secondBox.top <= 47 && secondBox.bottom <= 249) {
            secondSec.classList.toggle("your-active-class");
            console.log('2nd Class is active!!!');
        } else {
            firstSec.classList.remove("your-active-class");
            thirdSec.classList.remove("your-active-class");
            fourthSec.classList.remove("your-active-class");
        }
    //third section
    if (thirdBox.top <= 29 && thirdBox.bottom <= 107) {
        thirdSec.classList.toggle("your-active-class");
        console.log('3rd Class is active!!!');
    } else {
        secondSec.classList.remove("your-active-class");
            firstSec.classList.remove("your-active-class");
            fourthSec.classList.remove("your-active-class");
     }
    //fourth section
    if (fourthBox.top <= 29) {
            fourthSec.classList.toggle("your-active-class");
            console.log('4th Class is active!!!');
    } else {  
        firstSec.classList.remove("your-active-class");
            thirdSec.classList.remove("your-active-class");
            secondSec.classList.remove("your-active-class");
      }
}





/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


//The text for the Navigation
for (const list of lists) {
    const li = document.createElement("li");
    li.textContent = list;
    fragment.append(li);
}
ul.append(fragment);



// Add class 'active' to section when near top of viewport
//Step1: Need to figure out to see what's in viewport
//Step2: Need to set whatever is in current viewport to active  







/**
 * End Main Functions
 * Begin Events
 * 
*/

// Scroll to anchor ID using scrollTO event
//used for smooth scrolling
// Build menu 
// Scroll to section on link click
/*li.addEventListener('click', function () {
    //Smooth scroll to the corresponding section
    window.scrollTo({
        top: 100,
        left: 100,
        behavior: "smooth",
      });
}) */

// Set sections as active on scoll
document.addEventListener("scroll", function () { isInViewport(); })

