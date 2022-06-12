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
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

This calculator:

- is responsive to mobile and desktop designs
- performs addition, subtraction, multiplication and division (includes use of floats as well)
- A 3 theme selector at the top of the calculator

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [https://github.com/shoneriki/calculator-app]
- Live Site URL: [https://shoneriki.github.io/calculator-app/]

## My process

### Built with

- HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla JavaScript

### What I learned

I learned a lot when doing this project.

HTML/CSS

1. When starting out with this project I was not sure how to handle the different themes (with the different color schemes for each theme). Luckily, I was fortunate to learn that I can set a data-theme attribute for the app (I set it on the background), set the value to be corresponding to the different themes (one, two, three for the first, second, third themes respectively).

2. One of the main challenges I struggled with was the theme slider at the top-right portion of the page. I was not aware that you can use labels to create a slider. Chiefly, to hide the labels themselves, but set them positioned absolutely to create the "stops" for the slider.

3. Relating to the above, I was aware of being able to use variables in CSS. However, I was not aware that you can set the variables to be different depending on the theme (i.e. var(--bg) for the background color for each theme).This is a game-changer for me since that means that in the future if I wanted to set the background color for a feature to be different for a different theme/page, I can just change the value of the variable for each instance. Which means I wouldn't have to define new css properties for each theme body, for example.


**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

I would like to:

1. Get faster in positioning HTML elements with CSS.

2. Be able to cut down on refactoring code in the CSS (I seem to have trouble in selecting individual HTML elements in an efficient manner).

3. Get better with prototyping the different steps in CSS and JavaScript to plan out my future projects and to save time.

### Useful resources

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments


This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
