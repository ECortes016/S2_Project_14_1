"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Emmanuel Cortes Castaneda
   Date: 4.2.19

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/

// Upon the window loading the setStyles function will run
window.onload = setStyles;

function setStyles() {
      var styleNum = randInt(5);

      // The node fancySheet will create a link element and will be assigned the given attributes
      var fancySheet = document.createElement("link");
      fancySheet.setAttribute("rel", "stylesheet");
      fancySheet.setAttribute("id", "fancySheet");
      fancySheet.setAttribute("href", "na_style_" + styleNum + ".css");
      // The node fancySheet will be placed in the head of the document
      document.head.appendChild(fancySheet);

      // node figBox will create a figure element set to the id of styleThumbs and will be appended to the div with the id of 'box'
      var figBox = document.createElement("figure");
      figBox.setAttribute("id", "styleThumbs");
      document.getElementById("box").appendChild(figBox);

      // This for loop will create img elements and will be assigned the given attributes
      for (var i = 0; i <= 4; i++) {
            var sheetImg = document.createElement("img");
            sheetImg.setAttribute("src", "na_small_" + i + ".png");
            sheetImg.setAttribute("alt", "na_style_" + i + ".css");

            // The anonymous function will change the fancySheet href attribute to the alt attribute of the sheetImg
            sheetImg.onclick = function (e) {
                  fancySheet.setAttribute("href", e.target.alt);
            }

            figBox.appendChild(sheetImg);
      }

      // The thumbStyles variable is a stylesheet that will applied to the head of the html document
      var thumbStyles = document.createElement("style");
      document.head.appendChild(thumbStyles);

      // The following lines of code are styles for the figure element
      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs { \
                  position: absolute; \
                  left: 0px; \
                  bottom: 0px; \
                  }", 0);

      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img { \
                  outline: 1px solid black;\
                  cursor: pointer;\
                  opacity: .75;\
                  }", 1);

      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img:hover { \
                  outline: 1px solid red; \
                  opacity: 1.0; \
                  }", 2);
}

function randInt(size) {
      return Math.floor(size * Math.random());
}