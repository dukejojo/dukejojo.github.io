let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Analytics.jpeg') {
      myImage.setAttribute('src','images/Blockchain-blog.jpg');
    } else {
      myImage.setAttribute('src','images/Analytics.jpeg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Bitcoin is cool, ' + myName;
    }
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Bitcoin is cool, ' + storedName;
  }

  
  myButton.onclick = function() {
    setUserName();
  }