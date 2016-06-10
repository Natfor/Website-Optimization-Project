## Website Performance Optimization portfolio project
The entire project is hosted in Github Pages, you can load the site using this url: http://natfor.github.io/Website-Optimization-Project

Gulp was used to minify js and css files, the gulp file is included in the repository (gulpfile.js)

### Part 1: Optimize PageSpeed Insights score for index.html

I made the following changes for index.html to pass the PageSpeed test with a score above 90:

* Compressed images:
     * The compressed profile pic is located in images/build, the original image is located in images/dev
    * The pizzeria image was resized and compressed to be rendered in this page, the pizzeria image used in the pizza.html page is not being used in this page. The image used is located in views/images/build, the name of the file is pizzeria-small.jpg
* Loading google front by generating the link tag in the js file and appending it to the DOM
* All calls to load css and js files are placed at the bottom of the html file, the js files also have the async attribute included to load asynchronously
* The css and js files are minified, the unminified versions are also included in the repository:
    * CSS: minified files are located in css/build, non minified files are located in css/dev
    * JS: minified files are located in js/build, non minified files are located in js/dev

### Part 2: Optimize Frames per Second in pizza.html
To acces the pizzeria section use this url: http://natfor.github.io/Website-Optimization-Project/views/pizza.html

The following changes were made to optimize pizza.html:

* Pizzeria image was resized and compressed, and pizza image was compressed. The compressed images are located in views/img/build, the original images are located in views/img/dev.
* In the resize pizza function(line 405):
    * The for loop used to change the size of the pizzas was changed for a switch. Percentage values are used to define the different sizes
    * The pizzaContainerArray variable is outside of the function, and the call to document.querySelectorAll(".randomPizzaContainer) is made in the same line to avoid forced reflows that were being generated when the variable was being populated in a for loop
* Added will-change: transform and transform: translateZ(0) to .ramdomPizzaContainer to get the pizzas to be resized on their own layer (style.css)
* Scroll and position update changes
    * The call to document.body.scrollTop was moved to a variable placed outside of the for loop to avoid forced reflows on scroll (line 496)
    * Changed the amount of pizzas generated from 200 to 18, no more than 18 pizzas are actually visible for the user (line 530)
    * Changed the columns for pizzas to 6 (line 528)
    * In the UpdatePostitions function (line 489) I replaced style.left with style.transform, and for the translateX to work I retrieved the innerwidth of the screen and divided it by 2

the referenced lines can be found in the files in the dev folders (non minified files)