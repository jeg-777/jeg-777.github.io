// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/microsoft_edge.jpg") {
      myImage.setAttribute("src", "images/Edge.webp");
    } else {
      myImage.setAttribute("src", "images/microsoft_edge.jpg");
    }
  };

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Microsoft Edge is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Microsoft Edge is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
};

/*
let myVariable = "Bob";
myVariable = "Steve";


/*
Everything in between is a comment.
*/

///let iceCream = "chocolate";
///if (iceCream === "chocolate") {
///  alert("Yay, I love chocolate ice cream!");
///} else {
///  alert("Awwww, but chocolate is my favorite…");
///}

///let myVariable = document.querySelector("h1");

///alert("hello!");

///function multiply(num1, num2) {
///    let result = num1 * num2;
///    return result;
///  }

/*
multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);
*/

///document.querySelector("html").addEventListener("click", function () {
///    alert("Ouch! Stop poking me!");
///  });

