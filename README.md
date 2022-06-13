<!-- This is a frontend mentor challenge to build a simple calculator with color theme -->
<!-- What I learned:

|HTML/CSS| What I learned |
|:------:|----------------|
|1. Theme Slider | Figuring out the theme slider was somewhat of a challenge. I wasn't aware that you  can hide the labels for an input , but still use the same labels for create the sliding toggle on top with relative/absolute positioning.|
|2. Customized css variables with [data-theme] attribute | I was familiar with setting variables for a project for easy reference, but I was unaware I can use this to my advantage for setting different themes as well.  |

|Javascript| What I learned |
|1. General layout | Figured out the generic function of creating the calculator. First thing was storing two numbers into a number array (numArray), then setting the operator to an operator variable in between the two numbers. Then evaluating the two numbers  | -->


# Frontend Mentor - Calculator app solution

This is my solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

This calculator:

- is responsive to mobile and desktop designs
- performs addition, subtraction, multiplication and division (includes use of floats as well)
- A 3 theme selector at the top of the calculator

### Screenshot

[images/Calculator-App-Screenshot.png](./screenshot.jpg)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/calculator-app-WgNrrb-GnV]
- Live Site URL: [https://shoneriki.github.io/calculator-app/]

## My process

### Built with

- HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla JavaScript

### What I learned

HTML/CSS

1. When starting out with this project I was not sure about how to handle the different color themes. Luckily, I was fortunate to learn that I can set a data-theme attribute for the app (to set it on the background). I set the value to correspond with the different themes (one, two, three for the first, second, third themes respectively).

2. Relating to the above, I was not aware that you can set the variables to be different depending on the theme (i.e. var(--bg) for the background color for each theme).This is a game-changer for me since that means that in the future if I wanted to set the background color for a feature to be different for a different theme/page, I can just change the value of the variable for each instance. Which means I wouldn't have to define new css properties for each theme body, for example.

3. One of the main challenges I struggled with was the theme slider at the top-right portion of the page. I was not aware that you can use labels to create a slider. Namely, to hide the labels themselves, but to set the lables to be positioned absolutely to create the "stops" for the slider.

JavaScript

I resolved that I would go with the approach of starting with three variables.

1. An empty array(numArray) to store two values that would eventually be used to calculate a value.

2. An operator variable to store the relevant operator (+,-,*,/ for addition, subtraction, multiplication or division).

3. An index for the numArray.

Then creating a simple update display method to make sure that an empty value ("") would always display "0" (as a string), and otherwise display the current number or numArray[i].

Then it was a process of:

1. Having a reset button to set the variables to their default empty values and to use the updateDisplay method to set the value back to zero.

2. Using backspace function (on the delete button) using the slice method to delete each "digit" of the value (as we are still dealing with numbers that are actually strings). Learned that I cannot name the function delete() as it is a reserved word

3. Adding the event listeners for the number buttons in order to add the button's innerText to the numArray[i] value (make sure to first make the value empty when entering any number other than zero so you don't get "09" for example, then add the number into the display).

4. Adding event listeners to the operator buttons. Made sure to store the button's innerText as the operator value and then increment the index (i) of the numArray (numArray[0] to numArray[1]) so you can enter another number into the numArray. Made sure that even though the innerText of the multiplication button is "x", that the operator was to become "*" instead.

5. Creating the equals function for the equals button. Made sure that if the value is "", the display should read "0" so it doesn't display undefined. I was pleasantly surprised that there was an eval() function property so I didn't have to use parseInt on the numbers to evaluate the value. In order to keep this calculator going, I had to reset the values of the operator and numArray[1] as "", make numArray[0] = result, update the display to be numArray[i]/numArray[0]/result.

6. Programmed the dot/decimal button (decBtn) to only insert the dot/decimal if there isn't one already.

### Continued development

I would like to:

1. Get faster in positioning HTML elements with CSS. This still takes more time than I would wish.

2. Be able to cut down on refactoring code in the CSS (I seem to have trouble in selecting individual HTML elements in an efficient manner).

3. Get better with prototyping the different steps in CSS and JavaScript to plan out my future projects and to save time in the long-run.

## Author

- Website - [Sho Neriki](https://www.shoneriki.com)
- Frontend Mentor - [@shoneriki](https://www.frontendmentor.io/profile/shoneriki)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
