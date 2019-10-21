let buttonClicks = 0;
const upperCaseBox = document.getElementById("upperCaseBox");
const lowerCaseBox = document.getElementById("lowerCaseBox");
const specialCharactersBox = document.getElementById("specialCharactersBox");
const numbersBox = document.getElementById("numbersBox");
const display = document.getElementById("display")
const length = document.getElementById("length")
const slider = document.getElementById("slider")

function generate() {
    buttonClicks++;
    if (vald()) makepw();
}

function makepw() {
    buttonClicks = 0;
    display.value = '';
    display.style.color = 'black';
    let complexity = slider.value;

    //possible password characters
    // let  values  =  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()_-+=";
    let values = [];
    const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+']
    let password = "";

    if (upperCaseBox.checked) {
        values = [...values, ...upperCase];
    }
    if (lowerCaseBox.checked) {
        values = [...values, ...lowerCase];
    }
    if (specialCharactersBox.checked) {
        values = [...values, ...special];
    }
    if (numbersBox.checked) {
        values = [...values, ...numbers];
    }
    //determine password length
    for (var i = 0; i <= complexity; i++) {
        password += values[
            Math.floor(Math.random() * Math.floor(values.length - 1))
        ]
    }
    //Putting password in display area
    display.value = password;
}

//setting default length
length.innerHTML = "length: 8 ";

//function to set length based on user input

slider.oninput = function() {
    if (slider.value > 0) {
        length.innerHTML = "length: " + slider.value;
    } else {
        length.innerHTML = "length: 1"
    }
}

//function to copy password 

function copypassword() {
    display.select();
    document.execCommand("Copy");
    alert("Password Copied to Clipboard");
}

function boisMad() {
    var OSName = "Unknown OS";
    if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
    if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
    if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
    if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";

    if (OSName === "MacOS") {
        alert("Not Today Alex! :( You Better Give Me A Good Grade For The Read.me")
        window.location = "https://raw.githubusercontent.com/JohnParkerHodges/Hw03/master/y-u-no-readme.jpg"
    }

    if (OSName === "Windows") {
        alert("Not Today Max! :(")
        window.location = "https://raw.githubusercontent.com/JohnParkerHodges/Hw03/master/y-u-no-readme.jpg"
    }
}

function vald() {
    if (!upperCaseBox.checked &&
        !lowerCaseBox.checked &&
        !specialCharactersBox.checked &&
        !numbersBox.checked) {
        display.value = 'You must choose a password type';
        display.style.color = 'red'

        if (buttonClicks > 1) {

            setTimeout(() => display.style.backgroundColor = 'red', 50)
            setTimeout(() => display.style.backgroundColor = 'white', 100)
            setTimeout(() => display.style.backgroundColor = 'red', 150)
            setTimeout(() => display.style.backgroundColor = 'white', 200)
        }
        if (buttonClicks > 3) boisMad()
        return false;
    } else return true;
}