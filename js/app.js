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
const liMagic = document.querySelectorAll('li')
const firstLi = document.createElement('li');
const secondLi = document.createElement('li');
const thirdLi = document.createElement('li');
const fourthLi = document.createElement('li');
//anchor elements for the nav
const newAnchorOne = document.createElement('a');
const newAnchorTwo = document.createElement('a');
const newAnchorThree = document.createElement('a');
const newAnchorFour = document.createElement('a');

//Variables for the sections
const sections = document.querySelectorAll('main section');
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



/**
 * End Helper Functions
 * Begin Main Functions
*/
//The code for the Navigation
//The first Section
newAnchorOne.textContent = ('Section 1');
newAnchorOne.setAttribute('href', '#section1');
firstLi.appendChild(newAnchorOne);
firstLi.setAttribute('id', 'section1-nav')
ul.append(firstLi);
//The second Section
newAnchorTwo.textContent = ('Section 2');
newAnchorTwo.setAttribute('href', '#section2');
secondLi.appendChild(newAnchorTwo);
secondLi.setAttribute('id', 'section2-nav')
ul.append(secondLi);
//The third Section
newAnchorThree.textContent = ('Section 3');
newAnchorThree.setAttribute('href', '#section3');
thirdLi.appendChild(newAnchorThree);
thirdLi.setAttribute('id', 'section3-nav')
ul.append(thirdLi);
//The fourth Section
newAnchorFour.textContent = ('Section 4');
newAnchorFour.setAttribute('href', '#section4');
fourthLi.appendChild(newAnchorFour);
fourthLi.setAttribute('id', 'section4-nav')
ul.append(fourthLi);


function isInViewport() {
    //Looping through the ↓ sections to find the section in view
    for (const section of sections) {
        const box = section.getBoundingClientRect();
        if (box.top <= 150 && box.bottom >= 150) {
            section.classList.add("your-active-class");
            if (firstSec.classList.contains("your-active-class") === true){
                firstLi.classList.add('active-highlighter');
            }
            if (secondSec.classList.contains("your-active-class") === true) {
                secondLi.classList.add('active-highlighter');
            } 
            if (thirdSec.classList.contains("your-active-class") === true) {
                thirdLi.classList.add('active-highlighter');
            }
            if (fourthSec.classList.contains("your-active-class") === true) {
                fourthLi.classList.add('active-highlighter');
            }
            else {
                firstLi.classList.remove("active-highlighter");
            secondLi.classList.remove("active-highlighter");
            thirdLi.classList.remove("active-highlighter");
            fourthLi.classList.remove("active-highlighter");
            }
        } else {
            section.classList.remove("your-active-class");
            
        }
    }
}



/**
 * End Main Functions
 * Begin Events
 * 
*/


// Scroll to section on link click

// Set sections as active on scoll
document.addEventListener("scroll", function () {isInViewport();})

document.addEventListener('click', function () {
    //Smooth scroll to the corresponding section
    //const box = sections.getBoundingClientRect();
    //behavior: "smooth";
    window.scrollBy({
    top: 150,
    behavior: "smooth",
});

})
