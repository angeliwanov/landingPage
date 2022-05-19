# Landing Page Project

## Table of Contents

* [Instructions](#instructions)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

The following functionalities have been implementer:

1. Start by linking your app.js. where should this file go based on your present knowledge? We’ll test some other locations later.
- <script src="app.js"> added at the end of body, after DOM is loaded.

2. Build out your HTML and at least 4 content sections. 
- added 4th and 5th sections in index.html

2.1 Take a quick look at all the HTML elements in index.html. Note the values for their id, class, and data attributes. To manipulate the DOM, you'll be using many of the tools and methods you've learned on these elements (and on those that you will create).
-data-* attribute

2.2 Which data structure can you use to store these sections? This data structure can represent all sections for your page, so it might be a good idea to save it to a variable.
- createDocumentFragment() 

2.3 How you would iterate (i.e., loop) over this data structure?
- querySelectorAll(selectors)

2.4 Think about how you can create, say, an unordered list (i.e., bulleted list) in HTML from this structure, and where you be placing that list.
- function createNavItemHTML(id, name)

2.5 Think about how you’ll test whether a section is in the viewport.
- getBoundingClientRect();

3. Build the navigation menu
- loop over the sections and for each section:
    - create li element
    - get id and data-nav
    - use helper function createNavItemHTML() to create link 
    - append to fragment
- select navBarList
- append fragement to navBarList


4. Add functionality to distinguish the section in view.
- loop over all sections
- check if section is inViewport
- if true - add classList "active"
- if no - remove classList "active"

5. Add the functionality to scroll to sections
- if the event Nodename is 'a' (link)
- then get the section id
- get get section
- scroll to the section

6. Add events
- scroll to section on click using scrollSection()
- set section as active using sectionInViewport()

7. Check for responsiveness using Google Developer Tools