/*
      Application to display a list of customer reviews
      Author: Vanlal Vena
      Date:   03/28/2024

      Filename: project03-04.js
*/

let reviewers = ["WillHa85", "GoldFry26", "Mittens41", "Tompkins8", "Bobby83"];
let reviewType = ["P", "N", "", "", "N"]
let stars = [5, 2, 1, 4, 3];
let reviewDates = ["11/18/2024", "11/17/2024", "11/15/2024", "11/10/2024", "11/07/2024"];
let reviews = [
   "I've owned all of the Dance Off games from the beginning. I have lost 6 pounds since I started playing.",
   "A so-so release of this well-established game. Where this release fails is in the choreography. Many of the moves follow predictable patterns. I hope the next release improves the choreography .",
   "The installation was buggy and kept crashing my gaming console. I spent several hours on tech support with no solution to my problem. I finally returned it and got my money back. I wish I could give it a zero star rating.",
   "The latest version of Dance Off improves upon the 8th Edition only slightly; still is one of the best dance-style games on the market.",
   "Enjoyed the new version.  Just wish that the price was lower.",
];
let reviewTitles = ["My Favorite Workout Game", "Poor Choreography", "Buggy with Poor Tech Support", "Nice Improvement", "Good Game, High Price"];

function starImages(rating) {
      imageText = '';
      for (let i = 1; i <= rating; i++) {
            imageText += "<img src = 'star.png' alt = ''>"
      }
      return imageText;
}

for (let i = 0; i < reviewers.length; i++) {
      let reviewCode = ''; 
      reviewCode += "<table>"; 
      
      if (reviewType[i] == "N") {
          reviewCode += "<table class='prime'>" + reviewTitles[i] + "</caption>";
      } else if (reviewType[i] == "P") {
          reviewCode += "<table class='new'>" + reviewTitles[i] + "</caption  >";
      } else {
          reviewCode += "<table>" + reviewTitles[i] + "</caption>";
      }
  
      reviewCode += "<tr><th>By</th><td>" + reviewers[i] + "</td></tr>";
      reviewCode += "<tr><th>Review Date</th><td>" + reviewDates[i] + "</td></tr>";
      reviewCode += "<tr><th>Rating</th><td>" + starImages(stars[i]) + "</td></tr>";
      reviewCode += "<tr><td colspan='2'>" + reviews[i] + "</td></tr>";
      reviewCode += "</table>"; 
  

      let articleElements = document.getElementsByTagName('article');
      if (articleElements.length > 0) {
          let firstArticle = articleElements[0];
          firstArticle.insertAdjacentHTML('beforeEnd', reviewCode);
      } else {
          console.error("Documents contain no article tag");
      }
  }