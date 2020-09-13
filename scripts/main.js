let myImage = document.getElementById('img1');
let myA = document.getElementById('baidu');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/baidu.png') {
        myImage.setAttribute('src', '/images/steam.jpg');
        myA.setAttribute('href', 'https://baidu.com/');
        alert('steam is the best');
    } else {
        myImage.setAttribute('src', '/images/baidu.png');
        myA.setAttribute('href', 'https://store.steampowered.com/');
        alert('badi is better than steam');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('please input your name: ');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 苦逼了 ' + myName;
    }

}

myButton.onclick = function () {
    setUserName();
}
