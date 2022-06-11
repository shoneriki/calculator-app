This is a frontend mentor challenge to build a simple calculator with color themes.



What I learned:

|HTML/CSS| What I learned|Demo|
|:----:|----|----|
|1. Theme Slider | Figuring out the theme slider was somewhat of a challenge. I wasn't aware that you  can set the labels for an input to be hidden, but use it for create the sliding toggle on top with relative/absolute positioning.|
```
#toggle-1:checked ~ .slider {
  left:0px;
}
#toggle-2:checked ~ .slider {
  left: 14px;
}
#toggle-3:checked ~ .slider {
  left: 28px;
}
```

2. customized css variables with data-theme attribute|I was familiar with setting variables for a project for easy reference, but I was unaware I can use this to my advantage for setting different themes as well. For example setting a background color variable and changing the actual color for each |
