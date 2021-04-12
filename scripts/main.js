let myImage = document.getElementById('img1');
let myA = document.getElementById('baidu');
let mytext = document.querySelector('input');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/baidu.png') {
        myImage.setAttribute('src', 'images/steam.jpg');
        
        alert('steam is the best');
    } else if (mySrc === 'images/wsx1.jpg') {
        myImage.setAttribute('src', 'images/wsx2.jpg');
        alert('永远最可爱！');
    } else if (mySrc === 'images/wsx2.jpg') {
        myImage.setAttribute('src', 'images/wsx1.jpg');
        alert('你还是最可爱！');
    } else {
        myImage.setAttribute('src', 'images/baidu.png');
        alert('badi is better than steam');
    }
}

let myButton = document.getElementById('button1');
let button2 = document.getElementById('button2');

let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('please input your name: ');
    if (!myName || myName === null) {
        setUserName();
    } else if (myName === "魏苏新"){
        localStorage.setItem('name', myName);
        myHeading.textContent = myName + " 好可爱";
        myImage.setAttribute('src', 'images/wsx1.jpg');
        myA.setAttribute('href', '');
        alert('永远最可爱！');
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = myName + " 超厉害";
    }

}

myButton.onclick = function () {
    setUserName();
}
