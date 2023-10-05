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
const firstLi = document.createElement('li');
const secondLi = document.createElement('li');
const thirdLi = document.createElement('li');
const fourthLi = document.createElement('li');
//firstLi.textContent = "Section 1"

/*const lists = ["", "", "", ""];
const fragment = new DocumentFragment();*/
const newAnchorOne = document.createElement('a');
const newAnchorTwo = document.createElement('a');
const newAnchorThree = document.createElement('a');
const newAnchorFour = document.createElement('a');




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
*/
//The code for the Navigation
//The first Section
newAnchorOne.textContent = ('Section 1');
newAnchorOne.setAttribute('href', '#section1');
firstLi.appendChild(newAnchorOne);
ul.append(firstLi);
//The second Section
newAnchorTwo.textContent = ('Section 2');
newAnchorTwo.setAttribute('href', '#section2');
secondLi.appendChild(newAnchorTwo);
ul.append(secondLi);
//The third Section
newAnchorThree.textContent = ('Section 3');
newAnchorThree.setAttribute('href', '#section3');
thirdLi.appendChild(newAnchorThree);
ul.append(thirdLi);
//The fourth Section
newAnchorFour.textContent = ('Section 4');
newAnchorFour.setAttribute('href', '#section4');
fourthLi.appendChild(newAnchorFour);
ul.append(fourthLi);

/**
 * End Main Functions
 * Begin Events
 * 
*/


// Scroll to section on link click

// Set sections as active on scoll
document.addEventListener("scroll", function () {isInViewport();})

li.addEventListener('click', function () {
    //Smooth scroll to the corresponding section
    //behavior: "smooth";
    document.body.style.backgroundColor = "red";
    document.body.style.Color = "blue";
    firstSec.scrollTo({
        top: 100,
        behavior: "smooth",
      });
})
