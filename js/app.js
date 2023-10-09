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
const navItems = ["Section 1", "Section 2", "Section 3", "Section 4"];
const firstAnchor = document.getElementById('nav-1')

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
/*function navItems() {
    for (const section of sections) {
        const anchor = document.createElement("a");
    anchor.innerText = item;
    anchor.classList.add("nav-items");
    anchor.setAttribute("id", `nav-${i + 1}`);
    anchor.href = `#section${i + 1}`;
    //navList.appendChild(anchor);
  
    const li = document.createElement("li");
    li.classList.add("nav-list");
    li.appendChild(anchor);
    li.setAttribute("id", `${i + 1}`);
    // Append the list item to the list
    li.appendChild(anchor);
    ul.appendChild(li);
    }
}*/

navItems.forEach((item, i) => {
    const anchor = document.createElement("a");
    anchor.innerText = item;
    anchor.classList.add("nav-items");
    anchor.setAttribute("id", `nav-${i + 1}`);
    anchor.href = `#section${i + 1}`;
    //navList.appendChild(el);
  
    const li = document.createElement("li");
    li.classList.add("nav-list");
    li.appendChild(anchor);
    li.setAttribute("id", `${i + 1}`);
    // Append the list item to the list
    li.appendChild(anchor);
    ul.appendChild(li);
  });


function isInViewport() {
    //Looping through the ↓ sections to find the section in view
    for (const section of sections) {
        const box = section.getBoundingClientRect();
        if (box.top <= 150 && box.bottom >= 150) {
            section.classList.add("your-active-class");
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
document.addEventListener("click", function(event) {
    let active = document.querySelector(".nav-list.active");
    if (active) active.classList.remove("active");
    if (event.target.classList.contains("nav-list")) {
      event.target.classList.add("active");
      window.location.href = "#section" + event.target.id;
    }
  });
