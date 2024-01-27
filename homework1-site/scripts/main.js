let myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let myButton2 = document.querySelector("button");
let myHeading = document.querySelector("h1");
let mySubheading = document.querySelector("h2")

function changePicture() {
  const mySrc = myImage.getAttribute("src");
    myImage.setAttribute("src", "pipeline.png");
  }
  myButton.onclick = () => {
    changePicture();
  };
  function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      mySubheading.textContent = `Thank you for visiting my site', ${myName}!`;
    } 
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    mySubheading.textContent = `Thank you for visiting my site ${storedName}!`;
  }
