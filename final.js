// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/DSC03306-scaled.jpg") {
      myImage.setAttribute("src", "images/Beans.jpg");
    } else {
      myImage.setAttribute("src", "images/DSC03306-scaled.jpg");
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
    myHeading.innerHTML = 'Hello, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Hello, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
};