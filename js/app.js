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
    for (const section of sections) {
        //Need to figure out why it's not working
        const box = sections.getBoundingClientRect();
        //need to figure out if the values are correct on not
        //This should target the section in view but nothing is working so far
        if (box.top <= 150 && box.bottom <= 150) {
            //If the section is in view add the class
            section.classList.toggle("your-active-class");
            console.log('Class is active!!!');
        } 
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

//Need to use data-nav or id to link to the sections

//Added the class to the sections for toggling
secondSec.classList.add("your-active-class");
thirdSec.classList.add("your-active-class");
fourthSec.classList.add("your-active-class");


// Add class 'active' to section when near top of viewport
//Step1: Need to figure out to see what's in viewport
//Step2: Need to set whatever is in current viewport to active  

//If statement?
/*
 if (section is in viewport){
 set the the class of the section to active
 or add the section class to active w/ classList add method
 } else {
 remove active from the class
 or remove the class from the section w/ classList remove method
 }
 }
 }
*/





/**
 * End Main Functions
 * Begin Events
 * 
*/

// Scroll to anchor ID using scrollTO event
//used for smooth scrolling
// Build menu 

// Scroll to section on link click
/*document.addEventListener('click', function (e) {
    //Add prevent default
    //When a nav button is clicked on the navigation bar it will go to the correspind section

})*/
// Set sections as active on scoll
document.addEventListener("scroll", isInViewport())
document.addEventListener('click', function () {
    thirdSec.classList.toggle('your-active-class')
    console.log('Section color is now blue')
})
