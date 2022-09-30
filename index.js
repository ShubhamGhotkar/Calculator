let audio1 = new Audio("num1.mp3");
let audio2 = new Audio("num.mp3");
const input = document.getElementById("input");
let fon = document.getElementById("fon");
input.value = 0;
let str = "";
let ab = 1;
let button_volumn = "on";
let ope_count = true;
let dot_count = true;
function audioonoff() {
    let img = document.getElementById("img");
    if (button_volumn == "off") {
        img.style.backgroundImage = "URL('https://cdn.icon-icons.com/icons2/212/PNG/256/Sound-off256_25032.png')";
        fon.innerHTML = "off";
        button_volumn = "on";
    }
    else {
        img.style.backgroundImage = "URL('https://static.vecteezy.com/system/resources/previews/001/207/007/original/music-player-button-sound-png.png')";
        audio1.play();
        fon.innerHTML = "on";
        button_volumn = "off";
    }
}

const changeColor = (a) => {
    let doc1 = document.getElementById('heading');
    let doc2 = document.getElementById('dark-light');
    let doc3 = document.getElementById('theme');
    let doc4 = document.getElementById('onoff');
    let check = str += a;
    if (str.length % 2 != 0) {
        doc2.style.backgroundColor = "white";
        doc4.style.backgroundColor = "darkslateblue";
        doc1.style.color = "black";
        doc3.style.color = "black";
        doc3.innerHTML = "<small>dark Theme</small>";
    }
    else {
        doc3.style.color = "white";
        doc4.style.backgroundColor = "white";
        doc2.style.backgroundColor = "darkslateblue";
        doc1.style.color = "white";
        doc3.innerHTML = "<small>light Theme</small>";
    }
}
const operator = (ope) => {
    if (ope_count) {
        str += ope;
        input.value = str;
        ope_count = false;
        dot_count = true;
    }
}

const operatordot = (ope) => {
    if (dot_count) {
        str += ope;
        input.value = str;
        dot_count = false;
    }
}
const display = (val) => {
    str += val;
    input.value = str;
    ope_count = true;
    if (button_volumn == "on") {
        audio1.play();
    }
}
const calculate = () => {
    let expration = input.value;
    input.value = eval(expration);
    if (button_volumn == "on") {
        audio1.play();
    }
}
const clearScreen = () => {
    str = "";
    input.value = 0;
    if (button_volumn == "on") {
        audio1.play();
    }
}

const clearone = () => {
    str = input.value;
    str = str.substring(0, str.length - 1);
    input.value = str;
    if (button_volumn == "on") {
        audio1.play();
    }
}
