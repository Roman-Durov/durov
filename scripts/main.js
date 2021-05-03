var myHeading = document.querySelector('h1');
myHeading.textContent = 'Windows';

var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/head-avatar.jpg') {
        myImage.setAttribute('src', 'images/avatar-one.jpg');
    } else {
        myImage.setAttribute('src', 'images/head-avatar.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Введи своё имя.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Привет, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();


} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Привет, перейдем к изучению, ' + storedName;
}


myButton.onclick = function () {
    setUserName();
}
